import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionHeadingProps = {
    title: string;
    /** lowercase microcopy shown beside the title on md+ */
    hint?: string;
    className?: string;
    children?: ReactNode;
};

export const SectionHeading = ({
    title,
    hint,
    className,
    children,
}: SectionHeadingProps) => {
    return (
        <div
            className={cn(
                "flex flex-row items-center justify-between gap-4",
                className,
            )}
        >
            <div className="flex items-center gap-2 min-w-0">
                <h2 className="text-foreground font-serif font-medium text-lg shrink-0">
                    # {title}
                </h2>
                {hint && (
                    <p className="text-muted-foreground hidden truncate pl-2 text-xs tracking-wider md:block">
                        {hint}
                    </p>
                )}
            </div>
            {children}
        </div>
    );
};
