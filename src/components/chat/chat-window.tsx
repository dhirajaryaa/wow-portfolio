"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  SendHorizonal,
  Trash2,
  X,
  Bot,
  Sparkles,
  RotateCcw,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useChat } from "./chat-context";
import { ChatMarkdown } from "./chat-markdown";

export const ChatWindow = () => {
  const {
    isOpen,
    setIsOpen,
    messages,
    isLoading,
    sendMessage,
    retryMessage,
    clearChat,
    suggestedPrompts,
  } = useChat();

  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on message updates
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage(input);
    setInput("");
  };

  const handlePromptClick = (prompt: string) => {
    sendMessage(prompt);
  };

  if (!isOpen) return null;

  return (
    <div
      aria-label="Portfolio AI Chatbot"
      className={cn(
        "fixed bottom-18 sm:bottom-20 right-3 sm:right-6 z-40 flex h-[520px] max-h-[82vh] w-[calc(100vw-1.5rem)] sm:w-[410px] max-w-[410px] flex-col overflow-hidden rounded-2xl border border-dashed border-muted bg-background/95 text-foreground shadow-2xl backdrop-blur-md",
        "animate-in fade-in-0 zoom-in-95 duration-200"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-dashed border-muted px-4 py-3 bg-muted/20">
        <div className="flex items-center gap-2.5">
          <div className="relative flex size-8 items-center justify-center rounded-lg border border-dashed border-muted bg-muted/60">
            <Bot className="size-4 text-foreground" />
            <span className="absolute -bottom-0.5 -right-0.5 size-2 rounded-full border border-background bg-emerald-500" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-serif text-sm font-medium text-foreground">
                Dhiraj&apos;s AI
              </h3>
              <span className="rounded-sm bg-muted px-1.5 py-0.2 font-mono text-[9px] text-muted-foreground ring ring-foreground/30">
                AI Agent
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground">
              Trained on Dhiraj&apos;s portfolio & projects
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={clearChat}
            aria-label="Clear chat history"
            title="Clear chat"
            className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <Trash2 className="size-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat window"
            title="Close"
            className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5 scroll-smooth">
        {messages.map((message, idx) => {
          const isUser = message.role === "user";
          const isLatestAssistant =
            !isUser &&
            idx === messages.map((m) => m.role).lastIndexOf("assistant");

          return (
            <div key={message.id} className="space-y-2">
              <div
                className={cn(
                  "flex gap-2.5",
                  isUser ? "justify-end" : "justify-start"
                )}
              >
                {!isUser && (
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-md border border-dashed border-muted bg-muted/40 mt-0.5">
                    <Bot className="size-3 text-muted-foreground" />
                  </div>
                )}

                <div
                  className={cn(
                    "max-w-[85%] rounded-xl px-3 py-2 text-xs",
                    isUser
                      ? "bg-foreground text-background font-medium rounded-br-xs"
                      : message.isError
                      ? "border border-dashed border-destructive/40 bg-destructive/10 text-destructive rounded-bl-xs"
                      : "border border-dashed border-muted bg-muted/30 text-foreground rounded-bl-xs"
                  )}
                >
                  {isUser ? (
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  ) : message.isError ? (
                    <div className="space-y-2">
                      <div className="flex items-start gap-1.5 text-destructive">
                        <AlertCircle className="size-3.5 shrink-0 mt-0.5" />
                        <p>{message.content}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => retryMessage(message.id)}
                        disabled={isLoading}
                        className="inline-flex items-center gap-1 rounded border border-dashed border-destructive/50 bg-background/50 px-2 py-0.5 font-mono text-[10px] text-destructive hover:bg-destructive/20 transition-colors"
                      >
                        <RotateCcw className="size-3" /> Retry
                      </button>
                    </div>
                  ) : message.content ? (
                    <ChatMarkdown content={message.content} />
                  ) : (
                    <div className="flex items-center gap-1.5 py-1 text-muted-foreground">
                      <span className="size-1.5 rounded-full bg-foreground/60 animate-bounce" />
                      <span className="size-1.5 rounded-full bg-foreground/60 animate-bounce [animation-delay:0.2s]" />
                      <span className="size-1.5 rounded-full bg-foreground/60 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  )}
                </div>
              </div>

              {/* Follow-up Question Suggestions attached directly after assistant response */}
              {!isUser &&
                isLatestAssistant &&
                !isLoading &&
                message.followups &&
                message.followups.length > 0 && (
                  <div className="pl-8 pt-1">
                    <p className="text-[10px] font-mono text-muted-foreground/70 mb-1.5 flex items-center gap-1">
                      <Sparkles className="size-2.5 text-foreground/70" />{" "}
                      Relevant follow-ups:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {message.followups.map((followup) => (
                        <button
                          key={followup}
                          type="button"
                          onClick={() => handlePromptClick(followup)}
                          className="rounded-md border border-dashed border-muted bg-background/80 px-2 py-1 text-[11px] text-muted-foreground transition-all duration-200 hover:border-foreground/50 hover:bg-muted hover:text-foreground text-left"
                        >
                          {followup}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          );
        })}

        {/* Suggestion Chips when conversation has just started */}
        {messages.length === 1 && (
          <div className="pt-2">
            <p className="text-[11px] font-mono text-muted-foreground/70 mb-2 flex items-center gap-1">
              <Sparkles className="size-3" /> Quick suggestions:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {suggestedPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handlePromptClick(prompt)}
                  className="rounded-lg border border-dashed border-muted bg-background px-2.5 py-1 text-[11px] text-muted-foreground transition-all duration-200 hover:border-foreground/40 hover:bg-muted/50 hover:text-foreground text-left"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form
        onSubmit={handleSubmit}
        className="border-t border-dashed border-muted bg-muted/10 p-2.5 flex flex-col gap-1.5"
      >
        <div className="flex items-center gap-2 rounded-xl border border-dashed border-muted bg-background px-3 py-1.5 focus-within:border-foreground/50 transition-colors">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Dhiraj, projects, stack..."
            disabled={isLoading}
            className="flex-1 bg-transparent text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            aria-label="Send message"
            className="flex size-6 items-center justify-center rounded-md bg-foreground text-background transition-opacity disabled:opacity-30 disabled:pointer-events-none hover:opacity-90"
          >
            <SendHorizonal className="size-3" />
          </button>
        </div>
        <p className="text-[10px] font-mono text-muted-foreground/60 text-center">
          Portfolio AI • Bound strictly to Dhiraj Arya
        </p>
      </form>
    </div>
  );
};
