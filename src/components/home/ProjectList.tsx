import { projects } from "@/config/project";
import { Globe, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import Heading from "@/components/common/Heading";
import Card from "@/components/common/Card";

const statusColors: Record<string, string> = {
  "completed": "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  "ongoing": "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  "started": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "discontinue": "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
};

const MAX_PROJECTS = 4;

function ProjectList() {
  return (
    <section className="flex flex-col mt-16">
      <Heading hint="my proof-of-work ✨" title="Projects" as="h2" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.slice(0, MAX_PROJECTS).map((project) => (
          <Card key={project.slug} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">{project.name}</h3>
              <div className="flex items-center gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground/40 hover:text-foreground transition-colors"
                  title="Live site"
                >
                  <Globe className="size-3.5" />
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground/40 hover:text-foreground transition-colors"
                  title="Source code"
                >
                  <Github className="size-3.5" />
                </a>
                <span className={`text-[10px] px-1.5 py-0.5 rounded border ${statusColors[project.status] || ""}`}>
                  {project.status.trim()}
                </span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground/60 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </Card>
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
