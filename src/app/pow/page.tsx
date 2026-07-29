import { projects } from "@/config/project";
import Image from "next/image";
import { Globe, Github } from "lucide-react";
import Heading from "@/components/common/Heading";
import Card from "@/components/common/Card";

const statusColors: Record<string, string> = {
  "completed👍": "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  "ongoing🏗️": "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  "started🚀": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "discontinue⚠️": "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
};

function ProjectPage() {
  return (
    <main className="w-full h-full px-4 py-8">
      <Heading
        hint="my proof-of-work ✨"
        title="Projects"
        description="Here are some of the projects I have built."
      />

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <Card
            key={project.slug}
            className="flex flex-col sm:flex-row gap-4"
          >
            {project.image && (
              <div className="relative w-full sm:w-48 h-32 rounded-md overflow-hidden border shrink-0 bg-muted/30">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex flex-col gap-2 flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-base font-semibold">{project.name}</h2>
                <span className={`text-[10px] px-1.5 py-0.5 rounded border shrink-0 ${statusColors[project.status] || ""}`}>
                  {project.status.replace(/[👍🏗️🚀⚠️]/g, "").trim()}
                </span>
              </div>

              <p className="text-sm text-muted-foreground/70 line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-1.5 py-0.5 rounded bg-muted/50 border  text-muted-foreground/60"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="text-[10px] px-1.5 py-0.5 text-muted-foreground/40">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 mt-1">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground/50 hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <Globe className="size-4" /> Live
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground/50 hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <Github className="size-4" /> Code
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default ProjectPage;
