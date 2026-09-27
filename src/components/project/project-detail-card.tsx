import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { statusStyles, type Project } from "@/lib/config";
import { techStack } from "@/lib/tech-stack";
import { cn } from "@/lib/utils";
import {
    ArrowUpRight,
    ChevronDown,
    CircleDot,
    GitBranch,
    Play,
    User,
} from "lucide-react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

/* small labelled list used inside the unfolded card */
const DetailList = ({
    title,
    items,
    icon: Icon,
}: {
    title: string;
    items: string[];
    icon: typeof CircleDot;
}) => (
    <div className="flex flex-col gap-2">
        <h4 className="text-muted-foreground/70 flex items-center gap-1.5 text-[11px] font-medium tracking-wider uppercase">
            <Icon className="size-3.5" />
            {title}
        </h4>
        <ul className="flex flex-col gap-1.5">
            {items.map((item) => (
                <li
                    key={item}
                    className="text-muted-foreground flex items-start gap-2 text-[13px] leading-[1.5]"
                >
                    <span className="bg-muted-foreground/40 mt-[0.45em] size-1 shrink-0 rounded-full" />
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

/* one tech pill — falls back to text only when no icon is mapped */
const TechChip = ({ tag }: { tag: string }) => {
    const tech = techStack[tag];
    const Icon = tech?.icon;

    return (
        <span
            className="border-muted text-muted-foreground inline-flex items-center gap-1.5 rounded-md border border-dashed px-1.5 py-0.5 text-[11px] whitespace-nowrap"
        >
            {Icon && <Icon className={cn("size-3", tech.className)} />}
            {tag}
        </span>
    );
};

export const ProjectDetailCard = ({
    className,
    project,
}: {
    className?: string;
    project: Project;
}) => {
    const isChromeDemo = project.links.live?.includes("youtube");

    return (
        <Collapsible className="group/collapsible">
            <article
                className={cn(
                    "border-muted bg-background w-full rounded-xl border border-dashed p-2 transition-all duration-300 group-data-[state=open]/collapsible:bg-gray-50 dark:group-data-[state=open]/collapsible:bg-foreground/5",
                    className,
                )}
            >
                {/* ---------- foldable header ---------- */}
                <CollapsibleTrigger asChild>
                    <button className="hover:bg-muted/40 flex w-full items-start gap-3 rounded-lg p-2 text-left transition-colors duration-200">
                        {/* status dot */}
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <span
                                    className={cn(
                                        "mt-1.5 size-3 shrink-0 rounded-full",
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

                        {/* name + line */}
                        <div className="flex min-w-0 flex-1 flex-col gap-1">
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                <h3 className="text-foreground text-base font-medium">
                                    {project.name}
                                </h3>
                                <span className="text-muted-foreground/60 font-mono text-[11px]">
                                    {project.year}
                                </span>
                            </div>
                            <p className="text-muted-foreground line-clamp-2 text-sm leading-[1.5] font-normal">
                                {project.line}
                            </p>
                        </div>

                        {/* tech icons + chevron */}
                        <div className="flex shrink-0 items-center gap-3">
                            <div className="hidden items-center gap-2 sm:flex">
                                {project.tags.slice(0, 4).map((tag) => {
                                    const tech = techStack[tag];
                                    if (!tech) return null;
                                    const Icon = tech.icon;
                                    return (
                                        <Tooltip key={tag}>
                                            <TooltipTrigger asChild>
                                                <span className={tech.className}>
                                                    <Icon className="size-4" />
                                                    <span className="sr-only">
                                                        {tag}
                                                    </span>
                                                </span>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="capitalize">
                                                    {tag}
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    );
                                })}
                            </div>
                            <ChevronDown
                                strokeWidth={1.6}
                                className="text-muted-foreground group-data-[state=open]/collapsible:rotate-180 size-4 transition-transform duration-300"
                            />
                        </div>
                    </button>
                </CollapsibleTrigger>

                {/* ---------- unfolded detail ---------- */}
                <CollapsibleContent>
                    <div className="flex flex-col gap-5 px-2 pt-4 pb-2">
                        {/* banner, same parallax reveal as the home page */}
                        {project.banner && (
                            <div className="bg-linear-to-br from-white to-rose-500 group/collapsible relative aspect-video overflow-hidden rounded-xl">
                                <div className="absolute inset-0 translate-x-10 translate-y-10 overflow-hidden rounded-xl border-4 border-white/30 transition-transform duration-700 ease-out group-hover/collapsible:translate-x-0 group-hover/collapsible:translate-y-0">
                                    <Image
                                        alt={`${project.name} banner`}
                                        src={project.banner}
                                        width={1200}
                                        height={720}
                                        className="rounded-md object-cover"
                                    />
                                </div>
                            </div>
                        )}

                        {/* overview */}
                        <p className="text-foreground/70 text-[13px] leading-[1.6] md:text-sm">
                            {project.overview}
                        </p>

                        {/* meta */}
                        <div className="border-muted text-muted-foreground flex flex-wrap items-center gap-x-5 gap-y-1.5 border-t border-dashed pt-4 text-xs">
                            <span className="flex items-center gap-1.5">
                                <GitBranch className="size-3.5" />
                                {project.status}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <User className="size-3.5" />
                                {project.role}
                            </span>
                        </div>

                        {/* features */}
                        <DetailList
                            title="what it does"
                            items={project.features}
                            icon={CircleDot}
                        />

                        {project.challenges && (
                            <DetailList
                                title="the hard part"
                                items={project.challenges}
                                icon={ChevronDown}
                            />
                        )}

                        {project.learnings && (
                            <DetailList
                                title="what i took away"
                                items={project.learnings}
                                icon={ArrowUpRight}
                            />
                        )}

                        {/* stack */}
                        <div className="flex flex-col gap-2">
                            <h4 className="text-muted-foreground/70 text-[11px] font-medium tracking-wider uppercase">
                                stack
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                                {project.tags.map((tag) => (
                                    <TechChip key={tag} tag={tag} />
                                ))}
                            </div>
                        </div>

                        {/* actions */}
                        <div className="border-muted flex flex-wrap items-center gap-2 border-t border-dashed pt-4">
                            {project.links.live && (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    asChild
                                >
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {isChromeDemo ? (
                                            <Play />
                                        ) : (
                                            <ArrowUpRight />
                                        )}
                                        {isChromeDemo ? "watch demo" : "live site"}
                                    </a>
                                </Button>
                            )}
                            {project.links.repo && (
                                <Button variant="outline" size="sm" asChild>
                                    <a
                                        href={project.links.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <BsGithub className="size-3.5" />
                                        source code
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </CollapsibleContent>
            </article>
        </Collapsible>
    );
};
