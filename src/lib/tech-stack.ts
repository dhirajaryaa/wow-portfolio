import type { IconType } from "react-icons";
import {
    SiNextdotjs,
    SiTypescript,
    SiPostgresql,
    SiDrizzle,
    SiReact,
    SiMongodb,
    SiNodedotjs,
    SiTailwindcss,
} from "react-icons/si";

export type TechStack = {
    name: string;
    icon: IconType;
};

export const techStack: Record<string, TechStack> = {
    "Next.js": {
        name: "Next.js",
        icon: SiNextdotjs,
    },
    TypeScript: {
        name: "TypeScript",
        icon: SiTypescript,
    },
    PostgreSQL: {
        name: "PostgreSQL",
        icon: SiPostgresql,
    },
    Drizzle: {
        name: "Drizzle",
        icon: SiDrizzle,
    },
    React: {
        name: "React",
        icon: SiReact,
    },
    MongoDB: {
        name: "MongoDB",
        icon: SiMongodb,
    },
    "Node.js": {
        name: "Node.js",
        icon: SiNodedotjs,
    },
    Tailwind: {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
    },
};