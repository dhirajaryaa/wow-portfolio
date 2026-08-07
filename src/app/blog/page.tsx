import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { getMetaData } from "@/config/meta";
import { getAllPosts } from "@/lib/blog";
import Heading from "@/components/common/Heading";

export const metadata = getMetaData("/blog");

function formatDate(date: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="w-full h-full px-4 py-8">
      <Heading
        hint="articles & learnings ✍️"
        title="Blog"
        description="Technical articles, lessons, and thoughts on building things for the web."
      />

      <div className="max-w-3xl mx-auto w-full flex flex-col gap-3">
        {posts.length === 0 && (
          <p className="text-sm text-muted-foreground/50 text-center py-16">
            No posts yet — the first one is on its way.
          </p>
        )}

        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <article className="p-4 rounded-lg border bg-card transition-all duration-200 hover:bg-muted/20 hover:border-muted-foreground/10 hover:shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-sm font-semibold ">{post.title}</h2>
                <ArrowUpRight className="size-4 text-muted-foreground/30 shrink-0 transition-all duration-200 group-hover:text-foreground" />
              </div>
              {post.description && (
                <p className="text-xs text-muted-foreground/60 mt-1 line-clamp-2 leading-relaxed">
                  {post.description}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-3 mt-2.5">
                {post.date && (
                  <span className="text-[11px] text-muted-foreground/40 flex items-center gap-1">
                    <Calendar className="size-3" /> {formatDate(post.date)}
                  </span>
                )}
                {post.tags?.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-1.5 py-0.5 rounded border bg-muted/50 text-muted-foreground/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default BlogPage;
