import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date("2026-08-26");

    const routes = [
        { path: "", priority: 1, freq: "weekly" as const },
        { path: "/projects", priority: 0.9, freq: "weekly" as const },
        { path: "/blog", priority: 0.8, freq: "weekly" as const },
        { path: "/tools", priority: 0.8, freq: "monthly" as const },
        { path: "/gears", priority: 0.6, freq: "monthly" as const },
        { path: "/setup", priority: 0.6, freq: "monthly" as const },
        { path: "/books", priority: 0.5, freq: "monthly" as const },
        { path: "/movies", priority: 0.5, freq: "monthly" as const },
    ];

    const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
        url: `${site.url}${route.path}`,
        lastModified,
        changeFrequency: route.freq,
        priority: route.priority,
    }));

    /* posts carry their own dates, so they are appended from the content itself */
    const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
        url: `${site.url}/blog/${post.slug}`,
        lastModified: new Date(post.updated || post.date),
        changeFrequency: "yearly" as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...postRoutes];
}
