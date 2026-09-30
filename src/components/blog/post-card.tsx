import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatDate, type Post } from "@/lib/blog";
import { cn } from "@/lib/utils";

export const PostCard = ({
    post,
    className,
}: {
    post: Post;
    className?: string;
}) => {
    return (
        <li>
            <Link
                href={`/blog/${post.slug}`}
                className={cn(
                    "border-muted bg-background hover:bg-gray-100 dark:hover:bg-foreground/5 group flex flex-col gap-3 rounded-xl border border-dashed p-4 transition-all duration-300",
                    className,
                )}
            >
                {/* title  */}
                <div className="flex items-start justify-between gap-2">
                    <h2 className="text-foreground group-hover:underline text-[15px] font-medium md:text-base">
                        {post.title}
                    </h2>
                    <ArrowUpRight
                        strokeWidth={1.6}
                        className="text-muted-foreground group-hover:text-foreground size-4 shrink-0 transition-all duration-200 md:mt-0.5 md:opacity-0 md:group-hover:opacity-100"
                    />
                </div>

                {/* summary  */}
                {post.description && (
                    <p className="text-foreground/70 line-clamp-2 text-[13px] leading-[1.6]">
                        {post.description}
                    </p>
                )}

                {/* meta  */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <time
                        dateTime={post.date}
                        className="text-muted-foreground/70 font-mono text-[11px]"
                    >
                        {formatDate(post.date)}
                    </time>
                    <span className="text-muted-foreground/50 font-mono text-[11px]">
                        {post.readingTime}
                    </span>
                    {post.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="border-muted text-muted-foreground rounded border border-dashed px-1.5 py-0.5 font-mono text-[10px]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </Link>
        </li>
    );
};
