import { getAllPosts } from "@/lib/blog";
import { profile, projects, site, tools } from "@/lib/config";

/* ------------------------------------------------------------------ */
/* xml helpers                                                         */
/* ------------------------------------------------------------------ */

export const escapeXml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

const rfc822 = (iso: string) => new Date(`${iso}T00:00:00Z`).toUTCString();

/* ------------------------------------------------------------------ */
/* feed shape                                                          */
/* ------------------------------------------------------------------ */

export type FeedItem = {
    title: string;
    /** absolute url */
    link: string;
    description: string;
    /** `YYYY-MM-DD` — posts only; omitted elsewhere because nothing is dated */
    pubDate?: string;
    categories?: string[];
};

export type Feed = {
    title: string;
    description: string;
    /** absolute url of the page this feed describes */
    link: string;
    /** path of the feed itself, used for the atom self link */
    path: string;
    items: FeedItem[];
};

/* ------------------------------------------------------------------ */
/* item builders — everything is derived from src/content + src/lib/config */
/* ------------------------------------------------------------------ */

export function postItems(): FeedItem[] {
    return getAllPosts().map((post) => ({
        title: post.title,
        link: `${site.url}/blog/${post.slug}`,
        description: post.description,
        /* pubDate is the publish date — an edit does not move the post in the feed */
        pubDate: post.date,
        categories: post.tags,
    }));
}

export function projectItems(): FeedItem[] {
    return projects.map((project) => ({
        title: project.name,
        link: `${site.url}/projects#${project.slug}`,
        description: project.overview,
    }));
}

export function toolItems(): FeedItem[] {
    return tools.map((tool) => ({
        title: tool.name,
        link: `${site.url}/tools#${tool.slug}`,
        description: tool.detail,
    }));
}

/* ------------------------------------------------------------------ */
/* render                                                              */
/* ------------------------------------------------------------------ */

const renderItem = ({ title, link, description, pubDate, categories }: FeedItem) => {
    const tags = categories?.length
        ? categories.map((tag) => `      <category>${escapeXml(tag)}</category>`).join("\n")
        : "";

    return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <description>${escapeXml(description)}</description>${pubDate ? `\n      <pubDate>${rfc822(pubDate)}</pubDate>` : ""}${tags ? `\n${tags}` : ""}
    </item>`;
};

/**
 * `lastBuildDate` is stamped at build time, so adding a post or a tool never
 * means remembering to bump a date by hand — the routes below are
 * `force-static` and this value is baked into the output.
 */
export function buildFeedXml({ title, description, link, path, items }: Feed) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${escapeXml(link)}</link>
    <description>${escapeXml(description)}</description>
    <language>${site.language}</language>
    <managingEditor>${profile.email} (${site.name})</managingEditor>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <ttl>1440</ttl>
    <atom:link href="${site.url}${escapeXml(path)}" rel="self" type="application/rss+xml"/>
${items.map(renderItem).join("\n")}
  </channel>
</rss>`;
}

export function feedResponse(xml: string) {
    return new Response(xml, {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
        },
    });
}
