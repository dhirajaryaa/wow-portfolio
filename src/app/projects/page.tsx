import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { SectionHeading } from "@/components/common/section-heading";
import { ProjectDetailCard } from "@/components/project/project-detail-card";
import { ogImages, projects } from "@/lib/config";
import { techStack } from "@/lib/tech-stack";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Proof of work — web apps, developer tools and utilities built with Next.js, TypeScript and the MERN stack. Unfold any project for the details.",
    keywords: [
        "projects",
        "portfolio projects",
        "Next.js projects",
        "MERN stack projects",
        "open source projects",
        "web developer work",
        "AI projects",
    ],
    alternates: { canonical: "/projects" },
    openGraph: {
        title: "Projects — Dhiraj Arya",
        description:
            "Real-world projects built with Next.js, the MERN stack and modern web technologies.",
        url: "/projects",
        images: [...ogImages],
    },
};

const stackOrder = [
    "Next.js",
    "TypeScript",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "SQLite",
    "Drizzle",
    "Tailwind",
    "Shadcn UI",
    "WXT",
    "Gemini AI",
    "Vercel",
    "Bun",
    "Git",
    "GitHub Actions",
];

export default function ProjectsPage() {
    const ongoing = projects.filter((p) => p.status === "Ongoing").length;

    return (
        <Container className="py-12 sm:py-20">
            <PageHeader
                title="Projects"
                count={`0${projects.length}`}
                description="Things I built because I wanted them to exist. Unfold a card for the story behind it — the stack, the hard part, and what I learned."
            />

            <hr />

            {/* proof of work  */}
            <section className="flex flex-col justify-center gap-4 py-10 md:py-14">
                <SectionHeading
                    title="Proof of Work"
                    hint={`${projects.length - ongoing} shipped, ${ongoing} still cooking.`}
                />
                <div className="flex flex-col gap-2">
                    {projects.map((project) => (
                        <ProjectDetailCard
                            key={project.slug}
                            project={project}
                        />
                    ))}
                </div>
            </section>

            <hr />

            {/* stack  */}
            <section className="flex flex-col justify-center gap-4 py-10 md:py-14">
                <SectionHeading
                    title="Stack"
                    hint="what most of this gets built with."
                />
                <ul className="flex flex-wrap gap-1.5">
                    {stackOrder.filter((tag) => techStack[tag]).map((tag) => {
                        const tech = techStack[tag];
                        const Icon = tech.icon;
                        return (
                            <li
                                key={tag}
                                className="border-muted text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 rounded-md border border-dashed px-2 py-1 text-xs transition-colors duration-200"
                            >
                                <Icon
                                    className={cn(
                                        "size-3.5",
                                        tech.className,
                                    )}
                                />
                                {tag}
                            </li>
                        );
                    })}
                </ul>
                <p className="text-muted-foreground/70 text-[13px] leading-[1.55]">
                    Plus a lot of PostgreSQL,{" "}
                    <span className="font-mono text-xs">console.log</span>, and
                    patience.
                </p>
            </section>

        </Container>
    );
}
