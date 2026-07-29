import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  message: string;
}

function EmptyState({ icon: Icon, message }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center py-20">
      <Icon className="size-12 text-muted-foreground/20" />
      <p className="text-sm text-muted-foreground/40 max-w-sm">{message}</p>
    </div>
  );
}

export default EmptyState;
