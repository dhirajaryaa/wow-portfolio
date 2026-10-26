"use client";

import React, { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMarkdownProps {
  content: string;
  className?: string;
}

export const ChatMarkdown = ({ content, className }: ChatMarkdownProps) => {
  if (!content) return null;

  // Split into blocks: code blocks vs text blocks
  const blocks = parseBlocks(content);

  return (
    <div className={cn("space-y-2 text-xs leading-relaxed font-brand", className)}>
      {blocks.map((block, idx) => {
        if (block.type === "code") {
          return (
            <CodeBlock
              key={idx}
              language={block.language}
              code={block.content}
            />
          );
        }
        return <TextBlock key={idx} text={block.content} />;
      })}
    </div>
  );
};

// ---------------- Block Parser ----------------
interface Block {
  type: "text" | "code";
  content: string;
  language?: string;
}

function parseBlocks(markdown: string): Block[] {
  const blocks: Block[] = [];
  const codeBlockRegex = /```([a-zA-Z0-9_-]*)\n([\s\S]*?)(?:```|$)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = codeBlockRegex.exec(markdown)) !== null) {
    if (match.index > lastIndex) {
      const textChunk = markdown.slice(lastIndex, match.index);
      if (textChunk.trim()) {
        blocks.push({ type: "text", content: textChunk });
      }
    }

    blocks.push({
      type: "code",
      language: match[1] || "text",
      content: match[2].trimEnd(),
    });

    lastIndex = codeBlockRegex.lastIndex;
  }

  if (lastIndex < markdown.length) {
    const remaining = markdown.slice(lastIndex);
    if (remaining.trim()) {
      blocks.push({ type: "text", content: remaining });
    }
  }

  return blocks;
}

// ---------------- Code Block Component ----------------
function CodeBlock({
  language,
  code,
}: {
  language?: string;
  code: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="my-2 overflow-hidden rounded-lg border border-dashed border-muted bg-muted/40 font-mono text-[11px]">
      <div className="flex items-center justify-between border-b border-dashed border-muted/70 bg-muted/30 px-2.5 py-1 text-[10px] text-muted-foreground">
        <span>{language || "code"}</span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy code"
          className="flex items-center gap-1 hover:text-foreground transition-colors"
        >
          {copied ? (
            <>
              <Check className="size-3 text-emerald-500" />
              <span className="text-emerald-500 font-sans">Copied</span>
            </>
          ) : (
            <>
              <Copy className="size-3" />
              <span className="font-sans">Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-2.5 text-foreground/90">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// ---------------- Text Block Component ----------------
function TextBlock({ text }: { text: string }) {
  const paragraphs = text.split(/\n\n+/);

  return (
    <>
      {paragraphs.map((para, pIdx) => {
        const lines = para.split("\n");

        // Headers: ###, ##, #
        const firstLine = lines[0].trim();
        if (firstLine.startsWith("### ")) {
          return (
            <h4
              key={pIdx}
              className="mt-2 font-serif text-[13px] font-medium text-foreground first:mt-0"
            >
              {renderInline(firstLine.slice(4))}
            </h4>
          );
        }
        if (firstLine.startsWith("## ") || firstLine.startsWith("# ")) {
          const headerText = firstLine.replace(/^#+\s+/, "");
          return (
            <h3
              key={pIdx}
              className="mt-2.5 font-serif text-sm font-semibold text-foreground first:mt-0"
            >
              {renderInline(headerText)}
            </h3>
          );
        }

        // Blockquote: >
        if (firstLine.startsWith("> ")) {
          const quoteText = lines.map((l) => l.replace(/^>\s*/, "")).join(" ");
          return (
            <blockquote
              key={pIdx}
              className="my-1.5 border-l-2 border-muted-foreground/30 pl-2.5 italic text-muted-foreground"
            >
              {renderInline(quoteText)}
            </blockquote>
          );
        }

        // Unordered List: - or *
        const isBulletList = lines.every((line) =>
          /^\s*[-*]\s+/.test(line)
        );
        if (isBulletList) {
          return (
            <ul key={pIdx} className="my-1.5 list-disc space-y-1 pl-4 text-foreground/90">
              {lines.map((line, lIdx) => {
                const item = line.replace(/^\s*[-*]\s+/, "");
                return <li key={lIdx}>{renderInline(item)}</li>;
              })}
            </ul>
          );
        }

        // Ordered List: 1. 2.
        const isNumberedList = lines.every((line) =>
          /^\s*\d+\.\s+/.test(line)
        );
        if (isNumberedList) {
          return (
            <ol key={pIdx} className="my-1.5 list-decimal space-y-1 pl-4 text-foreground/90">
              {lines.map((line, lIdx) => {
                const item = line.replace(/^\s*\d+\.\s+/, "");
                return <li key={lIdx}>{renderInline(item)}</li>;
              })}
            </ol>
          );
        }

        // Standard paragraph
        return (
          <p key={pIdx} className="my-1 text-foreground/90 first:mt-0 last:mb-0">
            {lines.map((line, lIdx) => (
              <React.Fragment key={lIdx}>
                {renderInline(line)}
                {lIdx < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </>
  );
}

// ---------------- Inline Formatter ----------------
// Parses: **bold**, *italic*, `code`, and [link](url)
function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  // Tokenizer regex matching bold, italic, inline code, and links
  const tokenRegex =
    /(\*\*.*?\*\*|\*.*?\*|`[^`]+`|\[.*?\]\(.*?\))/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];

    // Inline code: `code`
    if (token.startsWith("`") && token.endsWith("`") && token.length > 2) {
      parts.push(
        <code
          key={match.index}
          className="rounded border border-dashed border-muted bg-muted/60 px-1 py-0.5 font-mono text-[10px] text-foreground"
        >
          {token.slice(1, -1)}
        </code>
      );
    }
    // Bold: **text**
    else if (token.startsWith("**") && token.endsWith("**") && token.length > 4) {
      parts.push(
        <strong key={match.index} className="font-semibold text-foreground">
          {token.slice(2, -2)}
        </strong>
      );
    }
    // Italic: *text*
    else if (token.startsWith("*") && token.endsWith("*") && token.length > 2) {
      parts.push(
        <em key={match.index} className="italic text-foreground">
          {token.slice(1, -1)}
        </em>
      );
    }
    // Link: [label](url)
    else if (token.startsWith("[") && token.includes("](")) {
      const linkMatch = /^\[(.*?)\]\((.*?)\)$/.exec(token);
      if (linkMatch) {
        const href = linkMatch[2];
        const isExternal = href.startsWith("http") || href.startsWith("mailto:");
        parts.push(
          <a
            key={match.index}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-0.5 font-medium text-foreground underline underline-offset-2 hover:opacity-80"
          >
            <span>{linkMatch[1]}</span>
            {isExternal && <ExternalLink className="size-2.5 opacity-60" />}
          </a>
        );
      }
    }

    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}
