import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { evaluate } from "next-mdx-remote-client/rsc";
import { getAllPosts, getPostBySlug, getPostRaw } from "@/lib/blog";
import { mdxComponents } from "@/lib/mdx-components";
import { getMetaData } from "@/config/meta";
import GoBackButton from "@/components/common/GoBackButton";

export const dynamicParams = false;

// for static generation, we need to specify all possible slugs
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

// for metadata generation, we need to specify all possible slugs
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return getMetaData("/blog");

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
    },
  };
}

// date time formatting function
function formatDate(date: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const raw = getPostRaw(slug);
  if (!raw) notFound();

  const { content } = await evaluate({
    source: raw,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
    },
  });

  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  const older = posts[index + 1];
  const newer = posts[index - 1];

  return (
    <main className="w-full h-full px-4 py-8">
      <div className="max-w-3xl mx-auto w-full">
        <GoBackButton />

        <article className="mt-2">
          <header>
            <h1 className="text-2xl font-bold leading-snug">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-3 mt-3">
              {post.date && (
                <span className="text-xs text-muted-foreground/50 flex items-center gap-1">
                  <Calendar className="size-3" /> {formatDate(post.date)}
                </span>
              )}
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-1.5 py-0.5 rounded border bg-muted/50 text-muted-foreground/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="my-8 h-px bg-border" />

          {content}
        </article>

        <div className="mt-12 flex items-center justify-between gap-4">
          {newer ? (
            <Link
              href={`/blog/${newer.slug}`}
              className="flex flex-col gap-0.5 max-w-[45%] group"
            >
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground/40">Newer</span>
              <span className="text-xs font-medium text-foreground/80 line-clamp-1 group-hover:underline underline-offset-4">
                {newer.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {older ? (
            <Link
              href={`/blog/${older.slug}`}
              className="flex flex-col gap-0.5 max-w-[45%] text-right group"
            >
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground/40">Older</span>
              <span className="text-xs font-medium text-foreground/80 line-clamp-1 group-hover:underline underline-offset-4">
                {older.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </main>
  );
}

export default PostPage;
