"use client";

import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSearch } from "./search-context";

interface SearchBarProps {
  className?: string;
  variant?: "toggle" | "bar";
  placeholder?: string;
}

export const SearchBar = ({
  className,
  variant = "toggle",
  placeholder = "Search...",
}: SearchBarProps) => {
  const { openSearch } = useSearch();
  const [shortcutKey, setShortcutKey] = useState("Ctrl K");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent);
      setShortcutKey(isMac ? "⌘K" : "Ctrl K");
    }
  }, []);

  // "bar" variant: looks like an input-style search button with dashed border
  if (variant === "bar") {
    return (
      <button
        type="button"
        onClick={openSearch}
        aria-label="Search portfolio"
        title={`Search (${shortcutKey})`}
        className={cn(
          "group flex w-full items-center justify-between gap-3 rounded-xl border border-dashed border-muted bg-background px-3 py-2 text-xs text-muted-foreground transition-all duration-300 hover:bg-gray-100 hover:text-foreground dark:hover:bg-foreground/5",
          className
        )}
      >
        <div className="flex items-center gap-2">
          <Search className="size-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
          <span className="font-brand">{placeholder}</span>
        </div>
        <div className="hidden sm:inline-block rounded-sm bg-muted px-1.5 py-0.5 font-mono text-[10px] text-foreground ring ring-foreground/40">
          {shortcutKey}
        </div>
      </button>
    );
  }

  // "toggle" variant (default): perfectly matches ThemeToggle's [ T ] [ Button ] aesthetic
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <button
        type="button"
        onClick={openSearch}
        aria-label="Open search shortcut"
        title={`Press ${shortcutKey} to search`}
        className="hidden sm:inline-block cursor-pointer rounded-sm bg-muted px-1.5 py-0.5 font-mono text-[10px] text-foreground ring ring-foreground/40 transition-opacity hover:opacity-80"
      >
        {shortcutKey}
      </button>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Search portfolio"
        title={`Search (${shortcutKey})`}
        onClick={openSearch}
      >
        <Search className="size-3.5" />
      </Button>
    </div>
  );
};
