import { Button } from "@/components/ui/button";
import { Project, projects } from "@/lib/config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/project/project-card";

export const FeatureProject = () => {
    return (
        <section className="flex flex-col gap-6 justify-center">
            {/* heading  */}
            <div className="flex flex-row items-center justify-between gap-4">
                <div className="flex gap-2 items-center">
                    <h2 className="text-foreground font-medium font-serif text-lg"># Feature Projects</h2>
                    <p className="text-muted-foreground text-xs pl-2 tracking-wider hidden md:block">a few things i've built and shipped.</p>
                </div>
                <Button
                    variant={"link"}
                    className="hover:text-foreground text-muted-foreground"
                    asChild
                >
                    <Link href={"/projects"}>
                        view all projects <ArrowRight strokeWidth={1.6} size={16} />
                    </Link>
                </Button>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                {projects.slice(0, 2).map((project: Project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </section>
    );
};
