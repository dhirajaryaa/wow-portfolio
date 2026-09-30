import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { CodeBlock } from "@/components/blog/code-block";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* headings — rehype-slug gives them ids, the "#" is a hover anchor     */
/* ------------------------------------------------------------------ */

type HeadingProps = ComponentPropsWithoutRef<"h2"> & { id?: string };

const heading = (Tag: ElementType, className: string) => {
    const Heading = ({ id, children, ...props }: HeadingProps) => (
        <Tag id={id} className={cn("group/heading relative scroll-mt-24", className)} {...props}>
            {children}
            {id && (
                <a
                    href={`#${id}`}
                    aria-label="Link to this section"
                    className="text-muted-foreground/40 hover:text-foreground ml-1.5 inline-block align-middle text-[0.65em] font-normal no-underline opacity-0 transition-opacity group-hover/heading:opacity-100"
                >
                    #
                </a>
            )}
        </Tag>
    );

    return Heading;
};

/* ------------------------------------------------------------------ */
/* prose                                                               */
/* ------------------------------------------------------------------ */

const isExternal = (href?: string) => /^https?:\/\//i.test(href ?? "");

/* ------------------------------------------------------------------ */
/* callout — usable from a post as <Callout type="tip">…</Callout>        */
/* ------------------------------------------------------------------ */

const CALLOUTS = {
    note: "border-muted-foreground/40",
    tip: "border-green-500/40",
    warn: "border-amber-500/40",
} as const;

type CalloutProps = {
    type?: keyof typeof CALLOUTS;
    children?: ReactNode;
};

const Callout = ({ type = "note", children }: CalloutProps) => (
    <aside
        className={cn(
            "bg-muted/20 my-6 flex flex-col gap-1 rounded-xl border border-dashed px-4 py-3",
            CALLOUTS[type],
        )}
    >
        <span className="text-muted-foreground/60 text-[10px] font-medium tracking-wider uppercase">
            {type}
        </span>
        <div className="text-foreground/80 text-[15px] leading-[1.65] [&>p]:my-1">{children}</div>
    </aside>
);

/* ------------------------------------------------------------------ */
/* the map handed to the MDX evaluator                                 */
/* ------------------------------------------------------------------ */

export const mdxComponents: MDXComponents = {
    h1: heading("h1", "text-foreground font-serif text-xl font-medium tracking-tight md:text-2xl mt-10 mb-3"),
    h2: heading("h2", "text-foreground font-serif text-lg font-medium tracking-tight md:text-xl mt-12 mb-3"),
    h3: heading("h3", "text-foreground font-serif text-base font-medium md:text-[17px] mt-8 mb-2"),
    h4: heading("h4", "text-foreground text-[15px] font-medium mt-6 mb-2"),

    p: (props) => <p className="text-foreground/80 my-4 text-[15px] leading-[1.7]" {...props} />,

    a: ({ href, children, ...props }) => (
        <a
            href={href}
            className="text-foreground decoration-muted-foreground/40 underline-offset-[3px] transition-colors hover:decoration-foreground"
            {...(isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            {...props}
        >
            {children}
        </a>
    ),

    strong: (props) => <strong className="text-foreground font-medium" {...props} />,
    em: (props) => <em className="text-foreground/90 italic" {...props} />,
    del: (props) => <del className="text-muted-foreground" {...props} />,

    ul: ({ className, ...props }) => {
        /* gfm checkboxes get a bulleted list with a box in front of it */
        const isTaskList = className?.includes("contains-task-list");

        return (
            <ul
                className={cn(
                    "marker:text-muted-foreground/50 my-4 space-y-2 pl-5",
                    isTaskList ? "list-none pl-0" : "list-disc",
                    className,
                )}
                {...props}
            />
        );
    },
    ol: (props) => (
        <ol className="marker:text-muted-foreground/50 my-4 list-decimal space-y-2 pl-5" {...props} />
    ),
    li: ({ className, ...props }) => (
        <li
            className={cn(
                "text-foreground/80 text-[15px] leading-[1.7]",
                "[&>ul]:my-2 [&>ul]:pl-5 [&>ol]:my-2 [&>ol]:pl-5",
                className?.includes("task-list-item") &&
                    "-ml-0.5 flex list-none items-start gap-2 [&>p]:my-0",
                className,
            )}
            {...props}
        />
    ),

    input: (props) => (
        <input
            type="checkbox"
            {...props}
            className="accent-foreground mt-1.5 size-3.5 shrink-0 rounded-sm"
        />
    ),

    blockquote: (props) => (
        <blockquote
            className="border-muted-foreground/30 text-foreground/70 my-6 border-l-2 border-dashed pl-4 text-[15px] italic leading-[1.7] md:pl-5"
            {...props}
        />
    ),

    hr: (props) => <hr className="my-10 border-dashed" {...props} />,

    img: ({ alt = "", className, ...props }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            alt={alt}
            className={cn(
                "border-muted my-6 h-auto w-full rounded-xl border border-dashed",
                className,
            )}
            {...props}
        />
    ),

    /* inline code only — anything inside a <pre> is fenced by CodeBlock */
    code: ({ className, ...props }) => {
        if (className?.startsWith("language-")) {
            return <code className={cn("font-mono", className)} {...props} />;
        }

        return (
            <code
                className={cn(
                    "border-muted bg-muted/50 text-foreground/85 rounded border border-dashed px-1.5 py-0.5 font-mono text-[0.82em]",
                    className,
                )}
                {...props}
            />
        );
    },
    pre: CodeBlock,

    table: (props) => (
        <div className="my-6 w-full overflow-x-auto">
            <table className="w-full border-collapse text-left" {...props} />
        </div>
    ),
    thead: (props) => <thead className="border-muted border-b border-dashed" {...props} />,
    th: (props) => (
        <th className="text-muted-foreground px-3 py-2 text-[11px] font-medium tracking-wider uppercase" {...props} />
    ),
    td: (props) => (
        <td className="border-muted text-foreground/80 border-b border-dashed px-3 py-2 text-[13px]" {...props} />
    ),

    Callout,
};
