import fs from "fs";
import path from "path";
import matter from "gray-matter";

/* ------------------------------------------------------------------ */
/* types                                                               */
/* ------------------------------------------------------------------ */

/** Frontmatter of a post. Only `title` and `date` are required. */
export type PostFrontmatter = {
    title?: string;
    /** ISO-ish `YYYY-MM-DD` — also drives the RSS pubDate and JSON-LD. */
    date?: string;
    /** used for meta description, OG cards, RSS and llm.txt. */
    description?: string;
    tags?: string[];
    /** set to false to keep a draft out of every list, feed and sitemap. */
    published?: boolean;
    /** optional — shown as "updated" when it is newer than `date`. */
    updated?: string;
};

/** A post's frontmatter plus the derived bits the UI needs. */
export type Post = {
    slug: string;
    title: string;
    date: string;
    updated: string;
    description: string;
    tags: string[];
    readingTime: string;
};

/* ------------------------------------------------------------------ */
/* filesystem                                                          */
/* ------------------------------------------------------------------ */

const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

/** slugs become urls and file paths, so keep them boring. */
const SAFE_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** ~200 wpm, minus anything that is not prose a human would read aloud. */
const WORDS_PER_MINUTE = 200;

/**
 * Rough reading time. Fenced code, inline code and image syntax are dropped
 * first so a post that is mostly a terminal transcript does not claim to be a
 * five minute read.
 */
const estimateReadingTime = (body: string) => {
    const prose = body
        .replace(/^---[\s\S]*?---/, "")
        .replace(/```[\s\S]*?```/g, " ")
        .replace(/`[^`]*`/g, " ")
        .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
        .replace(/\[([^\]]*)]\([^)]*\)/g, "$1")
        .replace(/<[^>]+>/g, " ")
        .replace(/[#>*_~|\-]/g, " ");

    const words = prose.split(/\s+/).filter(Boolean).length;

    return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`;
};

const asTags = (value: unknown): string[] =>
    Array.isArray(value) ? value.filter((tag): tag is string => typeof tag === "string") : [];

const toIsoDate = (value: unknown) => (typeof value === "string" ? value.slice(0, 10) : "");

const readPost = (file: string): (Post & { published: boolean }) | null => {
    try {
        const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
        const { data, content } = matter(raw);
        const meta = data as PostFrontmatter;
        const slug = file.replace(/\.mdx?$/, "");

        if (!meta.title || !SAFE_SLUG.test(slug)) return null;

        return {
            slug,
            title: meta.title,
            date: toIsoDate(meta.date),
            updated: toIsoDate(meta.updated),
            description: meta.description ?? "",
            tags: asTags(meta.tags),
            readingTime: estimateReadingTime(content),
            published: meta.published !== false,
        };
    } catch {
        // an unreadable or malformed file should never take the whole page down
        return null;
    }
};

/* ------------------------------------------------------------------ */
/* queries                                                             */
/* ------------------------------------------------------------------ */

/** every published post, newest first. */
export function getAllPosts(): Post[] {
    if (!fs.existsSync(POSTS_DIR)) return [];

    return fs
        .readdirSync(POSTS_DIR)
        .filter((file) => /\.mdx?$/.test(file))
        .map(readPost)
        .filter((post): post is Post & { published: boolean } => post !== null && post.published)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
    return getAllPosts().find((post) => post.slug === slug);
}

/** raw markdown for a slug, or null when the slug is unsafe or missing. */
export function getPostSource(slug: string): string | null {
    if (!SAFE_SLUG.test(slug)) return null;

    for (const ext of [".mdx", ".md"]) {
        const file = path.join(POSTS_DIR, `${slug}${ext}`);
        if (fs.existsSync(file)) return fs.readFileSync(file, "utf-8");
    }

    return null;
}

/** the previous/next post in publish order, for the footer pager. */
export function getAdjacentPosts(slug: string): { newer?: Post; older?: Post } {
    const posts = getAllPosts();
    const index = posts.findIndex((post) => post.slug === slug);
    if (index === -1) return {};

    return { newer: posts[index - 1], older: posts[index + 1] };
}

/** every tag in use, with a count, ordered by how often it shows up. */
export function getAllTags(): { tag: string; count: number }[] {
    const counts = new Map<string, number>();

    for (const post of getAllPosts()) {
        for (const tag of post.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }

    return [...counts.entries()]
        .map(([tag, count]) => ({ tag, count }))
        .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/* ------------------------------------------------------------------ */
/* formatting                                                          */
/* ------------------------------------------------------------------ */

/** `Mar 4, 2026` — for lists and the byline. */
export function formatDate(date: string): string {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
    });
}

/** `March 4, 2026` — used in the post header and JSON-LD-adjacent copy. */
export function formatDateLong(date: string): string {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });
}
