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
    bannerBg?:string;
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

export const statusStyles: Record<Status, string> = {
    Ongoing: "bg-blue-400 text-blue-700",
    Completed: "bg-green-400 text-green-700",
    Archived: "bg-gray-400 text-gray-600",
    Discontinue: "bg-amber-400 text-amber-700",
};

// site metadata 
const siteUrl = (() => {
    const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://dhirajarya.in";
    const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
    return withProtocol.replace(/\/+$/, "");
})();

export const site = {
    url: siteUrl,
    name: "Dhiraj Arya",
    title: "Dhiraj Arya – A self-taught engineer",
    shortTitle: "Dhiraj Arya",
    role: "Self-taught Engineer",
    description:
        "Dhiraj Arya is a self-taught full-stack web engineer specializing in Next.js, MERN stack, and modern SaaS applications. I build fast, scalable, and user-focused web products.",
    shortDescription:
        "A self-taught engineer building modern web apps with Next.js, TypeScript and the MERN stack.",
    locale: "en_US",
    language: "en",
    keywords: [
        "Dhiraj Arya",
        "self-taught engineer",
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

export const projects: Project[] = [
  {
    slug: "blogdrop",
    name: "BlogDrop v1.2",
    line: "Engineering blog aggregator that collects technical articles, extracts useful metadata with AI, and brings them into one feed.",
    overview:
      "I built BlogDrop to make keeping up with engineering blogs less repetitive. It collects articles from RSS sources, extracts and cleans article content, processes metadata with AI, and presents everything in a single reading-focused feed.",

    banner: "/projects/blogdrop/banner.webp",
    video: "/projects/blogdrop/demo.mp4",
    bannerBg: "to-rose-500",
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

    status: "Completed",
    year: "June 2026 — Oct 2026",
    role: "Solo — design, frontend, backend",

    features: [
      "Collects engineering articles from RSS sources into one feed",
      "AI-generated summaries and article metadata",
      "Article extraction and cleanup before AI processing",
      "Inngest background jobs for feed ingestion and AI processing",
      "PostgreSQL database with Drizzle ORM",
      "Authentication, saved articles and reading state",
      "Search, tags and categories for organizing articles",
    ],

    challenges: [
      "Handling different HTML structures across engineering blogs",
      "Keeping feed ingestion reliable without blocking user requests",
      "Removing duplicate articles from multiple sources",
    ],

    learnings: [
      "Long-running ingestion work belongs in background jobs rather than request handlers",
      "Cleaning and structuring content before sending it to an AI model produces more reliable metadata",
    ],
  },

  {
    slug: "querymate",
    name: "QueryMate",
    line: "AI database assistant that lets you ask questions in plain English and get answers from your database.",

overview:
  "QueryMate lets users connect a database and ask questions in natural language. It uses the database schema to generate SQL, runs safe read-only queries, and shows the results directly in the chat.",

features: [
  "Ask database questions using natural language",
  "PostgreSQL and MySQL database connections",
  "Database schema context for accurate queries",
  "Safe read-only query execution",
  "SQL generation and streaming AI responses",
  "Chat history and multiple database connections",
],
    banner: "/projects/querymate/banner.webp",
    video: "/projects/querymate/demo.mp4",
      bannerBg: "to-green-500",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle",
      "Tailwind",
      "Shadcn UI",
      "Groq",
      "Vercel AI SDK",
      "Better Auth",
    ],

    links: {
      live: "https://querymate.dhirajarya.in",
      repo: "https://github.com/dhirajaryaa/querymate",
    },

    status: "Completed",
    year: "Feb 2026 — June 2026",

    role: "Solo — design, frontend, backend",

    challenges: [
      "Generated SQL is only useful when it matches the actual database schema",
      "Supporting different SQL dialects requires database-specific handling",
      "Keeping AI-generated queries restricted to safe, read-only operations",
    ],

    learnings: [
      "Schema context is essential for reliable database query generation",
      "Structured constraints are important when letting an AI model generate executable code",
    ],
  },

  {
    slug: "smartform",
    name: "SmartForm",
    line: "AI-powered Chrome extension that detects form fields and fills them with context-aware generated data.",
    overview:
      "SmartForm is a browser extension built to reduce repetitive form filling. It detects form fields, understands their context, and uses an AI provider to generate appropriate values while keeping the user in control of the final submission.",

    video: "/projects/smartform/demo.mp4",

    tags: [
      "TypeScript",
      "React",
      "WXT",
      "Chrome Extension",
      "Tailwind",
      "Gemini AI",
      "Groq",
    ],

    links: {
      live: "https://www.youtube.com/watch?v=Wan9QWfXF-Y",
      repo: "https://github.com/dhirajaryaa/smartform",
    },

    status: "Completed",
    year: "Jan 2026",
    role: "Solo — design, extension, AI layer",

    features: [
      "One-click form filling",
      "Automatic detection of visible input fields",
      "Support for input, textarea and select elements",
      "Context-aware field matching",
      "Groq and Google Gemini AI providers",
      "No automatic form submission",
      "Local storage for settings and API keys",
    ],

    challenges: [
      "Different websites expose form fields with different structures and labels",
      "Generated values need to match the context of each field",
      "Keeping user data and API credentials local to the browser",
    ],

    learnings: [
      "Browser extensions require careful handling of arbitrary page structures",
      "Giving users control over AI-generated actions is important for extension UX",
    ],
  },

  {
    slug: "quickformx",
    name: "QuickFormX",
    line: "Developer-friendly form builder and submission dashboard.",
    overview:
      "QuickFormX is an early SaaS form-builder MVP focused on creating forms and managing submissions. The project helped me work with client-side state, form validation, API communication and data fetching.",

    tags: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Zustand",
      "Tailwind",
      "React Hook Form",
      "Zod",
    ],

    links: {
      live: "https://quickformx.dhirajarya.in",
      repo: "https://github.com/dhirajaryaa/quickFormx",
    },

    status: "Completed",
    year: "Dec 2025",
    role: "Solo — frontend",

    features: [
      "Form builder interface",
      "Submission dashboard",
      "Form validation with React Hook Form and Zod",
      "Client-side state management with Zustand",
      "Server data fetching and caching with TanStack Query",
      "REST API integration",
    ],

    challenges: [
      "Keeping form state and validation consistent across the builder",
      "Managing server state separately from local UI state",
    ],

    learnings: [
      "TanStack Query and Zustand solve different state-management problems",
      "A clear separation between form state, UI state and server state makes the frontend easier to maintain",
    ],
  },

  {
    slug: "resucraft",
    name: "ResuCraft",
    line: "AI-powered resume builder with customizable templates and content suggestions.",
    overview:
      "ResuCraft is an earlier resume-builder project where I experimented with AI-assisted content generation, customizable resume templates, authentication and persistent user data.",

    video: "/projects/resucraft/demo.mp4",

    tags: [
      "React",
      "Firebase",
      "React Hook Form",
      "Tailwind",
      "shadcn/ui",
    ],

    links: {
      live: "https://ai-resume-builder-dhirajaryaa.vercel.app/",
      repo: "https://github.com/dhirajaryaa/AI-Resume-Builder",
    },

    status: "Discontinue",
    year: "Sep 2025",
    role: "Frontend Developer — solo",

    features: [
      "Customizable resume templates",
      "AI-assisted content suggestions",
      "Live resume editing",
      "Firebase authentication",
      "Firestore data storage",
      "Resume download and sharing",
    ],

    challenges: [
      "Keeping different resume templates consistent with the same data structure",
      "Building an editing experience that updates the resume preview in real time",
    ],

    learnings: [
      "Firebase authentication and Firestore",
      "Building reusable resume templates with React",
      "Managing complex form state in a document-style editor",
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
        href: "https://snapshot.dhirajarya.in",
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
                note: "owned : AI form filler",
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
    }
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

