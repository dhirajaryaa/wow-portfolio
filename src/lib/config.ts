import {
    FileText,
    FileArchive,
    type LucideIcon,
    Mail,
    Aperture,
    BatteryCharging,
    Camera,
    CodeXml,
    Cpu,
    FileStack,
    HardDrive,
    Headphones,
    Keyboard,
    MemoryStick,
    Monitor,
    MonitorSmartphone,
    Mouse,
    ShieldCheck,
    Smartphone,
    Terminal,
    Timer,
    Webcam,
} from "lucide-react";
import {
    SiAlacritty,
    SiGooglegemini,
    SiHyprland,
    SiLinux,
    SiReact,
    SiRedux,
    SiUblockorigin,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Status = "Ongoing" | "Completed" | "Archived" | "Discontinue";

export type Project = {
    slug: string;
    name: string;
    /** one-liner used on cards and previews */
    line: string;
    /** longer paragraph, only rendered when the card is unfolded */
    overview: string;
    banner?: string;
    video?: string;
    tags: string[];
    links: {
        live?: string;
        repo?: string;
    };
    status: Status;
    year: string;
    role: string;
    /** bullet lists shown inside the unfolded card */
    features: string[];
    challenges?: string[];
    learnings?: string[];
};

export type Tool = {
    slug: string;
    name: string;
    href?: string;
    line: string;
    /** what it actually does, shown on the tools page */
    detail: string;
    highlights: string[];
    status: "Live" | "Coming soon";
    icon: LucideIcon;
};

export type Gear = {
    name: string;
    note?: string;
    href?: string;
    icon: IconType | LucideIcon;
};

export type GearGroup = {
    id: string;
    title: string;
    hint: string;
    items: Gear[];
};

export type Book = {
    slug: string;
    title: string;
    author: string;
    line: string;
    status: "Reading" | "Read" | "Want to read";
};

export type Movie = {
    slug: string;
    title: string;
    year: number;
    line: string;
};

export const profile = {
    name: "Dhiraj Arya",
    role: "Self-taught Engineer",
    email: "dhirajarya.ptn@gmail.com",
    professionEmail: "dhirajkum4580@gmail.com",
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

export const statusStyles: Record<Status, string> = {
    Ongoing: "bg-blue-400 text-blue-700",
    Completed: "bg-green-400 text-green-700",
    Archived: "bg-gray-400 text-gray-600",
    Discontinue: "bg-amber-400 text-amber-700",
};

/* ------------------------------------------------------------------ */
/* site + seo                                                          */
/* ------------------------------------------------------------------ */

/**
 * Absolute origin, normalised (no trailing slash, protocol guaranteed).
 * Set NEXT_PUBLIC_SITE_URL in .env.local — used for canonical tags, sitemap,
 * robots Host, OpenGraph URLs and llm.txt so the origin is never hardcoded.
 */
const siteUrl = (() => {
    const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://dhirajarya.in";
    const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
    return withProtocol.replace(/\/+$/, "");
})();

export const site = {
    url: siteUrl,
    name: "Dhiraj Arya",
    title: "Dhiraj Arya – A self-taught developer",
    shortTitle: "Dhiraj Arya",
    role: "Self-taught Engineer",
    description:
        "Dhiraj Arya is a self-taught full-stack web developer specializing in Next.js, MERN stack, and modern SaaS applications. I build fast, scalable, and user-focused web products.",
    shortDescription:
        "A self-taught developer building modern web apps with Next.js, TypeScript and the MERN stack.",
    locale: "en_US",
    language: "en",
    keywords: [
        "Dhiraj Arya",
        "self-taught developer",
        "full stack developer",
        "Next.js developer",
        "MERN stack developer",
        "React developer",
        "TypeScript developer",
        "portfolio",
        "web developer India",
        "freelance web developer",
    ],
    twitter: "@dhirajarya01",
} as const;

export type Quote = { text: string; author: string };

/**
 * Social preview image. PNG only, on purpose: some scrapers and networks
 * still choke on webp, and a missing preview is worse than a heavier file.
 * Kept as an array because that is what Next.js `images` expects. Spread into
 * every page's own openGraph block, because a page-level openGraph replaces
 * the layout one wholesale instead of merging with it.
 */
export const ogImages = [
    {
        url: "/og/og.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: `${site.name} — ${site.role.toLowerCase()}`,
    },
] as const;

export const quotes = {
    home: {
        text: "The mind acts like an enemy for those who do not control it.",
        author: "Bhagavad Gita",
    },
};

export const legacyQuotes = {
    projects: {
        text: "All that we are is the result of what we have thought.",
        author: "Gautama Buddha",
    },
    gears: {
        text: "Dream, dream, dream. Dreams transform into thoughts, and thoughts result in action.",
        author: "Dr. A.P.J. Abdul Kalam",
    },
    books: {
        text: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela",
    },
    movies: {
        text: "Success comes to those who dare and act.",
        author: "Ratan Tata",
    },
    tools: {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker",
    },
    setup: {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    contact: {
        text: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
} satisfies Record<string, Quote>;

export const projects: Project[] = [
    {
        slug: "blogdrop",
        name: "BlogDrop",
        line: "Engineering blog aggregator that fetches and reads 100+ top engineering blogs, then summarises them.",
        overview:
            "The internet writes the same twelve posts every week and I was tired of opening eleven tabs to catch up. BlogDrop pulls articles from 100+ engineering blogs, cleans the markup, and hands the text to Gemini for a summary. It is the project I actually open every morning, and it is still the one I keep extending.",
        banner: "/projects/blogdrop/banner.webp",
        video: "/projects/blogdrop/demo.mp4",

        tags: [
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Drizzle",
            "Tailwind",
            "Shadcn UI",
            "Better Auth",
            "Inngest",
            "Gemini AI",
            "Zustand",
            "React Query",
            "Cheerio",
        ],

        links: {
            live: "https://blogdrop.in",
            repo: "https://github.com/dhirajaryaa/blogdrop",
        },

        status: "Ongoing",
        year: "2025 — now",
        role: "Solo — design, backend, frontend",
        features: [
            "Aggregates 100+ engineering blogs into one chronological feed",
            "Gemini-generated summaries so you can skim before you read",
            "Cheerio-based article extraction that strips trackers and boilerplate",
            "Inngest background jobs keep ingestion off the request path",
            "Drizzle ORM over PostgreSQL with full-text search and tagging",
            "Better Auth accounts with saved topics, bookmarks and read state",
            "Zustand for local feed state, React Query for server cache",
        ],
        challenges: [
            "Every blog ships a different, slightly broken HTML shape",
            "Be polite to 100+ origins — fetch budgets, caching and conditional requests",
            "Deduplicating syndicated posts across dozens of feeds",
        ],
        learnings: [
            "Long-running ingestion belongs in a job queue, not a request handler",
            "Structured extraction beats asking a model to parse raw HTML",
        ],
    },

    {
        slug: "querymate",
        name: "QueryMate",
        line: "Ask questions in plain English and turn them into optimized database queries across PostgreSQL, MySQL, and MongoDB.",
        overview:
            "Most people do not have a SQL problem, they have a question. QueryMate lets you type it the way you would ask a colleague, pulls in the schema for context, and streams back a query you can actually run. It supports PostgreSQL, MySQL, SQLite and MongoDB, which makes it a decent learning tool as well as a work one.",
        banner: "/projects/querymate/banner.webp",
        video: "/projects/querymate/demo.mp4",

        tags: [
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Drizzle",
            "Tailwind",
            "Shadcn UI",
            "Groq",
            "Vercel AI SDK",
        ],

        links: {
            live: "https://querymate.dhirajarya.in",
            repo: "https://github.com/dhirajaryaa/querymate",
        },

        status: "Completed",
        year: "2025",
        role: "Solo — design, backend, frontend",
        features: [
            "Natural language to query across PostgreSQL, MySQL, SQLite and MongoDB",
            "Schema-aware context so the generated SQL matches your actual tables",
            "Streaming responses through the Vercel AI SDK on Groq for fast output",
            "Copy-ready output with the query kept readable and commented",
            "Session history so you can iterate on a question without losing it",
        ],
        challenges: [
            "A wrong column name makes a perfect query useless — schema context is not optional",
            "Dialects diverge enough that one prompt does not fit all four databases",
        ],
        learnings: [
            "Fewer, faster tokens beat a bigger model for structured code generation",
        ],
    },

    {
        slug: "smartform",
        name: "SmartForm",
        line: "Chrome extension that fills long application forms with contextual AI.",
        overview:
            "Job applications want the same information in eight different boxes, and every one of them has its own idea of the format. SmartForm reads the form it is on, works out what each field is really asking for, and fills it in with Gemini — so you paste your details once instead of forty times.",
        video: "/projects/smartform/demo.mp4",

        tags: [
            "TypeScript",
            "React",
            "WXT",
            "Chrome Extension",
            "Tailwind",
            "Gemini AI",
            "Zod",
        ],

        links: {
            live: "https://www.youtube.com/watch?v=Wan9QWfXF-Y",
            repo: "https://github.com/dhirajaryaa/smartform",
        },

        status: "Completed",
        year: "2025",
        role: "Solo — design, extension, AI layer",
        features: [
            "Automatic detection and classification of form fields on any page",
            "Context-aware Gemini generation so answers fit the field, not the label",
            "One saved profile reused across every application you fill",
            "Built on WXT with a React popup and content script",
            "Zod-validated responses before anything is written into the DOM",
        ],
        challenges: [
            "Every site ships a different, hostile DOM — no shared contract to code against",
            "Filling a form the user did not ask you to fill is a trust problem, not a technical one",
        ],
        learnings: [
            "Browser extensions are the only place the problem lives, and the only place you can fix it",
        ],
    },

    {
        slug: "quickformx",
        name: "QuickFormX",
        line: "Drag-and-drop form builder with custom components, schema validation and API integrations.",
        overview:
            "A full MERN form builder: drag fields onto a canvas, wire them to a backend, and let Zod enforce the shape. The interesting part is custom components — you can define a field once and reuse it everywhere, which is what makes it usable for real internal tools instead of demos.",
        tags: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind",
            "Gemini AI",
            "Zod",
        ],

        links: {
            live: "https://quickformx.dhirajarya.in",
            repo: "https://github.com/dhirajaryaa/quickFormx",
        },

        status: "Completed",
        year: "2024",
        role: "Solo — design, backend, frontend",
        features: [
            "Drag-and-drop canvas for composing forms without touching code",
            "Custom component system so a field is defined once and reused",
            "Zod schema generation and validation shared between client and server",
            "REST API integrations to push submissions anywhere",
            "Gemini-assisted field suggestions while you are building",
        ],
        challenges: [
            "Keeping the drag state, the rendered form and the validation schema from drifting apart",
        ],
        learnings: [
            "One schema should drive the form, the API and the database — otherwise they lie to each other",
        ],
    },

    {
        slug: "resucraft",
        name: "ResuCraft",
        line: "AI-powered resume builder with smart content suggestions.",
        overview:
            "ResuCraft helps you build a professional resume with AI-suggested content, customisable templates and live preview. I stopped working on it once the focus shifted to larger SaaS products, but the template and PDF pipeline were the most useful thing I learned that year.",
        video: "/projects/resucraft/demo.mp4",

        tags: ["React", "Firebase", "React Hook Form", "Tailwind"],

        links: {
            live: "https://ai-resume-builder-dhirajaryaa.vercel.app/",
            repo: "https://github.com/dhirajaryaa/AI-Resume-Builder",
        },

        status: "Discontinue",
        year: "2024",
        role: "Frontend Developer — solo",
        features: [
            "Resume templates with live preview as you type",
            "AI-suggested content for every section",
            "One-click PDF export",
        ],
        challenges: [
            "Template rendering across a handful of fixed layouts",
            "Getting PDF export to reproduce the on-screen design exactly",
        ],
        learnings: [
            "Firebase, React Hook Form, and how to build a template system",
        ],
    },
];

export const tools: Tool[] = [
    {
        slug: "temp-mail",
        name: "Temp Mail",
        href: "https://tempmail.dhirajarya.in",
        line: "Disposable temporary email, with a live inbox and no sign-up.",
        detail:
            "Sign-up walls everywhere, one disposable inbox fixes all of them. Generate an address, watch the inbox update in real time, and never hand over a real email again.",
        highlights: [
            "Instant address generation, no account required",
            "Real-time inbox viewer over a live connection",
            "Perfect for trials, newsletters and one-off sign-ups",
        ],
        status: "Live",
        icon: Mail,
    },
    {
        slug: "compressly",
        name: "Compressly",
        href: "https://compressly.dhirajarya.in",
        line: "Drag-and-drop image and file compression that keeps quality high.",
        detail:
            "Most compressors make you choose between a small file and an image that still looks right. Compressly does not — drop the file, pick a target, and get something you can actually ship.",
        highlights: [
            "Drag-and-drop, no upload dialog",
            "PNG, JPG, WebP and PDF in one place",
            "Quality stays high at meaningful compression ratios",
        ],
        status: "Live",
        icon: FileArchive,
    },
    {
        slug: "lowpdf",
        name: "LowPDF",
        href: "https://lowpdf.dhirajarya.in",
        line: "Client-side PDF compression. Nothing is uploaded, ever.",
        detail:
            "A PDF is often the most sensitive thing on your desktop, so this one never leaves it. The whole pipeline runs in your browser — no servers, no upload, no log of what you compressed.",
        highlights: [
            "100% client-side — the file never leaves the machine",
            "No upload step and no server storage at all",
            "Good enough compression for sharing and email limits",
        ],
        status: "Live",
        icon: FileText,
    },
    {
        slug: "pdfany",
        name: "PDFAny",
        href: "https://pdfany.dhirajarya.in",
        line: "Every PDF tool you need — merge, split, rotate, sign, convert.",
        detail:
            "A PDF tool that stayed private. Sixteen operations covering organise, annotate and convert, and every one of them runs in your browser — so the document never touches a server, and it still works on a dead connection.",
        highlights: [
            "16 tools across organise, annotate and convert",
            "100% in-browser — nothing is ever uploaded",
            "Works offline, even on a weak connection",
        ],
        status: "Live",
        icon: FileStack,
    },
    {
        slug: "snapshot",
        name: "Snapshot",
        line: "Turn screenshots into share-ready graphics with custom backgrounds and frames.",
        detail:
            "A screenshot is not a post. Snapshot takes the capture and composes it into something worth publishing — custom backgrounds, frames, shadows, all processed locally in the browser.",
        highlights: [
            "Custom backgrounds, frames and drop shadows",
            "Client-side compositing, so captures stay private",
            "One-click export in the size you need",
        ],
        status: "Live",
        icon: Aperture,
    },
];

export const gearGroups: GearGroup[] = [
    {
        id: "pc",
        title: "PC",
        hint: "the machine most of this gets built on.",
        items: [
            { name: "CPU", note: "Intel Core i5-3470", icon: Cpu },
            { name: "Memory", note: "16GB RAM", icon: MemoryStick },
            { name: "Storage", note: "256GB SSD", icon: HardDrive },
            { name: "Primary Monitor", note: "1600×900", icon: Monitor },
            { name: "Secondary Monitor", note: "1400×1050", icon: MonitorSmartphone },
            { name: "UPS", note: "Frontech Mars725", icon: BatteryCharging },
        ],
    },
    {
        id: "gadgets",
        title: "Gadgets",
        hint: "the things on the desk and in the pocket.",
        items: [
            { name: "Punta Rainbow Keyboard", icon: Keyboard },
            { name: "Dell MS116-BK Wired Mouse", icon: Mouse },
            { name: "Lapcare Webcam", icon: Webcam },
            { name: "Logitech Headphones", icon: Headphones },
            { name: "Vivo V19", note: "128GB", icon: Smartphone },
        ],
    },
    {
        id: "environment",
        title: "Environment",
        hint: "the software side of the same desk.",
        items: [
            { name: "Arch Linux", note: "rolling release, no bloat", icon: SiLinux },
            { name: "Hyprland", note: "Wayland compositor, tiled & animated", icon: SiHyprland },
            { name: "VSCode", note: "Vim emulation, custom dark theme", icon: CodeXml },
            { name: "Kitty", note: "primary terminal — GPU accelerated", icon: Terminal },
            { name: "Alacritty", note: "backup terminal, fast to start", icon: SiAlacritty },
        ],
    },
    {
        id: "extensions",
        title: "Web Extensions",
        hint: "small tools that remove small annoyances.",
        items: [
            {
                name: "SmartForm",
                note: "AI form filler",
                icon: SiGooglegemini,
                href: "https://github.com/dhirajaryaa/smartform",
            },
            { name: "AdGuard AdBlocker", icon: ShieldCheck },
            { name: "uBlock Origin", icon: SiUblockorigin },
            { name: "React Developer Tools", icon: SiReact },
            { name: "Redux DevTools", icon: SiRedux },
            { name: "Goal Countdown", note: "owned", icon: Timer },
            { name: "Screely", icon: Camera },
        ],
    },
];

export type SetupGroup = {
    id: string;
    title: string;
    items: { key: string; value: string }[];
};

export const setupGroups: SetupGroup[] = [
    {
        id: "editor",
        title: "Editor",
        items: [
            { key: "Font Family", value: "'Victor Mono', monospace" },
            { key: "Font Size", value: "16" },
            { key: "Line Height", value: "24" },
            { key: "Font Weight", value: "500" },
            { key: "Tab Size", value: "4" },
            { key: "Font Ligatures", value: "Enabled" },
            { key: "Line Numbers", value: "relative" },
            { key: "Format on Save", value: "Enabled" },
            { key: "Default Formatter", value: "esbenp.prettier-vscode" },
        ],
    },
    {
        id: "theme",
        title: "Theme & Icons",
        items: [
            { key: "Color Theme", value: "Min Dark" },
            { key: "Icon Theme", value: "material-icon-theme" },
            { key: "Icon Pack", value: "react" },
        ],
    },
    {
        id: "terminal",
        title: "Terminal",
        items: [
            { key: "Font Family", value: "JetBrainsMono Nerd Font Mono" },
            { key: "Font Size", value: "16" },
            { key: "Bold Font Weight", value: "bold" },
            { key: "Initial Hint", value: "Disabled" },
        ],
    },
    {
        id: "workbench",
        title: "Workbench",
        items: [
            { key: "Side Bar Location", value: "right" },
            { key: "Startup Editor", value: "none" },
            { key: "Menu Bar Visibility", value: "compact" },
            { key: "Chat Session Orientation", value: "stacked" },
        ],
    },
    {
        id: "git",
        title: "Git",
        items: [
            { key: "Auto Fetch", value: "Enabled" },
            { key: "Confirm Sync", value: "Disabled" },
            { key: "Open in Parent Folders", value: "never" },
        ],
    },
    {
        id: "extensions",
        title: "Extensions",
        items: [
            { key: "GitHub Copilot", value: "5 keybindings" },
            { key: "Copilot Next Edit", value: "Disabled" },
            { key: "CSpell", value: "7 dictionaries" },
            { key: "Code Runner", value: "Enabled" },
            { key: "Claude Code Location", value: "panel" },
        ],
    },
];

export type PdfCategory = {
    id: string;
    title: string;
    tools: { name: string; line: string }[];
};

/** the real operation list served by https://pdfany.dhirajarya.in */
export const pdfanyTools: PdfCategory[] = [
    {
        id: "organize",
        title: "Organize",
        tools: [
            { name: "Merge PDF", line: "Combine PDFs into one file" },
            { name: "Split PDF", line: "Break a PDF into separate files" },
            { name: "Extract Pages", line: "Pull certain pages into a new PDF" },
            { name: "Delete Pages", line: "Remove unwanted pages instantly" },
            { name: "Reorder Pages", line: "Drag pages into the right order" },
            { name: "Duplicate Pages", line: "Copy pages within a document" },
            { name: "Rotate Pages", line: "Fix page orientation" },
            { name: "Reverse PDF", line: "Flip the entire page order" },
            { name: "Insert Pages", line: "Add blank or existing pages" },
            {
                name: "Page Range Export",
                line: "Export a specific page range",
            },
        ],
    },
    {
        id: "annotate",
        title: "Annotate",
        tools: [
            { name: "Sign PDF", line: "Draw and place your signature" },
            { name: "Edit PDF", line: "Add text, drawings & highlights" },
            { name: "Add Page Numbers", line: "Number every page in seconds" },
            { name: "Watermark PDF", line: "Stamp text across every page" },
        ],
    },
    {
        id: "convert",
        title: "Convert",
        tools: [
            {
                name: "Images to PDF",
                line: "Turn JPG, PNG and WebP into a PDF",
            },
            { name: "PDF to Images", line: "Export PDF pages as JPG images" },
        ],
    },
];

export const books: Book[] = [
    {
        slug: "ikigai",
        title: "Ikigai",
        author: "Héctor García & Francesc Miralles",
        line: "The Japanese secret to a long and happy life. A journey into the Okinawan philosophy of finding purpose and joy in everyday living.",
        status: "Reading",
    },
];

export const movies: Movie[] = [
    {
        slug: "interstellar",
        title: "Interstellar",
        year: 2014,
        line: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    },
    {
        slug: "the-social-network",
        title: "The Social Network",
        year: 2010,
        line: "The story of the founding of Facebook and the legal battles that followed.",
    },
    {
        slug: "lifehack",
        title: "LifeHack",
        year: 2025,
        line: "Four teenagers attempt a multi-million-dollar Bitcoin heist from their bedrooms, only to spiral into the darkest corners of the internet.",
    },
];

