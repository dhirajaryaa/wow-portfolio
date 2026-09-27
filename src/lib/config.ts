import { Blocks, Database, Rss, TextCursorInput } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type TechKey =
    | "react"
    | "next"
    | "typescript"
    | "tailwind"
    | "node"
    | "express"
    | "postgresql"
    | "mongodb"
    | "drizzle"
    | "firebase"
    | "auth"
    | "inngest"
    | "zustand"
    | "reactquery"
    | "shadcn"
    | "chrome"
    | "bun"
    | "docker"
    | "git"
    | "actions"
    | "vercel";

export type Project = {
    name: string;
    href?: string;
    repo?: string;
    line: string;
    note?: string;
    tech: TechKey[];
    blurb?: string;
    glyph?: LucideIcon;
};

export type Tool = {
    name: string;
    href?: string;
    line: string;
    note?: string;
};

export type GalleryEntry = {
    name: string;
    caption: string;
    href?: string;
    description: string;
    note?: string;
    image?: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
};

export const profile = {
    name: "Dhiraj Arya",
    role: "Self-taught Engineer",
    email: "dhirajarya.ptn@gmail.com",
    professionEmail: "hello@dhirajarya.in",
    site: "https://dhirajarya.in",
};



export const socials = {
    github: "https://github.com/dhirajaryaa",
    x: "https://twitter.com/dhirajarya01",
    linkedin: "https://linkedin.com/in/dhirajarya01",
    youtube: "https://youtube.com/@dhirajaryaa",
    instagram: "https://instagram.com/dhirajarya01",
};

export const links = {
    ...socials,
    "resume": "https://drive.google.com/file/d/1ClHy3E1LAc4mVUurzYGVTI5IXY3mTY26/view"
};

export const contact = {
    text: "Open to interesting projects, collaborations, or a good argument about code.",
    email: profile.email,
    emailHref: `mailto:${profile.email}`,
    mentions: [
        { label: "GitHub", href: socials.github },
        { label: "X", href: socials.x },
    ] as const,
};

export const projects: Project[] = [
    {
        name: "BlogDrop",
        href: "https://blogdrop.in",
        repo: "https://github.com/dhirajaryaa/blogdrop",
        line: "Engineering blog aggregator that fetches and reads 100+ top engineering blogs, then summarises them.",
        note: "Ongoing.",
        blurb:
            "Fetches and reads articles from 100+ engineering blogs, summarises them with Gemini, and keeps the whole thing on a schedule with Inngest.",
        tech: ["next", "typescript", "postgresql", "drizzle"],
        glyph: Rss,
    },
    {
        name: "QueryMate",
        href: "https://querymate.dhirajarya.in",
        repo: "https://github.com/dhirajaryaa/querymate",
        line: "Natural-language database querying. Plain English in, optimized SQL out.",
        blurb:
            "Turns conversational questions into optimized SQL for PostgreSQL, MySQL, SQLite and MongoDB, so you can query a database without remembering the syntax.",
        tech: ["next", "typescript", "drizzle", "tailwind"],
        glyph: Database,
    },
    {
        name: "SmartForm",
        repo: "https://github.com/dhirajaryaa/smartform",
        line: "Chrome extension that fills long application forms with contextual AI.",
        tech: ["typescript", "react", "chrome", "tailwind"],
        glyph: TextCursorInput,
    },
    {
        name: "QuickFormX",
        href: "https://quickformx.dhirajarya.in",
        repo: "https://github.com/dhirajaryaa/quickFormx",
        line: "Drag-and-drop form builder with custom components, schema validation and API integrations.",
        tech: ["react", "mongodb", "node", "tailwind"],
        glyph: Blocks,
    },
];

export const cards = projects.filter(
    (project) => project.glyph && project.blurb && project.href,
);

export const tools: Tool[] = [
    {
        name: "Temp Mail",
        href: "https://tempmail.dhirajarya.in",
        line: "Disposable temporary email, with a live inbox and no sign-up.",
    },
    {
        name: "Compressly",
        href: "https://compressly.dhirajarya.in",
        line: "Drag-and-drop image and file compression that keeps quality high.",
    },
    {
        name: "LowPDF",
        href: "https://lowpdf.dhirajarya.in",
        line: "Client-side PDF compression. Nothing is uploaded, ever.",
    },
    {
        name: "Snapshot",
        line: "Turn screenshots into share-ready graphics with custom backgrounds and frames.",
        note: "Coming soon.",
    },
];
