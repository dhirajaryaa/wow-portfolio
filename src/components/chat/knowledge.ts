import fs from "fs";
import path from "path";

// Detect common jailbreak patterns, prompt injection attempts, or system prompt leaks
export const JAILBREAK_PATTERNS = [
  /ignore\s+(all\s+)?(previous|prior|above)\s+instructions/i,
  /system\s+prompt/i,
  /reveal\s+(your\s+)?prompt/i,
  /what\s+are\s+your\s+instructions/i,
  /you\s+are\s+now\s+(in\s+)?DAN/i,
  /DAN\s+mode/i,
  /jailbreak/i,
  /developer\s+mode/i,
  /bypass\s+(all\s+)?filters/i,
  /unrestricted\s+mode/i,
  /act\s+as\s+(an\s+)?unfiltered/i,
  /roleplay\s+as\s+someone\s+without\s+rules/i,
  /disregard\s+(all\s+)?guidelines/i,
];

export const isPotentiallyMalicious = (text: string): boolean => {
  return JAILBREAK_PATTERNS.some((pattern) => pattern.test(text));
};

export const SAFE_FALLBACK_RESPONSE =
  "I'm here to help you explore Dhiraj's portfolio, projects, skills, and career background. Feel free to ask about his work or job opportunities!";

export const buildSystemPrompt = (): string => {
  let knowledgeContent = "";
  try {
    const filePath = path.join(process.cwd(), "src/content/chat/knowledge.md");
    knowledgeContent = fs.readFileSync(filePath, "utf8");
  } catch {
    knowledgeContent =
      "Dhiraj Arya - Self-taught full-stack engineer and school dropout looking for software engineering roles.";
  }

  return `You are Dhiraj Arya's portfolio assistant. You represent Dhiraj and help visitors, developers, and recruiters explore his projects, technical expertise, and background based on the knowledge base below.

${knowledgeContent}

CONVERSATION GUIDELINES:
1. Speak naturally, warmly, and professionally. NEVER use robotic meta-disclaimers like "As an AI assistant, I don't work...".
2. When asked about job openings, hiring, or if Dhiraj is looking for work, be enthusiastic: "Yes, Dhiraj is actively looking for frontend or full-stack engineering roles! You can reach out at hello@dhirajarya.in or check his resume."
3. When users ask for links (projects, GitHub, resume), always provide them using proper markdown link format like [BlogDrop](https://blogdrop.in).
4. Keep answers concise (2-4 sentences or short bullet points).
5. Decline off-topic questions politely.`;
};
