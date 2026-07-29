interface HeadingProps {
  title: string;
  description?: string;
  hint?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}

function Heading({ title, description, hint, as: Tag = "h1" }: HeadingProps) {
  return (
    <div className="space-y-0.5 mb-8">
      {hint && (
        <p className="text-muted-foreground/40 font-mono text-xs tracking-wider uppercase">
          {hint}
        </p>
      )}
      <Tag className="text-xl sm:text-2xl font-semibold tracking-tight">
        {title}
      </Tag>
      {description && (
        <p className="text-sm text-muted-foreground/50 pt-1">{description}</p>
      )}
    </div>
  );
}

export default Heading;
