import type { IconType } from "react-icons";
import {
    SiNextdotjs,
    SiTypescript,
    SiDrizzle,
    SiReact,
    SiMongodb,
    SiNodedotjs,
    SiTailwindcss,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";


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
        className: " text-blue-600",
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
        className: " text-cyan-600",
    },

    MongoDB: {
        icon: SiMongodb,
        className: " text-green-700",
    },

    "Node.js": {
        icon: SiNodedotjs,
        className: " text-green-700",
    },

    Tailwind: {
        icon: SiTailwindcss,
        className: "text-cyan-600",
    },
};