import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="text-xl font-semibold mt-8 mb-3" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-lg font-semibold mt-8 mb-3" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-base font-semibold mt-6 mb-2" {...props} />
  ),
  h4: (props) => (
    <h4 className="text-sm font-semibold mt-5 mb-2" {...props} />
  ),
  p: (props) => (
    <p className="text-sm text-muted-foreground/70 leading-relaxed my-3" {...props} />
  ),
  a: (props) => (
    <a
      className="text-foreground underline decoration-muted-foreground/30 underline-offset-4 hover:decoration-foreground transition-colors"
      {...props}
    />
  ),
  strong: (props) => <strong className="text-foreground/80 font-medium" {...props} />,
  em: (props) => <em className="text-foreground" {...props} />,
  ul: (props) => (
    <ul className="list-disc pl-5 space-y-1 my-3" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal pl-5 space-y-1 my-3" {...props} />
  ),
  li: (props) => (
    <li className="text-sm text-muted-foreground/70 leading-relaxed" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-muted-foreground/20 pl-4 italic text-muted-foreground/60 my-4"
      {...props}
    />
  ),
  hr: (props) => <hr className="my-8 border-border" {...props} />,
  img: ({ alt = "", ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt}
      className="rounded-lg border border-border my-4 w-full h-auto"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-muted/50 px-1.5 py-0.5 rounded text-[12px] font-mono text-foreground/80"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-muted/30 rounded-lg p-4 overflow-x-auto text-xs font-mono leading-relaxed my-4"
      {...props}
    />
  ),
  table: (props) => (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse" {...props} />
    </div>
  ),
  th: (props) => (
    <th className="border border-border px-3 py-2 text-left text-xs font-semibold" {...props} />
  ),
  td: (props) => (
    <td className="border border-border px-3 py-2 text-[13px] text-muted-foreground/70" {...props} />
  ),
};
