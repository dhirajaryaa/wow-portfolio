import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Tool } from "@/config/tools";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function StatusBadge({ status }: { status: Tool["status"] }) {
  const styles = {
    live: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
    beta: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
    "coming-soon":
      "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  };

  const labels = {
    live: "Live",
    beta: "Beta",
    "coming-soon": "Coming Soon",
  };

  return (
    <span
      className={cn(
        "text-[10px] px-1.5 py-0.5 rounded border shrink-0 font-medium",
        styles[status]
      )}
    >
      {labels[status]}
    </span>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  const Icon = tool.icon;

  const cardContent = (
    <div
      className={cn(
        "group relative rounded-lg border bg-card p-5 transition-all duration-200",
        "hover:bg-muted/20 hover:border-muted-foreground/10 hover:shadow-sm"
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="size-8 shrink-0"
          >
            <Icon />
          </Button>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold">{tool.name}</h3>
              <StatusBadge status={tool.status} />
            </div>
            <p className="text-xs text-muted-foreground/50 pt-1">{tool.tagline}</p>
          </div>
        </div>
        {tool.link && (
          <ExternalLink className="size-3.5 text-muted-foreground/30 group-hover:text-foreground/60 transition-colors shrink-0 mt-1" />
        )}
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground/60 leading-relaxed mb-4">
        {tool.description}
      </p>

      {/* Features */}
      <div className="space-y-2 mb-4">
        {tool.features.map((feature) => {
          const FeatureIcon = feature.icon;
          return (
            <div key={feature.label} className="flex items-center gap-2">
              <FeatureIcon className="size-3 text-muted-foreground/40 shrink-0" />
              <span className="text-[11px] text-muted-foreground/60">
                {feature.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Use Cases */}
      <div className="pt-3 border-t border-dashed">
        <p className="text-[10px] font-medium text-muted-foreground/40 uppercase tracking-wider mb-2">
          Use Cases
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tool.useCases.map((useCase) => (
            <span
              key={useCase}
              className="text-[10px] px-2 py-0.5 rounded-full border bg-muted/30 text-muted-foreground/50"
            >
              {useCase}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      {tool.link && (
        <div className="mt-4 flex items-center gap-1 text-[11px] text-muted-foreground/40 group-hover:text-foreground/60 transition-colors">
          Try it out <ArrowUpRight className="size-3" />
        </div>
      )}

      {!tool.link && tool.status === "coming-soon" && (
        <div className="mt-4 text-[11px] text-muted-foreground/30 italic">
          Coming soon — stay tuned!
        </div>
      )}
    </div>
  );

  if (tool.link) {
    return (
      <a
        href={tool.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

export default ToolCard;
