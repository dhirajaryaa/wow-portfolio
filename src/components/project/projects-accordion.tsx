"use client";

import { useState } from "react";
import { ProjectDetailCard } from "@/components/project/project-detail-card";
import type { Project } from "@/lib/config";

/* one card open at a time — opening a card closes the previous one */
export const ProjectsAccordion = ({ projects }: { projects: Project[] }) => {
    const [openSlug, setOpenSlug] = useState<string | null>(null);

    return (
        <div className="flex flex-col gap-2">
            {projects.map((project) => (
                <ProjectDetailCard
                    key={project.slug}
                    project={project}
                    open={openSlug === project.slug}
                    onOpenChange={(open) =>
                        setOpenSlug(open ? project.slug : null)
                    }
                />
            ))}
        </div>
    );
};
