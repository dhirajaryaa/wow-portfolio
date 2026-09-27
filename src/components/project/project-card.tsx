import { statusStyles, type Project } from "@/lib/config";
import { cn } from "cn";
import Image from "next/image";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { techStack } from "@/lib/tech-stack";
import { Link } from "lucide-react";
import { BsGithub } from "react-icons/bs";

export const ProjectCard = ({
    className,
    project,
}: {
    className?: string;
    project: Project;
}) => {
    return (
        <article
            className={cn(
                "border-muted space-y-4 rounded-xl border border-dashed p-2 bg-background hover:bg-gray-100 dark:hover:bg-foreground/5 duration-300 transition-all group backdrop-blur-sm w-full relative",
                className,
            )}
        >
            {/* image  */}
            <div className="relative aspect-video overflow-hidden rounded-xl bg-linear-to-br from-white to-rose-500">
                <div className="absolute inset-0 translate-x-10 translate-y-10 overflow-hidden rounded-xl border-4 border-white/30 transition-transform duration-700 ease-out group-hover:translate-x-0 group-hover:translate-y-0">
                    <Image
                        alt={project.name}
                        src={project.banner}
                        width={1200}
                        height={720}
                        className="rounded-md object-cover"
                    />
                </div>
            </div>
            {/* title + desc + links + tecstack  */}
            <div className="flex flex-col gap-2 px-1">
                <div className="flex items-center gap-1.5">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div
                                className={cn(
                                    "size-3 rounded-full",
                                    statusStyles[project.status],
                                )}
                            />
                        </TooltipTrigger>
                        <TooltipContent>
                            <div
                                className={cn(
                                    "size-2 rounded-full",
                                    statusStyles[project.status],
                                )}
                            />{" "}
                            <p className="capitalize">{project.status}</p>
                        </TooltipContent>
                    </Tooltip>
                    <h3 className="text-base font-medium">{project.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm font-normal line-clamp-2 h-10">
                    {project.line}
                </p>
                <div className="flex my-2 items-center justify-between w-full">
                    <div className="flex gap-2 items-center flex-wrap">
                        {project.tags.map((tag) => {
                            const tech = techStack[tag];
                            if (!tech) return null;
                            const Icon = tech.icon;
                            return (<Tooltip key={tag}>
                                <TooltipTrigger asChild>
                                    <span
                                        className={cn(
                                            "p-1",
                                            tech.className,
                                        )}
                                    >
                                        <Icon className="size-4" />
                                        <span className="sr-only">
                                            {tag}
                                        </span>
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="capitalize">{tag}</p>
                                </TooltipContent>
                            </Tooltip>
                            );
                        })}
                    </div>
                    <div className="flex gap-4 items-center text-sm">
                        <a href={project.links.live} target="_blank" className="text-muted-foreground text-sm flex items-center gap-1 hover:text-foreground duration-200 transition-colors">
                            <Link size={15} />
                            <span className="text-xs">Live</span>
                        </a>
                        <a href={project.links.live} target="_blank" className="text-muted-foreground text-sm flex items-center gap-1 hover:text-foreground duration-200 transition-colors">
                            <BsGithub className="size-4" />
                            <span className="text-xs">Repo</span>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
};
