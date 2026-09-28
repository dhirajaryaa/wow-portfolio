import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { getAllPosts } from "@/lib/blog";

/** teaser size — the index holds the full list. */
const PREVIEW = 4;

export const WritingSection = () => {
    const posts = getAllPosts().slice(0, PREVIEW);

    if (posts.length === 0) return null;

    return (
        <section className="flex flex-col justify-center gap-4 py-10 md:py-14">
            {/* heading  */}
            <SectionHeading title="Writing" hint="notes on building for the web.">
                <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-foreground inline-flex shrink-0 items-center gap-1 text-xs transition-colors hover:underline"
                >
                    all posts
                    <ArrowUpRight className="size-3" />
                </Link>
            </SectionHeading>

            {/* teaser — title and an arrow, nothing else  */}
            <ul className="flex flex-col">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="border-muted hover:bg-muted/40 group flex items-center justify-between gap-3 rounded-lg border-b border-dashed px-2 py-2.5 transition-colors duration-200 md:px-4"
                        >
                            <span className="text-foreground group-hover:underline truncate text-[13px] font-medium">
                                {post.title}
                            </span>
                            <ArrowUpRight
                                strokeWidth={1.6}
                                className="text-muted-foreground group-hover:text-foreground size-4 shrink-0 transition-all duration-200"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};
