import { SectionHeading } from "@/components/common/section-heading";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const items = [
    {
        href: "/gears",
        title: "Gear",
        line: "PC setup, gadgets & tools I use daily.",
    },
    {
        href: "/setup",
        title: "Setup",
        line: "VSCode config, terminal & workflow.",
    },
    {
        href: "/books",
        title: "Books",
        line: "Books that shaped my thinking.",
    },
    {
        href: "/movies",
        title: "Movies",
        line: "Films & shows I recommend.",
    },
];

export const BeyondCode = () => {
    return (
        <section className="flex flex-col justify-center gap-6 py-10 md:py-14">
            {/* heading  */}
            <SectionHeading title="Beyond the Code" hint="A few things I use, watch, read, and enjoy." />

            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {items.map(({ href, title, line }) => (
                    <Link
                        key={href}
                        href={href}
                        className="group border-muted hover:bg-gray-100 dark:hover:bg-foreground/5 flex items-start justify-between gap-2 rounded-xl border border-dashed p-3 transition-all duration-300"
                    >
                        <div className="flex flex-col gap-0.5">
                            <h3 className="text-foreground group-hover:underline text-[15px] font-medium">
                                {title}
                            </h3>
                            <p className="text-muted-foreground text-xs leading-[1.5]">
                                {line}
                            </p>
                        </div>
                        <ArrowUpRight
                            strokeWidth={1.6}
                            className="text-muted-foreground group-hover:text-foreground size-4 shrink-0 transition-all duration-200 md:mt-0.5 md:opacity-0 md:group-hover:opacity-100"
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
};
