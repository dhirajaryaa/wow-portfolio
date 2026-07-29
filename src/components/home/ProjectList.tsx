import { projects } from "@/config/project";
import { Globe, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";

const statusColors: Record<string, string> = {
  "completed👍": "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  "ongoing🏗️": "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  "started🚀": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "discontinue⚠️": "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
};

function ProjectList() {
  return (
    <section className="flex flex-col mt-16">
      <SectionHeading title="Projects" subtitle="my proof-of-work ✨"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="flex flex-col gap-1.5 p-4 rounded-lg border bg-card"
          >
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
                  {project.status.replace(/[👍🏗️🚀⚠️]/g, "").trim()}
                </span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground/60 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
