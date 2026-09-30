import { getAllPosts } from "@/lib/blog";
import { movies, books, gearGroups, profile, projects, site, socials, tools } from "@/lib/config";

const escape = (value: string) => value.replace(/\s+/g, " ").trim();

export function buildLlmsTxt() {
    const lines: string[] = [];

    lines.push(`# ${site.name} — Self-Taught Full-Stack Engineer`);
    lines.push("");
    lines.push(
        `Sections: writing (${site.url}/blog) and a site-wide feed at ${site.url}/rss.xml, both generated from the same source files.`,
    );
    lines.push("");

    /* ---------------- contact ---------------- */
    lines.push("## Contact & Socials");
    lines.push(`- **Email:** ${profile.email} / ${profile.professionEmail}`);
    lines.push(`- **Website:** ${site.url}`);
    lines.push(`- **GitHub:** ${socials.github}`);
    lines.push(`- **Twitter:** ${socials.x}`);
    lines.push(`- **LinkedIn:** ${socials.linkedin}`);
    lines.push(`- **YouTube:** ${socials.youtube}`);
    lines.push(`- **Instagram:** ${socials.instagram}`);
    lines.push("");

    /* ---------------- stack ---------------- */
    lines.push("## Core Tech Stack");
    lines.push("- **Languages:** JavaScript, TypeScript, SQL, HTML, CSS");
    lines.push(
        "- **Frontend:** React, Next.js (App Router), Tailwind CSS, Shadcn UI, Zustand, React Query, WXT (Chrome Extensions)",
    );
    lines.push(
        "- **Backend & Database:** Node.js, Express, PostgreSQL, MongoDB, Firebase, Drizzle ORM, Better Auth, Inngest",
    );
    lines.push("- **Tools & Platforms:** Vercel, Git, GitHub Actions, Bun");
    lines.push("");

    /* ---------------- tools ---------------- */
    lines.push("## Live Tools");
    lines.push("Small, useful developer utility web applications:");
    lines.push("");
    tools.forEach((tool, i) => {
        const label = tool.status === "Live" ? "" : " (Coming Soon)";
        lines.push(`### ${i + 1}. ${tool.name}${label}`);
        if (tool.href) lines.push(`- **URL:** ${tool.href}`);
        lines.push(`- **Description:** ${escape(tool.detail)}`);
        lines.push(`- **Key Features:** ${tool.highlights.join(", ")}.`);
        lines.push("");
    });

    /* ---------------- projects ---------------- */
    lines.push("## Real-World Projects & Proof of Work (POW)");
    lines.push("");
    projects.forEach((project, i) => {
        const label =
            project.status === "Ongoing"
                ? " (Active / Ongoing)"
                : project.status === "Completed"
                  ? " (Completed)"
                  : project.status === "Discontinue"
                    ? " (Discontinued)"
                    : " (Archived)";

        lines.push(`### ${i + 1}. ${project.name}${label}`);
        if (project.links.live) lines.push(`- **URL:** ${project.links.live}`);
        if (project.links.repo)
            lines.push(`- **Repository:** ${project.links.repo}`);
        lines.push(`- **Description:** ${escape(project.overview)}`);
        lines.push(`- **Tech Stack:** ${project.tags.join(", ")}`);
        lines.push("");
    });

    /* ---------------- gears ---------------- */
    lines.push("## Gears & Setup");
    gearGroups.forEach((group) => {
        const items = group.items.map((item) =>
            item.note ? `${item.name} (${item.note})` : item.name,
        );
        lines.push(`- **${group.title}:** ${items.join(", ")}`);
    });
    lines.push("");
    lines.push("");

    /* ---------------- writing ---------------- */
    lines.push("## Writing");
    lines.push("Blog posts, newest first:");
    lines.push("");
    getAllPosts().forEach((post, i) => {
        lines.push(`### ${i + 1}. ${post.title}`);
        lines.push(`- **URL:** ${site.url}/blog/${post.slug}`);
        lines.push(`- **Published:** ${post.date}`);
        lines.push(`- **Reading Time:** ${post.readingTime}`);
        if (post.tags.length) lines.push(`- **Tags:** ${post.tags.join(", ")}`);
        lines.push(`- **Summary:** ${escape(post.description)}`);
        lines.push("");
    });

    /* ---------------- beyond ---------------- */
    lines.push("## Beyond the Code");
    lines.push(
        `- **Books:** ${books.map((b) => `${b.title} by ${b.author}`).join("; ")}`,
    );
    lines.push(
        `- **Movies:** ${movies.map((m) => `${m.title} (${m.year})`).join("; ")}`,
    );
    lines.push("");

    return lines.join("\n");
}
