import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type IconBadgeProps = {
    className?: string;
    children: ReactNode;
};

export const IconBadge = ({ className, children }: IconBadgeProps) => {
    return (
        <span
            className={cn(
                "text-foreground inline-flex items-center gap-[0.18em] align-middle font-normal",
                className,
            )}
        >
            {children}
        </span>
    );
};

export const LinkIconBadge = ({
    link,
    children,
    className
}: {
    link: string;
    className?:string
    children: React.ReactNode;
}) => {
    return (
        <a className={cn("group",className)} href={link} target="_blank" rel="noopener noreferrer">
            <IconBadge className="group-hover:scale-110 size-5 transition-all duration-300">{children}</IconBadge>
        </a>
    );
};
