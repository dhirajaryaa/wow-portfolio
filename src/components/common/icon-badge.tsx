import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type IconBadgeProps = {
    className?: string;
    children: ReactNode;
};

export const IconBadge = ({
    className,
    children,
}: IconBadgeProps) => {
    return (
        <span
            className={cn(
                "inline-flex items-center align-middle gap-[0.18em] font-normal text-foreground",
                className
            )}
        >
            {children}
        </span>
    );
};