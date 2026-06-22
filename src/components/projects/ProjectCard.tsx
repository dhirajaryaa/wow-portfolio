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
  CardHeader,
} from "@/components/ui/card";
import { Globe, GithubIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Project } from "@/config/project";

function ProjectCard({ project }: {project:Project}) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed👍":
        return "bg-green-100 border border-green-200 text-green-800";
      case "started🚀":
        return "bg-blue-100 border border-blue-200 text-blue-800";
      case "discontinue⚠️":
        return "bg-rose-100 border border-rose-200 text-rose-800";
      default:
        return "bg-yellow-100 border border-yellow-200 text-yellow-800";
    }
  };
  return (
    <Card className={"gap-4 hover:scale-100 scale-101 duration-200 transition-all  bg-muted/20 hover:bg-muted/40"}>
      <CardContent>
        <div className="flex items-center gap-2 justify-between mb-4">
          <Link href="/pow/quickformx">
            <h3 className={"text-xl font-semibold"}>{project.name}</h3>
          </Link>
          <div className={"flex items-center gap-3"}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-foreground/40"
                >
                  <Globe size={22} />
                </a>
              </TooltipTrigger>
              <TooltipContent className={"text-xs"}>
                View Website
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-foreground/40"
                >
                  <GithubIcon size={22} />
                </a>
              </TooltipTrigger>
              <TooltipContent className={"text-xs"}>View Github</TooltipContent>
            </Tooltip>
          </div>
        </div>
        <CardDescription className={"line-clamp-4 text-[13px] capitalize mb-4"}>
          {project.description}
        </CardDescription>
        {project.technologies.map((tech: string, idx: number) => (
          <Badge
            key={idx}
            variant="secondary"
            className={"text-[10px] font-medium mb-1 mr-1"}
          >
            {tech}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className={"justify-between"}>
        <Badge className={getStatusColor(project.status)}>
          {project.status}
        </Badge>
        <Button
          variant={"link"}
          asChild
          size={"sm"}
          className={
            "font-normal text-foreground/40 hover:text-foreground transition-all duration-200"
          }
        >
          <Link href={`/pow/${project.slug}`}>
            View Details <ArrowRight />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
