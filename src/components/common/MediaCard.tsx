import type { LucideIcon } from "lucide-react";

interface MediaCardProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description: string;
}

function MediaCard({ icon: Icon, title, subtitle, description }: MediaCardProps) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-lg border bg-card">
      <Icon className="size-5 text-muted-foreground/30 shrink-0" />
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-medium">
          {title}
          {subtitle && (
            <span className="text-xs text-muted-foreground/40 font-normal">
              {" "}({subtitle})
            </span>
          )}
        </span>
        <span className="text-xs text-muted-foreground/50">{description}</span>
      </div>
    </div>
  );
}

export default MediaCard;
