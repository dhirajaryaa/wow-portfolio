import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { SectionHeading } from "@/components/common/section-heading";
import { PostCard } from "@/components/blog/post-card";
import { Button } from "@/components/ui/button";
import { Rss } from "lucide-react";
import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { ogImages, site } from "@/lib/config";
import type { Metadata } from "next";

const description =
    "Notes on building for the web — Next.js, React, TypeScript and the design decisions behind them. Written by a self-taught developer, published when there is something worth saying.";

export const metadata: Metadata = {
    title: "Blog",
    description,
    keywords: [
        "blog",
        "web development blog",
        "Next.js articles",
        "React articles",
        "TypeScript blog",
        "self-taught developer writing",
        "software engineering notes",
        "MDX",
    ],
    alternates: {
        canonical: "/blog",
        types: { "application/rss+xml": `${site.url}/blog/rss.xml` },
    },
    openGraph: {
        type: "website",
        title: "Blog — Dhiraj Arya",
        description,
        url: "/blog",
        images: [...ogImages],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog — Dhiraj Arya",
        description,
        creator: site.twitter,
        images: ["/og/og.png", "/og/og.webp"],
    },
};

export default function BlogPage() {
    const posts = getAllPosts();
    const tags = getAllTags();
    const latest = posts[0];

    return (
        <Container className="py-12 sm:py-20">
            <PageHeader
                title="Blog"
                count={`0${posts.length}`}
                description="Notes on building for the web — the parts that worked, the parts that did not, and why this site looks the way it does."
            />

            <hr />

            {/* posts  */}
            <section className="flex flex-col justify-center gap-4 py-10 md:py-14">
                <SectionHeading
                    title="Posts"
                    hint={latest ? `newest first — ${posts.length} so far.` : "nothing here yet."}
                />

                {posts.length === 0 ? (
                    <p className="text-muted-foreground py-10 text-center text-[13px] leading-[1.55]">
                        No posts yet — the first one is on its way.
                    </p>
                ) : (
                    <ul className="flex flex-col gap-2">
                        {posts.map((post) => (
                            <PostCard key={post.slug} post={post} />
                        ))}
                    </ul>
                )}
            </section>

            <hr />

            {/* tags  */}
            {tags.length > 0 && (
                <section className="flex flex-col justify-center gap-4 py-10 md:py-14">
                    <SectionHeading
                        title="Topics"
                        hint="what keeps coming up."
                    />
                    <ul className="flex flex-wrap gap-2">
                        {tags.map(({ tag, count }) => (
                            <li
                                key={tag}
                                className="border-muted text-muted-foreground flex items-center gap-1.5 rounded-md border border-dashed px-2 py-1 font-mono text-[11px]"
                            >
                                {tag}
                                <span className="text-muted-foreground/50">
                                    {String(count).padStart(2, "0")}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            <hr />

            {/* note  */}
            <section className="flex flex-col justify-center gap-3 py-10 md:py-14">
                <SectionHeading title="A Note" hint="why I bother writing these." />
                <p className="text-foreground/70 max-w-prose text-[13px] leading-[1.6] md:text-sm">
                    Because writing is how I find out whether I understood something.
                    Most of these posts started as a note to my own future self, and the
                    only reason they are public is that someone might hit the same wall.
                </p>
                <p className="text-muted-foreground max-w-prose text-[13px] leading-[1.55] md:text-sm">
                    New posts are infrequent and unannounced — the feed is the only place
                    that updates. It is generated from these same files at build time, so
                    there is nothing to subscribe to twice.
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                    <Button variant="outline" size="sm" asChild>
                        <a href="/blog/rss.xml" target="_blank" rel="noopener noreferrer">
                            blog feed (posts only)
                            <Rss />
                        </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                        <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
                            everything feed
                            <Rss />
                        </a>
                    </Button>
                </div>
            </section>

            <hr />

            {/* back out  */}
            <section className="flex flex-col justify-center gap-2 py-10 md:py-14">
                <p className="text-muted-foreground text-[13px] leading-[1.55]">
                    Looking for the work instead of the words?{" "}
                    <Link
                        href="/projects"
                        className="text-foreground underline decoration-muted-foreground/40 underline-offset-[3px] transition-colors hover:decoration-foreground"
                    >
                        See the projects
                    </Link>
                    .
                </p>
            </section>
        </Container>
    );
}
