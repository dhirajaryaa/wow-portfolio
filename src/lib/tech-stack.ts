import type { IconType } from "react-icons";
import {
    SiNextdotjs,
    SiTypescript,
    SiDrizzle,
    SiReact,
    SiMongodb,
    SiNodedotjs,
    SiTailwindcss,
    SiJavascript,
    SiExpress,
    SiShadcnui,
    SiGooglegemini,
    SiWxt,
    SiVercel,
    SiBun,
    SiGit,
    SiGithubactions,
    SiPostgresql,
    SiSqlite,
    SiGooglechrome,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbCode } from "react-icons/tb";

type TechStack = {
    icon: IconType;
    className: string;
};

export const techStack: Record<string, TechStack> = {
    "Next.js": {
        icon: SiNextdotjs,
        className: "text-black dark:text-white",
    },

    TypeScript: {
        icon: SiTypescript,
        className: "text-blue-600",
    },

    JavaScript: {
        icon: SiJavascript,
        className: "text-yellow-500",
    },

    PostgreSQL: {
        icon: BiLogoPostgresql,
        className: "text-blue-600",
    },

    Drizzle: {
        icon: SiDrizzle,
        className: "text-green-700",
    },

    React: {
        icon: SiReact,
        className: "text-cyan-600",
    },

    MongoDB: {
        icon: SiMongodb,
        className: "text-green-700",
    },

    "Node.js": {
        icon: SiNodedotjs,
        className: "text-green-700",
    },

    Tailwind: {
        icon: SiTailwindcss,
        className: "text-cyan-600",
    },

    Express: {
        icon: SiExpress,
        className: "text-black dark:text-white",
    },

    "Shadcn UI": {
        icon: SiShadcnui,
        className: "text-neutral-500 dark:text-neutral-300",
    },

    "Gemini AI": {
        icon: SiGooglegemini,
        className: "text-blue-500",
    },

    WXT: {
        icon: SiWxt,
        className: "text-green-500",
    },

    "Chrome Extension": {
        icon: SiGooglechrome,
        className: "text-orange-600",
    },

    Zod: {
        icon: TbCode,
        className: "text-blue-600",
    },

    Vercel: {
        icon: SiVercel,
        className: "text-black dark:text-white",
    },

    Bun: {
        icon: SiBun,
        className: "text-amber-600",
    },

    Git: {
        icon: SiGit,
        className: "text-orange-600",
    },

    "GitHub Actions": {
        icon: SiGithubactions,
        className: "text-purple-500",
    },

    MySQL: {
        icon: SiPostgresql,
        className: "text-blue-500",
    },

    SQLite: {
        icon: SiSqlite,
        className: "text-sky-600",
    },
};
