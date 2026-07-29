import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

interface CardProps {
  icon?: LucideIcon;
  image?: string;
  imageAlt?: string;
  imageClassName?: string;
  title?: string;
  description?: string;
  subtitle?: string;
  href?: string;
  external?: boolean;
  center?: boolean;
  hover?: boolean;
  variant?: "default" | "muted" | "accent";
  className?: string;
  children?: React.ReactNode;
  action?: React.ReactNode;
}

const variantStyles: Record<string, string> = {
  default: "bg-card",
  muted: "bg-muted/30",
  accent: "bg-accent/60",
};

function Card({
  icon: Icon,
  image,
  imageAlt = "",
  imageClassName,
  title,
  description,
  subtitle,
  href,
  external,
  center,
  hover = true,
  variant = "default",
  className,
  children,
  action,
}: CardProps) {
  const isAuto = !children;

  const baseClasses = cn(
    "group p-4 rounded-lg border transition-all duration-200",
    variantStyles[variant],
    hover && "hover:bg-muted/20 hover:border-muted-foreground/10 hover:shadow-sm",
    isAuto && (center
      ? "flex flex-col items-center gap-2 text-center"
      : "flex items-center gap-3"),
    className
  );

  const body = isAuto ? (
    <>
      {Icon && (
        <Icon className={cn(
          "size-5 shrink-0 text-muted-foreground/50 transition-all duration-200",
          center
            ? "group-hover:scale-110 group-hover:text-foreground"
            : "group-hover:-translate-y-0.5 group-hover:text-foreground"
        )} />
      )}
      {image && (
        <Image
          src={image}
          alt={imageAlt}
          width={28}
          height={28}
          className={cn(
            "size-7 object-contain transition-transform duration-200 group-hover:scale-110",
            imageClassName
          )}
        />
      )}
      {(title || subtitle || description) && (
        <div className={cn("flex flex-col min-w-0", center && "items-center")}>
          {title && (
            <span className="text-sm font-medium">
              {title}
              {subtitle && (
                <span className="text-xs text-muted-foreground/40 font-normal">
                  {" "}({subtitle})
                </span>
              )}
            </span>
          )}
          {description && (
            <span className="text-xs text-muted-foreground/50">{description}</span>
          )}
        </div>
      )}
      {action && <div className={cn(!center && "ml-auto shrink-0")}>{action}</div>}
    </>
  ) : (
    children
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {body}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {body}
      </Link>
    );
  }

  return <div className={baseClasses}>{body}</div>;
}

export default Card;
