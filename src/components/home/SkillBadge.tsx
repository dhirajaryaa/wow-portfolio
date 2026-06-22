import { cn } from "@/lib/utils";
import Image from "next/image";

function SkillBadge({ icon, name, className, iconClassName }: any) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center mx-1 gap-1 px-1.5 py-1 border border-dashed border-foreground rounded-sm text-[13px] leading-0 text-foreground bg-secondary ",
        className
      )}
    >
      <Image
        src={icon}
        alt={name}
        width={14}
        height={14}
        className={cn("size-3", iconClassName)}
      />
      {name}
    </span>
  );
}

export { SkillBadge };
