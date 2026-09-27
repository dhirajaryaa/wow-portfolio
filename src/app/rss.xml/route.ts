import { profile, projects, site, tools } from "@/lib/config";

export const escapeXml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

const rfc822 = (iso: string) => new Date(`${iso}T00:00:00Z`).toUTCString();

export const dynamic = "force-static";

export function GET() {
    const items: string[] = [];

    for (const project of projects) {
        items.push(
            `    <item>
      <title>${escapeXml(project.name)}</title>
      <link>${site.url}/projects#${project.slug}</link>
      <description>${escapeXml(project.overview)}</description>
      <guid isPermaLink="false">${site.url}/projects#${project.slug}</guid>
    </item>`,
        );
    }

    for (const tool of tools) {
        items.push(
            `    <item>
      <title>${escapeXml(tool.name)}</title>
      <link>${site.url}/tools#${tool.slug}</link>
      <description>${escapeXml(tool.detail)}</description>
      <guid isPermaLink="false">${site.url}/tools#${tool.slug}</guid>
    </item>`,
        );
    }

    // hand-maintained feed — bump this when tools/projects are added or edited
    const latest = "2026-09-27";

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.title)}</title>
    <link>${site.url}</link>
    <description>${escapeXml(site.description)}</description>
    <language>${site.language}</language>
    <managingEditor>${profile.email} (${site.name})</managingEditor>
    <lastBuildDate>${rfc822(latest)}</lastBuildDate>
    <atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml"/>
${items.join("\n")}
  </channel>
</rss>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
        },
    });
}
