import { cn } from "@/lib/utils";

function Section({
  title,
  hintText,
  children,
  className,
  ...prams
}: {
  title: string;
  hintText?: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <section
      className={cn("container flex flex-col gap-2", className)}
      {...prams}
    >
      <div className="space-y-1">
        {hintText && (
          <p className="text-muted-foreground/40 font-mono text-sm">
            {hintText}
          </p>
        )}
        <h2 className="text-2xl font-bold tracking-wide">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default Section;
