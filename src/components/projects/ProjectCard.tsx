import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Globe, GithubIcon, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/config/project";

function ProjectCard({ project }: { project: Project }) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed👍":
        return "bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400";
      case "started🚀":
        return "bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400";
      case "discontinue⚠️":
        return "bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400";
      default:
        return "bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400";
    }
  };

  return (
    <Card className="group relative overflow-hidden border bg-card hover:bg-muted/20 transition-all duration-300 hover:shadow-lg hover:shadow-chart-1/5">
      <div className="absolute inset-0 bg-gradient-to-br from-chart-1/[0.02] via-transparent to-chart-2/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {project.image && (
        <div className="relative h-40 overflow-hidden border-b bg-muted/30">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
      )}

      <CardContent className="relative">
        <div className="flex items-center gap-2 justify-between mb-3">
          <Link href={`/pow/${project.slug}`}>
            <h3 className="text-lg font-semibold group-hover:text-chart-1 transition-colors duration-300">
              {project.name}
            </h3>
          </Link>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-muted-foreground/40 hover:text-foreground transition-colors"
                >
                  <Globe size={18} />
                </a>
              </TooltipTrigger>
              <TooltipContent className={"text-xs"}>
                View Website
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-muted-foreground/40 hover:text-foreground transition-colors"
                >
                  <GithubIcon size={18} />
                </a>
              </TooltipTrigger>
              <TooltipContent className={"text-xs"}>
                View Github
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <CardDescription className="line-clamp-3 text-[13px] mb-4 leading-relaxed">
          {project.description}
        </CardDescription>

        <div className="flex flex-wrap gap-1.5 mb-2">
          {project.technologies.slice(0, 4).map((tech: string, idx: number) => (
            <Badge
              key={idx}
              variant="secondary"
              className="text-[10px] font-medium"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-[10px]">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="justify-between relative">
        <Badge className={getStatusColor(project.status)}>
          {project.status}
        </Badge>
        <Button
          variant={"link"}
          asChild
          size={"sm"}
          className="font-normal text-muted-foreground/40 hover:text-foreground transition-all duration-200"
        >
          <Link href={`/pow/${project.slug}`}>
            Details <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
