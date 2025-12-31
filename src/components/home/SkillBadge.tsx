import { cn } from "@/lib/utils";
import Image from "next/image";

function SkillBadge({ icon, name, className, iconClassName }: any) {
  return (
    <span
      className={cn(
        "inline-flex whitespace-nowrap gap-1 bg-muted text-foreground px-2 rounded border border-foreground/50 border-dashed py-0.5 text-[13px]",
        className
      )}
    >
      <Image
        src={icon}
        alt={name}
        width={14}
        height={14}
        className={iconClassName}
      />
      {name}
    </span>
  );
}

export { SkillBadge };
