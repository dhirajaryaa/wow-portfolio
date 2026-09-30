import { buildFeedXml, feedResponse, postItems, projectItems, toolItems } from "@/lib/rss";
import { site } from "@/lib/config";

export const dynamic = "force-static";

/** everything worth following in one feed — posts lead, then work, then tools. */
export function GET() {
    return feedResponse(
        buildFeedXml({
            title: site.title,
            description: site.description,
            link: site.url,
            path: "/rss.xml",
            items: [...postItems(), ...projectItems(), ...toolItems()],
        }),
    );
}
