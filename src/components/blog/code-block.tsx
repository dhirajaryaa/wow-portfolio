"use client";

import { useRef, useState, type ComponentProps, type ReactElement, type ReactNode } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

/** flatten the rendered children of a <pre> back into plain text. */
const toText = (node: ReactNode): string => {
    if (node === null || node === undefined || typeof node === "boolean") return "";
    if (typeof node === "string" || typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(toText).join("");

    const element = node as ReactElement<{ children?: ReactNode }>;
    if (element.props && "children" in element.props) return toText(element.props.children);

    return "";
};

type CodeBlockProps = ComponentProps<"pre">;

export const CodeBlock = ({ children, className, ...props }: CodeBlockProps) => {
    const [copied, setCopied] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    /** remark puts `language-ts` on the <code> that MDX wraps inside <pre>. */
    const code = children as ReactElement<{ className?: string }> | undefined;
    const language = code?.props?.className?.replace("language-", "") ?? "";

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(toText(children));
            setCopied(true);
            if (timer.current) clearTimeout(timer.current);
            timer.current = setTimeout(() => setCopied(false), 1600);
        } catch {
            setCopied(false);
        }
    };

    return (
        <figure
            className={cn(
                "border-muted bg-muted/20 group/code my-6 flex flex-col overflow-hidden rounded-xl border border-dashed",
                className,
            )}
        >
            <figcaption className="border-muted text-muted-foreground/60 flex items-center justify-between gap-2 border-b border-dashed px-3 py-1.5 font-mono text-[10px] tracking-wider uppercase">
                <span className="truncate">{language || "code"}</span>
                <button
                    type="button"
                    onClick={copy}
                    aria-label={copied ? "Copied" : "Copy code"}
                    className="hover:text-foreground flex shrink-0 items-center gap-1 transition-colors"
                >
                    {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
                    {copied ? "copied" : "copy"}
                </button>
            </figcaption>
            <pre
                className="text-foreground/85 overflow-x-auto p-3 font-mono text-[12.5px] leading-[1.65] md:text-[13px]"
                {...props}
            >
                {children}
            </pre>
        </figure>
    );
};
