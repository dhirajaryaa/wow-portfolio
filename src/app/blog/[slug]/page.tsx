import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { SectionHeading } from "@/components/common/section-heading";
import { mdxComponents } from "@/components/blog/mdx-components";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { evaluate } from "next-mdx-remote-client/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import {
    formatDateLong,
    getAdjacentPosts,
    getAllPosts,
    getPostBySlug,
    getPostSource,
    type Post,
} from "@/lib/blog";
import { ogImages, profile, site } from "@/lib/config";
import type { Metadata } from "next";

type PostPageProps = {
    params: Promise<{ slug: string }>;
};

/** posts are known at build time — an unknown slug is a 404, not a runtime lookup. */
export const dynamicParams = false;

export function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) return { title: "Blog" };

    const url = `/blog/${post.slug}`;

    return {
        title: post.title,
        description: post.description,
        keywords: [...post.tags, "blog", ...site.keywords],
        authors: [{ name: site.name, url: site.url }],
        alternates: {
            canonical: url,
            types: { "application/rss+xml": `${site.url}/blog/rss.xml` },
        },
        openGraph: {
            type: "article",
            title: post.title,
            description: post.description,
            url,
            siteName: site.name,
            locale: site.locale,
            publishedTime: post.date,
            modifiedTime: post.updated || post.date,
            authors: [site.url],
            tags: [...post.tags],
            images: [...ogImages],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            creator: site.twitter,
            images: ["/og/og.png", "/og/og.webp"],
        },
    };
}

const PagerLink = ({ post, direction }: { post: Post; direction: "newer" | "older" }) => {
    const isNewer = direction === "newer";
    const Icon = isNewer ? ArrowLeft : ArrowRight;

    return (
        <Link
            href={`/blog/${post.slug}`}
            className="border-muted hover:bg-muted/40 group flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-dashed px-3 py-2.5 transition-colors duration-200"
        >
            {isNewer && <Icon className="text-muted-foreground/60 size-3.5 shrink-0" />}
            <span className="flex min-w-0 flex-col gap-0.5">
                <span className="text-muted-foreground/60 text-[10px] tracking-wider uppercase">
                    {direction}
                </span>
                <span className="text-foreground/80 group-hover:underline truncate text-[13px]">
                    {post.title}
                </span>
            </span>
            {!isNewer && (
                <Icon className="text-muted-foreground/60 ml-auto size-3.5 shrink-0" />
            )}
        </Link>
    );
};

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    const source = getPostSource(slug);

    if (!post || !source) notFound();

    const { content } = await evaluate({
        source,
        components: mdxComponents,
        options: {
            parseFrontmatter: true,
            mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] },
        },
    });

    const { newer, older } = getAdjacentPosts(slug);

    /* schema.org so the post is eligible for a rich result, not just a blue link */
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        url: `${site.url}/blog/${post.slug}`,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/blog/${post.slug}` },
        datePublished: post.date,
        dateModified: post.updated || post.date,
        inLanguage: site.language,
        keywords: post.tags.join(", "),
        timeRequired: `PT${post.readingTime.replace(/\D/g, "")}M`,
        author: {
            "@type": "Person",
            name: profile.name,
            url: site.url,
            image: `${site.url}/logo.webp`,
        },
        publisher: {
            "@type": "Person",
            name: site.name,
            url: site.url,
            image: `${site.url}/logo.webp`,
        },
        image: ogImages.map((image) => `${site.url}${image.url}`),
        articleSection: post.tags[0] ?? "Writing",
    };

    return (
        <Container className="py-12 sm:py-20">
            <PageHeader
                title={post.title}
                description={post.description}
                count={post.readingTime}
                backHref="/blog"
                backLabel="back to blog"
            >
                {/* meta  */}
                <div className="flex flex-wrap items-center gap-2">
                    <time
                        dateTime={post.date}
                        className="text-muted-foreground/70 font-mono text-[11px]"
                    >
                        {formatDateLong(post.date)}
                    </time>
                    {post.updated && post.updated !== post.date && (
                        <span className="text-muted-foreground/50 font-mono text-[11px]">
                            · updated {formatDateLong(post.updated)}
                        </span>
                    )}
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="border-muted text-muted-foreground rounded border border-dashed px-1.5 py-0.5 font-mono text-[10px]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </PageHeader>

            <hr />

            {/* body — every element is mapped in components/blog/mdx-components  */}
            <article className="py-8 md:py-10">{content}</article>

            <hr />

            {/* pager  */}
            <section className="flex flex-col justify-center gap-4 py-10 md:py-14">
                <SectionHeading title="Keep Reading" hint="newer and older posts." />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
                    {newer ? (
                        <PagerLink post={newer} direction="newer" />
                    ) : (
                        <span className="hidden sm:block sm:flex-1" />
                    )}
                    {older && <PagerLink post={older} direction="older" />}
                </div>
                <p className="text-muted-foreground text-[13px] leading-[1.55]">
                    Enjoyed this? It is also on{" "}
                    <a
                        href="/blog/rss.xml"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground underline decoration-muted-foreground/40 underline-offset-[3px] transition-colors hover:decoration-foreground"
                    >
                        the blog feed
                    </a>
                    .
                </p>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </Container>
    );
}
