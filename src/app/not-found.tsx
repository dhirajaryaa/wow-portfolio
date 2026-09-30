import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { SectionHeading } from "@/components/common/section-heading";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page not found",
    description: "That link does not lead anywhere — the page may have been renamed, or the url picked up a typo.",
    robots: { index: false, follow: true },
};

const destinations = [
    { href: "/", title: "Home", line: "Start from the top." },
    { href: "/blog", title: "Blog", line: "Everything I have written so far." },
    { href: "/projects", title: "Work", line: "The projects, unfolded." },
    { href: "/tools", title: "Tools", line: "Small utilities I built and maintain." },
];

export default function NotFound() {
    return (
        <Container className="py-12 sm:py-20">
            <PageHeader
                title="Page not found"
                count="404"
                description="That link does not lead anywhere. The post may have been renamed, the url picked up a typo, or it never existed in the first place."
            />

            <hr className="mt-4" />

            <section className="flex flex-col justify-center gap-4 py-10 md:py-14">
                <SectionHeading title="Where To" hint="none of these are 404." />

                <ul className="flex flex-col gap-2">
                    {destinations.map(({ href, title, line }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="border-muted bg-background hover:bg-gray-100 dark:hover:bg-foreground/5 group flex items-start justify-between gap-2 rounded-xl border border-dashed p-3 transition-all duration-300"
                            >
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-foreground group-hover:underline text-[15px] font-medium">
                                        {title}
                                    </span>
                                    <span className="text-muted-foreground text-xs leading-[1.5]">
                                        {line}
                                    </span>
                                </div>
                                <ArrowUpRight
                                    strokeWidth={1.6}
                                    className="text-muted-foreground group-hover:text-foreground size-4 shrink-0 transition-all duration-200 md:mt-0.5 md:opacity-0 md:group-hover:opacity-100"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </Container>
    );
}
