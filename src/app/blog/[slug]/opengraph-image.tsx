import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { OG_CONTENT_TYPE, OG_SIZE, renderBlogOgImage } from "@/lib/og-image";

export const alt = "Blog — Dhiraj Arya";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

/** generated during `next build`, never on request */
export const dynamic = "force-static";

export function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogOpengraphImage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    return renderBlogOgImage({
        title: post?.title ?? "Writing by Dhiraj Arya",
        readingTime: post?.readingTime,
    });
}
