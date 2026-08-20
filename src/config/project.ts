export type ProjectStatus =
    | "completed"
    | "ongoing"
    | "started"
    | "discontinue";

export type Project = {
    // Basic
    name: string;
    slug: string;
    image: string;

    shortDescription: string;
    description: string;

    // Links
    link: string;
    repoLink: string;
    demoVideo?: string;

    // Metadata
    status: ProjectStatus;
    year: string;
    duration: string;
    role: string;
    teamSize: string;

    // Tech Stack
    technologies: string[];

    // Project Details
    features: string[];
    problemsSolved: string[];
    challenges: string[];
    learning: string[];
    screenshots: string[];

    // Metrics
    metrics?: {
        users?: string;
        sources?: string;
        articles?: string;
        formsFilled?: string;
        databases?: string;
        resumes?: string;
    };

    roadmap?: string[];
};

export const projects: Project[] = [
    {
        name: "BlogDrop",
        slug: "blogdrop",
        image: "/projects/blogdrop/home.png",

        shortDescription:
            "AI-powered engineering blog aggregator for discovering high-quality technical content.",

        description:
            "BlogDrop is an AI-powered engineering blog platform that aggregates technical articles from official engineering blogs, open-source projects, and trusted publications. It automatically fetches articles from 100+ sources, extracts clean readable content, generates AI summaries, key takeaways, tags, filters promotional posts, and provides a personalized reading experience for developers.",

        link: "https://blogdrop.in",
        repoLink: "https://github.com/dhirajaryaa/blogdrop",

        status: "ongoing",
        year: "2026",
        duration: "1+ Months",
        role: "Full Stack Developer",
        teamSize: "Solo",

        technologies: [
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Drizzle ORM",
            "Gemini AI",
            "Inngest",
            "Better Auth",
            "React Query",
            "Zustand",
            "TailwindCSS",
            "Shadcn UI",
            "Cheerio",
            "Readability.js",
            "RSS",
            "Vercel",
        ],

        features: [
            "Authentication",
            "AI-powered summaries",
            "Bookmarks",
            "Client-side search",
            "Categories & Tags",
            "Personalized recommendations",
            "Responsive UI",
            "SEO optimized",
            "RSS aggregation",
            "Article reader",
        ],

        problemsSolved: [
            "Collects engineering blogs into one platform.",
            "Reduces time spent searching quality articles.",
            "Filters promotional content.",
            "Provides AI summaries before reading.",
            "Helps developers discover relevant content.",
        ],

        challenges: [
            "Handling inconsistent RSS feeds.",
            "Cleaning article content from different websites.",
            "Generating accurate AI metadata.",
            "Building recommendations without expensive embeddings.",
            "Managing large-scale background jobs.",
        ],

        learning: [
            "Background jobs with Inngest.",
            "AI-powered content processing.",
            "Recommendation systems.",
            "PostgreSQL optimization.",
            "Content extraction techniques.",
        ],

        screenshots: [
            "/projects/blogdrop/home.png",
            "/projects/blogdrop/article.png",
            "/projects/blogdrop/saved.png",
            "/projects/blogdrop/profile.png",
        ],

        metrics: {
            sources: "100+",
            articles: "2500+",
        },

        roadmap: [
            "Daily Digest",
            "Collections",
            "Reading History",
            "Chrome Extension",
            "Team Workspace",
        ],
    },

    {
        name: "QueryMate",
        slug: "querymate",
        image: "/projects/querymate/home.png",

        shortDescription:
            "AI-powered database assistant for querying SQL databases using natural language.",

        description:
            "QueryMate enables developers and analysts to interact with PostgreSQL, MySQL, SQLite, and MongoDB using natural language. It generates optimized SQL queries, understands database schemas, manages secure database connections, and helps users explore data without writing complex SQL manually.",

        link: "https://querymate.dhirajarya.in",
        repoLink: "https://github.com/dhirajaryaa/querymate",

        status: "completed",
        year: "2026",
        duration: "2 Months",
        role: "Full Stack Developer",
        teamSize: "Solo",

        technologies: [
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Drizzle ORM",
            "Groq AI",
            "Vercel AI SDK",
            "TailwindCSS",
            "Shadcn UI",
        ],

        features: [
            "Natural language to SQL",
            "Database connection manager",
            "Schema-aware AI",
            "SQL validation",
            "Multi-database support",
            "Query history",
            "Responsive dashboard",
        ],

        problemsSolved: [
            "Removes SQL learning barrier.",
            "Speeds up data exploration.",
            "Generates optimized SQL automatically.",
            "Simplifies database management.",
        ],

        challenges: [
            "Prompt engineering for SQL generation.",
            "Supporting multiple database engines.",
            "Preventing invalid AI-generated queries.",
            "Managing secure connections.",
        ],

        learning: [
            "Database architecture.",
            "AI prompt engineering.",
            "Drizzle ORM.",
            "SQL optimization.",
        ],

        screenshots: [
            "/projects/querymate/home.png",
            "/projects/querymate/edit.png",
            "/projects/querymate/chat.png",
            "/projects/querymate/connection.png",
        ],

        metrics: {
            databases: "4+",
        },

        roadmap: [
            "Charts & Visualization",
            "Team Collaboration",
            "Export Reports",
            "Saved Queries",
        ],
    },

    {
        name: "SmartForm",
        slug: "smartform",
        image: "/projects/smartform/home.png",

        shortDescription:
            "AI-powered Chrome extension for automatically filling online forms.",

        description:
            "SmartForm is a Chrome extension that intelligently detects form fields and automatically fills them with context-aware values using AI. It helps users complete registrations, job applications, surveys, and repetitive online forms much faster.",

        link: "https://www.youtube.com/watch?v=Wan9QWfXF-Y",
        repoLink: "https://github.com/dhirajaryaa/smartform",

        status: "completed",
        year: "2025",
        duration: "1 Month",
        role: "Full Stack Developer",
        teamSize: "Solo",

        technologies: [
            "TypeScript",
            "React",
            "Chrome Extension",
            "WXT",
            "Gemini AI",
            "TailwindCSS",
            "Zod",
        ],

        features: [
            "One-click form filling",
            "AI-generated values",
            "Google Forms support",
            "Profile management",
            "Modern extension UI",
        ],

        problemsSolved: [
            "Removes repetitive typing.",
            "Speeds up online registrations.",
            "Improves productivity.",
        ],

        challenges: [
            "Detecting different form structures.",
            "Supporting dynamic web pages.",
            "Content script communication.",
        ],

        learning: [
            "Chrome Extension APIs.",
            "DOM manipulation.",
            "Browser messaging.",
            "Prompt engineering.",
        ],

        screenshots: [
            "/projects/smartform/popup.png",
            "/projects/smartform/fill.png",
        ],

        metrics: {
            formsFilled: "Unlimited",
        },

        roadmap: [
            "Multiple Profiles",
            "Cloud Sync",
            "Enterprise Version",
        ],
    },

    {
        name: "QuickFormX",
        slug: "quickformx",
        image: "/projects/quickformx.jpg",

        shortDescription:
            "Drag-and-drop form builder with validation and API integration.",

        description:
            "QuickFormX is a modern drag-and-drop form builder that allows users to build responsive forms quickly. It supports reusable components, validation, API integration, and a clean dashboard for managing forms.",

        link: "https://quickformx.dhirajarya.in/login",
        repoLink: "https://github.com/dhirajaryaa/quickFormx",

        status: "completed",
        year: "2025",
        duration: "2 Months",
        role: "Full Stack Developer",
        teamSize: "Solo",

        technologies: [
            "MERN",
            "React DnD",
            "TailwindCSS",
            "Gemini AI",
            "Zod",
        ],

        features: [
            "Drag & Drop Builder",
            "Custom Components",
            "Validation",
            "API Integration",
            "Dashboard",
            "Responsive Design",
        ],

        problemsSolved: [
            "Build forms without coding.",
            "Reusable form templates.",
            "Fast deployment.",
        ],

        challenges: [
            "Drag-and-drop interactions.",
            "Dynamic form rendering.",
            "Validation engine.",
        ],

        learning: [
            "React DnD.",
            "Complex state management.",
            "Dynamic forms.",
        ],

        screenshots: [
        ],

        roadmap: [
            "Team Collaboration",
            "Analytics",
            "Themes",
        ],
    },

    {
        name: "ResuCraft",
        slug: "resucraft",
        image: "/projects/resucraft.jpg",

        shortDescription:
            "AI-powered resume builder with smart content suggestions.",

        description:
            "ResuCraft helps users create professional resumes using AI-powered content suggestions, customizable templates, and real-time editing. The project was discontinued as focus shifted to larger SaaS products.",

        link: "https://ai-resume-builder-dhirajaryaa.vercel.app/",
        repoLink: "https://github.com/dhirajaryaa/AI-Resume-Builder",

        status: "discontinue",
        year: "2024",
        duration: "1 Month",
        role: "Frontend Developer",
        teamSize: "Solo",

        technologies: [
            "React",
            "Firebase",
            "React Hook Form",
            "TailwindCSS",
        ],

        features: [
            "Resume Templates",
            "Live Preview",
            "AI Suggestions",
            "PDF Export",
        ],

        problemsSolved: [
            "Simplifies resume creation.",
            "Provides professional layouts.",
            "Improves resume quality.",
        ],

        challenges: [
            "Template rendering.",
            "PDF generation.",
            "State management.",
        ],

        learning: [
            "Firebase.",
            "React Hook Form.",
            "Template systems.",
        ],

        screenshots: [
        ],

        metrics: {
            resumes: "100+",
        },

        roadmap: [],
    },
];