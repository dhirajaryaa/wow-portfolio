import { tools } from "@/config/tools";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Heading from "@/components/common/Heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  live: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  beta: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  "coming-soon": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
};

const statusLabels: Record<string, string> = {
  live: "Live",
  beta: "Beta",
  "coming-soon": "Coming Soon",
};

function ToolsSection() {
  return (
    <section className="flex flex-col mt-16">
      <Heading hint="my dev tools 🛠️" title="Tools" as="h2" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {tools.map((tool) => {
          const Icon = tool.icon;
          const content = (
            <div
              key={tool.slug}
              className="group p-4 rounded-lg border bg-card transition-all duration-200 hover:bg-muted/20 hover:border-muted-foreground/10 hover:shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-sm"
                    className="size-7 shrink-0"
                  >
                    <Icon />
                  </Button>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold">{tool.name}</h3>
                    <span
                      className={cn(
                        "text-[10px] px-1.5 py-0.5 rounded border shrink-0 font-medium",
                        statusStyles[tool.status]
                      )}
                    >
                      {statusLabels[tool.status]}
                    </span>
                  </div>
                </div>
                {tool.link && (
                  <ArrowUpRight className="size-3.5 text-muted-foreground/30 group-hover:text-foreground/60 transition-colors shrink-0 mt-1" />
                )}
              </div>
              <p className="text-xs text-muted-foreground/50 mt-2 ml-9 line-clamp-1">
                {tool.tagline}
              </p>
              {tool.link && (
                <p className="text-[11px] font-medium text-foreground/60 group-hover:text-foreground transition-colors mt-2 ml-9 flex items-center gap-1">
                  Try it <ArrowRight className="size-3" />
                </p>
              )}
            </div>
          );

          if (tool.link) {
            return (
              <a
                key={tool.slug}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            );
          }

          return content;
        })}
      </div>
      <Link
        href="/tools"
        className="mt-4 text-xs text-muted-foreground/50 hover:text-foreground transition-colors flex items-center gap-1 self-end"
      >
        View all tools <ArrowRight className="size-3" />
      </Link>
    </section>
  );
}

export default ToolsSection;
