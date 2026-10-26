"use client";

import { useEffect, useState } from "react";
import { ProjectDetailCard } from "@/components/project/project-detail-card";
import type { Project } from "@/lib/config";

/* multiple cards can be opened at the same time */
export const ProjectsAccordion = ({ projects }: { projects: Project[] }) => {
    const [openSlugs, setOpenSlugs] = useState<Set<string>>(() => new Set());

    useEffect(() => {
        if (typeof window !== "undefined" && window.location.hash) {
            const hash = window.location.hash.slice(1);
            if (hash) {
                setOpenSlugs((prev) => new Set(prev).add(hash));
            }
        }
    }, []);

    const toggleSlug = (slug: string, open: boolean) => {
        setOpenSlugs((prev) => {
            const next = new Set(prev);
            if (open) {
                next.add(slug);
            } else {
                next.delete(slug);
            }
            return next;
        });
    };

    return (
        <div className="flex flex-col gap-2">
            {projects.map((project) => (
                <ProjectDetailCard
                    key={project.slug}
                    project={project}
                    open={openSlugs.has(project.slug)}
                    onOpenChange={(open) => toggleSlug(project.slug, open)}
                />
            ))}
        </div>
    );
};
