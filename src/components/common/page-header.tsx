import { ThemeToggle } from "@/components/common/theme-toggle";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type PageHeaderProps = {
    title: string;
    description: string;
    /** count rendered next to the title, e.g. "4 projects" */
    count?: string;
    children?: ReactNode;
};

export const PageHeader = ({
    title,
    description,
    count,
    children,
}: PageHeaderProps) => {
    return (
        <section className="flex flex-col gap-4 sm:gap-6">
            {/* back + theme  */}
            <div className="flex items-center justify-between gap-4">
                <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground group inline-flex items-center gap-1.5 text-xs transition-colors"
                >
                    <ArrowLeft
                        strokeWidth={1.6}
                        size={14}
                        className="transition-transform duration-200 group-hover:-translate-x-0.5"
                    />
                    back home
                </Link>
                <ThemeToggle />
            </div>

            {/* title + desc  */}
            <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                    <h1 className="text-foreground font-serif text-2xl font-medium tracking-tight md:text-3xl">
                        {title}
                    </h1>
                    {count && (
                        <span className="text-muted-foreground/50 font-mono text-xs">
                            {count}
                        </span>
                    )}
                </div>
                <p className="text-muted-foreground text-[13px] leading-[1.55] md:text-sm">
                    {description}
                </p>
            </div>

            {children}
        </section>
    );
};
