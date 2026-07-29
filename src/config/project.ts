// status must be : "completed👍","ongoing🏗️","started🚀","discontinue⚠️"

export type Project = {
    name: string;
    link: string;
    repoLink: string;
    image: string;
    description: string;
    status: string;
    slug: string;
    technologies: string[];
};

export const projects: Project[] = [
    {
        name: "QueryMate",
        link: "https://querymate.dhirajarya.in",
        repoLink: "https://github.com/dhirajaryaa/querymate",
        image: "/projects/querymate.jpg",
        description:
            "AI-powered database assistant that lets users chat with PostgreSQL, MySQL, SQLite, and MongoDB using natural language. QueryMate generates optimized SQL queries, provides schema-aware responses, manages database connections securely, and helps developers, analysts, and teams explore data faster without writing complex queries manually.",
        status: "completed",
        slug: "querymate",
        technologies: [
            "Next.js",
            "TypeScript",
            "Drizzle ORM",
            "PostgreSQL",
            "Groq",
            "TailwindCSS",
            "Shadcn UI",
            "Vercel AI SDK",
        ],
    },
    {
        name: "SmartForm",
        link: "https://www.youtube.com/watch?v=Wan9QWfXF-Y",
        repoLink: "https://github.com/dhirajaryaa/smartform",
        image: "/projects/smartform.jpg",
        description:
            "An AI-powered Chrome extension that automatically fills web forms with relevant user information in a single click. SmartForm intelligently detects form fields, generates context-aware values, and helps users save time while completing registrations, applications, surveys, and repetitive online forms.",

        status: "completed",
        slug: "smartform",
        technologies: [
            "TypeScript",
            "React",
            "Chrome Extension",
            "WXT",
            "Gemini AI",
            "TailwindCSS",
            "Zod",
        ],
    },
    {
        name: "QuickFormX",
        link: "https://quickformx.dhirajarya.in/login",
        repoLink: "https://github.com/dhirajaryaa/quickFormx",
        image: "/projects/quickformx.jpg",
        description:
            "A fast and flexible form builder that lets you create, customize, and manage forms in minutes. With drag-and-drop simplicity, smart validation, and seamless API integration, it's perfect for creating responsive and reusable form solutions.",
        status: "completed",
        slug: "quickformx",
        technologies: [
            "MERN",
            "TailwindCSS",
            "Gemini AI",
            "React DnD",
            "Zod",
        ],
    },
    {
        name: "ResuCraft",
        link: "https://ai-resume-builder-dhirajaryaa.vercel.app/",
        repoLink: "https://github.com/dhirajaryaa/AI-Resume-Builder",
        image: "/projects/resucraft.jpg",
        description:
            "AI-powered resume builder that helps users create professional resumes with customizable templates, smart content suggestions, and real-time feedback to improve their chances of landing interviews.",
        status: "discontinue",
        slug: "resucraft",
        technologies: [
            "React",
            "Firebase",
            "React Hook Form",
            "TailwindCSS",
        ],
    },
];
