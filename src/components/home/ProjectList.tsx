import { projects } from "@/config/project";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Heading from "@/components/common/Heading";
import ProjectCard from "@/components/projects/ProjectCard";

const MAX_PROJECTS = 4;

function ProjectList() {
  return (
    <section className="flex flex-col mt-16">
      <Heading hint="my proof-of-work ✨" title="Projects" as="h2" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.slice(0, MAX_PROJECTS).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {projects.length > MAX_PROJECTS && (
        <Link
          href="/pow"
          className="mt-4 text-xs text-muted-foreground/50 hover:text-foreground transition-colors flex items-center gap-1 self-end"
        >
          Show all projects <ArrowRight className="size-3" />
        </Link>
      )}
    </section>
  );
}

export default ProjectList;
