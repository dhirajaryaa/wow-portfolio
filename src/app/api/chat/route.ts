import { NextRequest, NextResponse } from "next/server";
import {
  buildSystemPrompt,
  isPotentiallyMalicious,
  SAFE_FALLBACK_RESPONSE,
} from "@/components/chat/knowledge";
import type { ChatRequest } from "@/components/chat/types";

export const runtime = "nodejs";

const DEFAULT_GROQ_MODEL = "openai/gpt-oss-20b";
const MAX_MESSAGE_LENGTH = 1500;
const MAX_HISTORY_MESSAGES = 8;

// Rate limiting setup (in-memory sliding window per IP)
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 12; // 12 queries per minute

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

function getClientIp(req: NextRequest): string {
  const xForwardedFor = req.headers.get("x-forwarded-for");
  if (xForwardedFor) {
    return xForwardedFor.split(",")[0].trim();
  }
  const xRealIp = req.headers.get("x-real-ip");
  if (xRealIp) return xRealIp.trim();
  const cfConnectingIp = req.headers.get("cf-connecting-ip");
  if (cfConnectingIp) return cfConnectingIp.trim();
  return "127.0.0.1";
}

function checkRateLimit(ip: string): {
  allowed: boolean;
  retryAfter: number;
  remaining: number;
} {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Evict old entries to prevent memory leak
  if (rateLimitMap.size > 2000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.resetTime < now) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || record.resetTime < now) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    });
    return {
      allowed: true,
      retryAfter: 0,
      remaining: MAX_REQUESTS_PER_WINDOW - 1,
    };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);
    return {
      allowed: false,
      retryAfter,
      remaining: 0,
    };
  }

  record.count += 1;
  return {
    allowed: true,
    retryAfter: 0,
    remaining: MAX_REQUESTS_PER_WINDOW - record.count,
  };
}

function getResolvedModel(): string {
  const envModel =
    process.env.GROQ_AI_MODEL?.trim() || process.env.GROQ_MODEL?.trim();
  if (envModel) {
    // Strip wrapping quotes if any
    return envModel.replace(/^["']|["']$/g, "").trim() || DEFAULT_GROQ_MODEL;
  }
  return DEFAULT_GROQ_MODEL;
}

export async function POST(req: NextRequest) {
  try {
    // 1. Check Rate Limit
    const clientIp = getClientIp(req);
    const rateLimit = checkRateLimit(clientIp);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: `You're sending questions too quickly. Please wait ${rateLimit.retryAfter} seconds before trying again.`,
          retryAfter: rateLimit.retryAfter,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.retryAfter),
            "X-RateLimit-Limit": String(MAX_REQUESTS_PER_WINDOW),
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }

    // 2. Validate API Key
    const rawApiKey =
      process.env.GROQ_AI_API_KEY?.trim() || process.env.GROQ_API_KEY?.trim();
    const apiKey = rawApiKey
      ? rawApiKey.replace(/^["']|["']$/g, "").trim()
      : "";
    const groqModel = getResolvedModel();

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Groq API key is not configured. Please add GROQ_AI_API_KEY to your .env file.",
        },
        { status: 500 }
      );
    }

    const body = (await req.json()) as ChatRequest;
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request: messages array is required." },
        { status: 400 }
      );
    }

    // 3. Safety checks on the latest user message
    const latestUserMessage = [...messages]
      .reverse()
      .find((m) => m.role === "user");

    if (!latestUserMessage || !latestUserMessage.content.trim()) {
      return NextResponse.json(
        { error: "Empty user message." },
        { status: 400 }
      );
    }

    // Guardrail: Length check
    if (latestUserMessage.content.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        {
          response:
            "Your question is too long. Please ask a concise question about Dhiraj, his projects, or tech stack.",
        },
        { status: 200 }
      );
    }

    // Guardrail: Anti-jailbreak / prompt injection defense
    if (isPotentiallyMalicious(latestUserMessage.content)) {
      return NextResponse.json(
        { response: SAFE_FALLBACK_RESPONSE },
        { status: 200 }
      );
    }

    // 4. Prepare system prompt and history
    const systemPrompt = buildSystemPrompt();
    const sanitizedHistory = messages
      .slice(-MAX_HISTORY_MESSAGES)
      .map((m) => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.content.slice(0, MAX_MESSAGE_LENGTH),
      }));

    const groqPayload = {
      model: groqModel,
      messages: [
        { role: "system", content: systemPrompt },
        ...sanitizedHistory,
      ],
      temperature: 0.3,
      max_tokens: 800,
      stream: true,
    };

    // Timeout signal for 25s
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    let groqResponse: Response;
    try {
      groqResponse = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(groqPayload),
          signal: controller.signal,
        }
      );
    } finally {
      clearTimeout(timeoutId);
    }

    if (!groqResponse.ok) {
      const errText = await groqResponse.text();
      console.error("Groq API error:", groqResponse.status, errText);

      // Automatic fallback to versatile model if configured model is 404 or decommissioned
      if (groqResponse.status === 404 || errText.includes("model")) {
        const fallbackPayload = {
          ...groqPayload,
          model: "llama-3.3-70b-versatile",
        };
        const fallbackResponse = await fetch(
          "https://api.groq.com/openai/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(fallbackPayload),
          }
        );

        if (fallbackResponse.ok && fallbackResponse.body) {
          return createStreamResponse(fallbackResponse.body);
        }
      }

      if (groqResponse.status === 429) {
        return NextResponse.json(
          {
            error:
              "The AI service is experiencing heavy traffic right now. Please wait a moment and click Retry.",
          },
          { status: 429 }
        );
      }

      return NextResponse.json(
        {
          error:
            "Could not connect to Groq AI service. Please check your connection or try again in a few moments.",
        },
        { status: 502 }
      );
    }

    if (!groqResponse.body) {
      return NextResponse.json(
        { error: "No response body received from Groq." },
        { status: 502 }
      );
    }

    return createStreamResponse(groqResponse.body);
  } catch (err: unknown) {
    if (err instanceof Error && err.name === "AbortError") {
      return NextResponse.json(
        {
          error:
            "Request timed out while contacting Groq AI. Please click Retry.",
        },
        { status: 504 }
      );
    }

    console.error("Chat API route error:", err);
    return NextResponse.json(
      {
        error:
          "An unexpected server error occurred. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}

function createStreamResponse(upstreamBody: ReadableStream<Uint8Array>) {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const transformStream = new TransformStream({
    transform(chunk, controller) {
      const text = decoder.decode(chunk);
      const lines = text.split("\n");

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith("data: ")) continue;
        if (trimmed === "data: [DONE]") {
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          continue;
        }

        try {
          const jsonStr = trimmed.slice(6);
          const data = JSON.parse(jsonStr);
          const content = data.choices?.[0]?.delta?.content || "";
          if (content) {
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ content })}\n\n`)
            );
          }
        } catch {
          // ignore malformed SSE line
        }
      }
    },
  });

  return new Response(upstreamBody.pipeThrough(transformStream), {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
