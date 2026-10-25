import { OG_CONTENT_TYPE, OG_SIZE, renderBlogOgImage } from "@/lib/og-image";

/**
 * Twitter expects its own tag, so the same card is also generated through the
 * twitter-image convention. Both files are statically built.
 */
export const alt = "Blog — Dhiraj Arya";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export const dynamic = "force-static";

export default function BlogIndexTwitterImage() {
    return renderBlogOgImage({ title: "Notes on building for the web" });
}
