import type { MetadataRoute } from "next";
import { site } from "@/lib/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date("2026-08-26");

    const routes = [
        { path: "", priority: 1, freq: "weekly" as const },
        { path: "/projects", priority: 0.9, freq: "weekly" as const },
        { path: "/tools", priority: 0.8, freq: "monthly" as const },
        { path: "/gears", priority: 0.6, freq: "monthly" as const },
        { path: "/setup", priority: 0.6, freq: "monthly" as const },
        { path: "/books", priority: 0.5, freq: "monthly" as const },
        { path: "/movies", priority: 0.5, freq: "monthly" as const },
    ];

    return routes.map((route) => ({
        url: `${site.url}${route.path}`,
        lastModified,
        changeFrequency: route.freq,
        priority: route.priority,
    }));
}
