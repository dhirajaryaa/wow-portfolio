type Status = "Ongoing" | "Completed" | "Archived";

export type Project = {
    name: string;
    line: string;
    banner: string;
    video?: string;
    tags: string[];
    links: {
        live?: string;
        repo?: string;
    };
    status: Status;
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

export const statusStyles: Record<Status, string> = {
    Ongoing: "bg-blue-400 text-blue-700",
    Completed: "bg-green-400 text-green-700",
    Archived: "bg-gray-400 text-gray-600",
};

export const projects: Project[] = [
    {
        name: "BlogDrop",
        line: "Engineering blog aggregator that fetches and reads 100+ top engineering blogs, then summarises them.",
        banner: "/projects/blogdrop/banner.webp",
        video: "/projects/blogdrop/demo.mp4",

        tags: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle"],

        links: {
            live: "https://blogdrop.in",
            repo: "https://github.com/dhirajaryaa/blogdrop",
        },

        status: "Ongoing",
    },

    {
        name: "QueryMate",
        line: "Natural-language database querying. Plain English in, optimized SQL out.",
        banner: "/projects/querymate/banner.webp",
        video: "/projects/querymate/demo.mp4",

        tags: ["Next.js", "TypeScript", "Drizzle", "Tailwind"],

        links: {
            live: "https://querymate.dhirajarya.in",
            repo: "https://github.com/dhirajaryaa/querymate",
        },

        status: "Completed",
    },

    {
        name: "SmartForm",
        line: "Chrome extension that fills long application forms with contextual AI.",

        banner: "/projects/smartform/banner.webp",
        video: "/projects/smartform/demo.mp4",

        tags: ["TypeScript", "React", "Chrome Extension", "Tailwind"],

        links: {
            repo: "https://github.com/dhirajaryaa/smartform",
        },

        status: "Completed",
    },

    {
        name: "QuickFormX",
        line: "Drag-and-drop form builder with custom components, schema validation and API integrations.",

        banner: "/projects/quickformx/banner.webp",
        video: "/projects/quickformx/demo.mp4",

        tags: ["React", "MongoDB", "Node.js", "Tailwind"],

        links: {
            live: "https://quickformx.dhirajarya.in",
            repo: "https://github.com/dhirajaryaa/quickFormx",
        },

        status: "Completed",
    },
];

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
