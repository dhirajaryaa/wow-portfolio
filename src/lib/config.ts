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

export const intro = [
    "I'm self-taught, which mostly means I learn by building the thing, breaking it, and then reading somebody else's code until it makes sense. My degree so far is from YouTube University. The tuition is free and the syllabus changes every week.",
    "Lately that has meant blog aggregators, database tooling, form builders, and a handful of small utilities I built because I needed them and couldn't find them anywhere.",
    "I work on Arch Linux with Hyprland and do most of my actual thinking in VSCode with Vim keys. I'd rather ship something small this week than something big eventually.",
];

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

export const stack = [
    "Interfaces are [[react]] and [[next]], styled with [[tailwind]] and almost always written in [[typescript]]. [[shadcn]] for the few components that need one, [[zustand]] and [[reactquery]] when state gets interesting.",
    "Data lives in [[postgresql]], with [[drizzle]] writing the queries and [[mongodb]] or [[firebase]] when they genuinely fit better. [[node]] and [[express]] run the server, [[auth]] handles accounts, [[inngest]] handles everything that would otherwise block a request.",
    "[[vercel]] hosts it. [[docker]] and [[bun]] keep local work reproducible, [[actions]] keeps me honest, and [[git]] is the only tool I have never once argued with.",
];

export const links = [
    {
        label: "Email",
        value: profile.email,
        href: contact.emailHref,
    },
    {
        label: "YouTube",
        value: "@dhirajaryaa",
        href: socials.youtube,
    },
    {
        label: "Instagram",
        value: "@dhirajarya01",
        href: socials.instagram,
    },
] as const;

export const gallery: GalleryEntry[] = [
    {
        name: "BlogDrop",
        caption: "blogdrop.in",
        href: "https://blogdrop.in",
        description:
            "The aggregator I keep coming back to. Fetching, reading and summarising 100+ engineering blogs so I only have to read one page.",
        note: "Ongoing.",
    },
    {
        name: "QueryMate",
        caption: "querymate.dhirajarya.in",
        href: "https://querymate.dhirajarya.in",
        description:
            "Ask a question in English, get back SQL that actually runs. Built for the moment you know what you want but not the syntax.",
    },
    {
        name: "SmartForm",
        caption: "github.com/dhirajaryaa/smartform",
        href: "https://github.com/dhirajaryaa/smartform",
        description:
            "A Chrome extension that fills long application forms for you, one contextual answer at a time.",
    },
    {
        name: "QuickFormX",
        caption: "quickformx.dhirajarya.in",
        href: "https://quickformx.dhirajarya.in",
        description:
            "Drag-and-drop form builder with custom components, schema validation and API integrations.",
    },
    {
        name: "Temp Mail",
        caption: "tempmail.dhirajarya.in",
        href: "https://tempmail.dhirajarya.in",
        description:
            "A throwaway inbox with a live view of the mail, for the sign-ups I never wanted to keep.",
    },
    {
        name: "Compressly",
        caption: "compressly.dhirajarya.in",
        href: "https://compressly.dhirajarya.in",
        description:
            "Shrink images and files without making them look like they went through a fax machine. PNG, JPG, WebP, PDF.",
    },
    {
        name: "LowPDF",
        caption: "lowpdf.dhirajarya.in",
        href: "https://lowpdf.dhirajarya.in",
        description:
            "PDF compression that runs entirely in the browser, so the file never leaves the machine.",
    },
    {
        name: "Snapshot",
        caption: "in progress",
        description:
            "Screenshot beautifier: custom backgrounds, frames and shadows, all processed client-side.",
        note: "Coming soon.",
    },
];
