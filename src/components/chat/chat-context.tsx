"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import type { ChatMessage } from "./types";
import { generateFollowUps } from "./followups";

interface ChatContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggleChat: () => void;
  messages: ChatMessage[];
  isLoading: boolean;
  sendMessage: (content: string) => Promise<void>;
  retryMessage: (failedMessageId: string) => Promise<void>;
  clearChat: () => void;
  suggestedPrompts: string[];
}

const INITIAL_MESSAGE: ChatMessage = {
  id: "welcome-msg",
  role: "assistant",
  content:
    "Hi there! I'm Dhiraj's portfolio AI assistant. Ask me anything about his projects (like **HackMeet** or **BlogDrop**), his core tech stack, background as a self-taught engineer, or how to get in touch!",
  createdAt: Date.now(),
  followups: [
    "Tell me about Dhiraj Arya",
    "What are his featured projects?",
    "What tech stack does he use?",
  ],
};

const SUGGESTED_PROMPTS = [
  "Tell me about Dhiraj Arya",
  "What are his featured projects?",
  "What tech stack does he use?",
  "How can I contact or hire him?",
];

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);

  // Store the last user queries for retry capability
  const lastQueryRef = useRef<string>("");

  const toggleChat = useCallback(() => setIsOpen((prev) => !prev), []);
  const clearChat = useCallback(() => {
    setMessages([INITIAL_MESSAGE]);
  }, []);

  const executeSend = useCallback(
    async (
      text: string,
      assistantMessageId: string,
      historyForRequest: Array<{ role: "user" | "assistant" | "system"; content: string }>,
      isRetry = false
    ) => {
      setIsLoading(true);

      const makeRequest = async () => {
        return fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: historyForRequest }),
        });
      };

      try {
        let response = await makeRequest();

        // 1. Automatic retry on transient 500/502/503/504 errors (1 attempt after 1.5s backoff)
        if (!response.ok && !isRetry && response.status >= 500 && response.status < 600) {
          await new Promise((resolve) => setTimeout(resolve, 1500));
          try {
            const retryRes = await makeRequest();
            if (retryRes.ok) {
              response = retryRes;
            }
          } catch {
            // Keep original response
          }
        }

        if (!response.ok) {
          const data = await response.json().catch(() => null);
          let errText = data?.error || data?.response;

          if (response.status === 429) {
            const waitTime = data?.retryAfter || 15;
            errText = `Rate limit reached. Please wait ${waitTime} seconds before asking again.`;
          } else if (!errText) {
            errText = "Could not connect to the AI assistant right now. Please click Retry.";
          }

          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMessageId
                ? {
                    ...m,
                    content: errText,
                    isError: true,
                    followups: ["Tell me about Dhiraj", "What are his top projects?"],
                  }
                : m
            )
          );
          setIsLoading(false);
          return;
        }

        const contentType = response.headers.get("content-type") || "";

        // Non-streaming JSON response (e.g. guardrails triggered)
        if (contentType.includes("application/json")) {
          const data = await response.json();
          const reply = data.response || data.error || "No response received.";
          const followups = generateFollowUps(text, reply);

          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMessageId
                ? {
                    ...m,
                    content: reply,
                    isError: false,
                    followups,
                  }
                : m
            )
          );
          setIsLoading(false);
          return;
        }

        // Streaming SSE response
        if (response.body) {
          const reader = response.body.getReader();
          const decoder = new TextDecoder();
          let accumulated = "";

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split("\n");

            for (const line of lines) {
              const trimmedLine = line.trim();
              if (!trimmedLine || !trimmedLine.startsWith("data: ")) continue;
              if (trimmedLine === "data: [DONE]") continue;

              try {
                const data = JSON.parse(trimmedLine.slice(6));
                if (data.content) {
                  accumulated += data.content;
                  setMessages((prev) =>
                    prev.map((m) =>
                      m.id === assistantMessageId
                        ? { ...m, content: accumulated, isError: false }
                        : m
                    )
                  );
                }
              } catch {
                // ignore chunk parse error
              }
            }
          }

          // Generate contextual follow-ups once streaming completes
          const followups = generateFollowUps(text, accumulated);
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMessageId
                ? { ...m, content: accumulated, followups, isError: false }
                : m
            )
          );
        }
      } catch (err) {
        console.error("Failed to send chat message:", err);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMessageId
              ? {
                  ...m,
                  content:
                    "Sorry, I encountered a network issue. Please check your internet and click Retry.",
                  isError: true,
                }
              : m
          )
        );
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      lastQueryRef.current = trimmed;

      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        content: trimmed,
        createdAt: Date.now(),
      };

      const assistantMessageId = `assistant-${Date.now()}`;
      const placeholderAssistantMessage: ChatMessage = {
        id: assistantMessageId,
        role: "assistant",
        content: "",
        createdAt: Date.now(),
      };

      const newHistory = [...messages, userMessage];
      setMessages([...newHistory, placeholderAssistantMessage]);

      const historyForRequest = newHistory.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      await executeSend(trimmed, assistantMessageId, historyForRequest, false);
    },
    [messages, isLoading, executeSend]
  );

  const retryMessage = useCallback(
    async (failedMessageId: string) => {
      if (isLoading || !lastQueryRef.current) return;

      // Find the messages up to the user question preceding the failed response
      const failedIndex = messages.findIndex((m) => m.id === failedMessageId);
      if (failedIndex === -1) return;

      // Reset the failed message
      setMessages((prev) =>
        prev.map((m) =>
          m.id === failedMessageId
            ? { ...m, content: "", isError: false, followups: undefined }
            : m
        )
      );

      const historyUpToFailed = messages.slice(0, failedIndex).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      await executeSend(
        lastQueryRef.current,
        failedMessageId,
        historyUpToFailed,
        true
      );
    },
    [messages, isLoading, executeSend]
  );

  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      toggleChat,
      messages,
      isLoading,
      sendMessage,
      retryMessage,
      clearChat,
      suggestedPrompts: SUGGESTED_PROMPTS,
    }),
    [isOpen, toggleChat, messages, isLoading, sendMessage, retryMessage, clearChat]
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
