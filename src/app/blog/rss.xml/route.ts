import { buildFeedXml, feedResponse, postItems } from "@/lib/rss";
import { site } from "@/lib/config";

export const dynamic = "force-static";

/** posts only — same builder as the site-wide feed, so it can never drift. */
export function GET() {
    return feedResponse(
        buildFeedXml({
            title: `Blog — ${site.name}`,
            description: `Notes on building for the web by ${site.name}. Posts only, newest first.`,
            link: `${site.url}/blog`,
            path: "/blog/rss.xml",
            items: postItems(),
        }),
    );
}
