"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Dialog as DialogPrimitive, VisuallyHidden } from "radix-ui";
import {
  Search,
  X,
  CornerDownLeft,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { contact } from "@/lib/config";
import { useSearch } from "./search-context";
import { getSearchItems } from "./search-items";
import type { SearchCategory, SearchItem } from "./types";

const CATEGORY_ORDER: SearchCategory[] = [
  "Navigation",
  "Projects",
  "Tools",
  "Writing",
  "Gears & Setup",
  "Social & Links",
  "Actions",
];

export const SearchDialog = () => {
  const { isOpen, setIsOpen, closeSearch } = useSearch();
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const allItems = useMemo(() => getSearchItems(), []);

  // Filter items based on query
  const filteredItems = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return allItems;

    const queryTerms = cleanQuery.split(/\s+/).filter(Boolean);

    return allItems
      .map((item) => {
        let score = 0;
        const titleLower = item.title.toLowerCase();
        const descLower = item.description?.toLowerCase() || "";
        const catLower = item.category.toLowerCase();
        const keywords = item.keywords || [];

        // Exact match in title
        if (titleLower === cleanQuery) score += 100;
        else if (titleLower.startsWith(cleanQuery)) score += 60;
        else if (titleLower.includes(cleanQuery)) score += 40;

        for (const term of queryTerms) {
          if (titleLower.includes(term)) score += 25;
          if (keywords.some((k) => k.toLowerCase().includes(term))) score += 20;
          if (descLower.includes(term)) score += 10;
          if (catLower.includes(term)) score += 5;
        }

        return { item, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ item }) => item);
  }, [allItems, query]);

  // Group filtered items by category
  const groupedItems = useMemo(() => {
    const groups: { category: SearchCategory; items: SearchItem[] }[] = [];
    const itemMap = new Map<SearchCategory, SearchItem[]>();

    for (const item of filteredItems) {
      const list = itemMap.get(item.category) || [];
      list.push(item);
      itemMap.set(item.category, list);
    }

    for (const cat of CATEGORY_ORDER) {
      const itemsInCat = itemMap.get(cat);
      if (itemsInCat && itemsInCat.length > 0) {
        groups.push({ category: cat, items: itemsInCat });
      }
    }

    return groups;
  }, [filteredItems]);

  // Reset selected index when query changes or dialog opens
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, isOpen]);

  // Reset state when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setCopied(false);
    }
  }, [isOpen]);

  // Scroll active item into view
  useEffect(() => {
    const activeEl = itemRefs.current[selectedIndex];
    if (activeEl && listRef.current) {
      activeEl.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  // Execute selected item
  const handleSelect = useCallback(
    (item: SearchItem) => {
      if (item.id === "action-theme") {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
        closeSearch();
        return;
      }

      if (item.id === "action-copy-email") {
        navigator.clipboard.writeText(contact.email);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          closeSearch();
        }, 600);
        return;
      }

      if (item.perform) {
        item.perform();
        closeSearch();
        return;
      }

      if (item.href) {
        closeSearch();
        if (item.external) {
          window.open(item.href, "_blank", "noopener,noreferrer");
        } else {
          router.push(item.href);
        }
      }
    },
    [resolvedTheme, setTheme, router, closeSearch]
  );

  // Keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (filteredItems.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedIndex((prev) =>
        prev - 1 < 0 ? filteredItems.length - 1 : prev - 1
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      const currentItem = filteredItems[selectedIndex];
      if (currentItem) {
        handleSelect(currentItem);
      }
    }
  };

  let runningIndex = 0;

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Portal>
        {/* Backdrop overlay */}
        <DialogPrimitive.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          )}
        />

        {/* Modal container */}
        <DialogPrimitive.Content
          aria-describedby="search-dialog-description"
          className={cn(
            "fixed left-1/2 top-[12%] sm:top-[18%] z-50 w-full max-w-xl -translate-x-1/2 px-4 outline-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          )}
        >
          <VisuallyHidden.Root asChild>
            <DialogPrimitive.Title>Search</DialogPrimitive.Title>
          </VisuallyHidden.Root>
          <VisuallyHidden.Root asChild>
            <DialogPrimitive.Description id="search-dialog-description">
              Search all pages, projects, tools, writing, setup and actions
            </DialogPrimitive.Description>
          </VisuallyHidden.Root>

          <div className="flex max-h-[80vh] flex-col overflow-hidden rounded-xl border border-dashed border-muted bg-background/95 text-foreground shadow-2xl backdrop-blur-md">
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 border-b border-dashed border-muted px-4 py-3">
              <Search
                strokeWidth={1.8}
                className="size-4 shrink-0 text-muted-foreground"
              />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command or search..."
                className="w-full bg-transparent font-brand text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                autoFocus
                autoComplete="off"
                spellCheck="false"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                  aria-label="Clear search input"
                >
                  <X className="size-3.5" />
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={closeSearch}
                    className="sm:hidden rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                    aria-label="Close search dialog"
                  >
                    <X className="size-3.5" />
                  </button>
                  <div className="hidden sm:inline-block rounded-sm bg-muted px-1.5 py-0.5 font-mono text-[10px] text-foreground ring ring-foreground/40">
                    ESC
                  </div>
                </>
              )}
            </div>

            {/* Results List */}
            <div
              ref={listRef}
              className="max-h-[380px] overflow-y-auto p-2 scroll-smooth"
            >
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="font-serif text-base font-medium text-foreground">
                    No results found for &ldquo;{query}&rdquo;
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Try searching for projects, tools, articles or keyboard shortcuts.
                  </p>
                </div>
              ) : (
                groupedItems.map((group) => {
                  const items = group.items;
                  return (
                    <div key={group.category} className="mb-2 last:mb-0">
                      <div className="px-3 py-1.5 font-serif text-xs font-medium text-muted-foreground/80">
                        # {group.category}
                      </div>
                      <div className="space-y-1">
                        {items.map((item) => {
                          const currentIndex = runningIndex++;
                          const isSelected = currentIndex === selectedIndex;
                          const Icon = item.icon;

                          return (
                            <button
                              key={item.id}
                              ref={(el) => {
                                itemRefs.current[currentIndex] = el;
                              }}
                              type="button"
                              onClick={() => handleSelect(item)}
                              onMouseEnter={() => setSelectedIndex(currentIndex)}
                              className={cn(
                                "group flex w-full items-center justify-between gap-3 rounded-lg border border-transparent p-2 text-left text-xs transition-all duration-200",
                                isSelected
                                  ? "border-dashed border-muted bg-gray-100 dark:bg-foreground/5 text-foreground"
                                  : "text-muted-foreground hover:bg-gray-100/70 hover:text-foreground dark:hover:bg-foreground/5"
                              )}
                            >
                              <div className="flex min-w-0 items-center gap-2.5">
                                {Icon && (
                                  <span
                                    className={cn(
                                      "flex size-7 shrink-0 items-center justify-center rounded-md border border-dashed border-muted bg-muted/40 transition-colors",
                                      isSelected
                                        ? "text-foreground bg-muted"
                                        : "text-muted-foreground"
                                    )}
                                  >
                                    <Icon className="size-3.5" />
                                  </span>
                                )}
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-1.5">
                                    <span className="truncate font-medium text-foreground group-hover:underline">
                                      {item.title}
                                    </span>
                                    {item.external && (
                                      <ArrowUpRight
                                        strokeWidth={1.6}
                                        className="size-3 shrink-0 text-muted-foreground"
                                      />
                                    )}
                                  </div>
                                  {item.description && (
                                    <p className="truncate text-[11px] text-foreground/70 font-normal">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <div className="flex shrink-0 items-center gap-1.5">
                                {item.id === "action-copy-email" && copied ? (
                                  <span className="flex items-center gap-1 font-mono text-[10px] text-emerald-500">
                                    <Check className="size-3" /> Copied!
                                  </span>
                                ) : isSelected ? (
                                  <span className="flex items-center gap-1 rounded border border-dashed border-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                                    <CornerDownLeft className="size-3" />
                                  </span>
                                ) : (
                                  <span className="hidden sm:inline-block rounded border border-dashed border-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground/60">
                                    {item.category}
                                  </span>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-dashed border-muted bg-muted/20 px-4 py-2.5 text-[11px] font-mono text-muted-foreground">
              <div className="hidden sm:flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5">
                  <span className="rounded-sm bg-muted px-1 py-0.5 text-[9px] text-foreground ring ring-foreground/40">
                    ↑↓
                  </span>
                  navigate
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="rounded-sm bg-muted px-1 py-0.5 text-[9px] text-foreground ring ring-foreground/40">
                    ↵
                  </span>
                  select
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="rounded-sm bg-muted px-1 py-0.5 text-[9px] text-foreground ring ring-foreground/40">
                    esc
                  </span>
                  close
                </span>
              </div>
              <span className="text-[10px] text-muted-foreground/70 sm:ml-auto">
                {filteredItems.length} result
                {filteredItems.length === 1 ? "" : "s"}
              </span>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
