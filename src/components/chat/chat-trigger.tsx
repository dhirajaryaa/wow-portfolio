"use client";

import React from "react";
import { Bot, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useChat } from "./chat-context";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const ChatTrigger = () => {
  const { isOpen, toggleChat } = useChat();

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={toggleChat}
            aria-label={isOpen ? "Close AI chat" : "Chat with Dhiraj's AI"}
            className={cn(
              "group relative flex size-11 sm:size-12 items-center justify-center rounded-full border border-dashed border-muted bg-background/90 text-foreground shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:border-foreground/40 dark:hover:bg-foreground/5",
              isOpen
                ? "bg-muted border-foreground/30 rotate-90"
                : "animate-chat-shake hover:paused"
            )}
          >
            {/* Online indicator ping */}
            <span className="absolute -top-0.5 -right-0.5 flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-3 rounded-full border border-background bg-emerald-500" />
            </span>

            {isOpen ? (
              <X className="size-4.5 text-foreground transition-transform duration-200" />
            ) : (
              <Bot className="size-5 text-foreground transition-transform duration-200 group-hover:scale-110" />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent side="left" className="font-brand text-xs">
          {isOpen ? "Close chat" : "Chat with Dhiraj's AI"}
        </TooltipContent>
      </Tooltip>
    </div>
  );
};
