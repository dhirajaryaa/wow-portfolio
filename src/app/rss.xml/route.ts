import { siteMeta } from "@/config/meta";
import { projects } from "@/config/project";
import { getAllPosts } from "@/lib/blog";

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const siteUrl = siteMeta.url;

  const projectItems = projects
    .map(
      (p) => `
    <item>
      <title>${escapeXml(p.name)}</title>
      <link>${siteUrl}/pow</link>
      <description>${escapeXml(p.description)}</description>
      <guid isPermaLink="false">${siteUrl}/pow#${escapeXml(p.slug)}</guid>
    </item>`
    )
    .join("");

  const postItems = getAllPosts()
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}/blog/${escapeXml(post.slug)}</link>
      <description>${escapeXml(post.description ?? "")}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid isPermaLink="false">${siteUrl}/blog/${escapeXml(post.slug)}</guid>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteMeta.title)}</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(siteMeta.description)}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${postItems}
    ${projectItems}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
