import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface socialLinks {
  url: string;
  icon: LucideIcon;
  label: string;
}
function SocialLinks({
  socialLinks,
  className,
}: {
  socialLinks: socialLinks[];
  className?: string;
}) {
  return (
    <div
      className={cn("flex flex-wrap text-foreground/40 gap-3 mt-8 ", className)}
    >
      {socialLinks?.map((link: socialLinks, idx: number) => (
        <Button
          variant={"secondary"}
          size={"sm"}
          key={idx}
          asChild
          className={
            "hover:-translate-y-0.5 duration-150 transition-all text-sm"
          }
        >
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {<link.icon />}
            <span className="capitalize font-normal">{link.label}</span>
          </a>
        </Button>
      ))}
    </div>
  );
}

export default SocialLinks;
