import { OG_CONTENT_TYPE, OG_SIZE, renderBlogOgImage } from "@/lib/og-image";

export const alt = "Blog — Dhiraj Arya";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

/** generated during `next build`, never on request */
export const dynamic = "force-static";

export default function BlogIndexOpengraphImage() {
    return renderBlogOgImage({ title: "Notes on building for the web" });
}
