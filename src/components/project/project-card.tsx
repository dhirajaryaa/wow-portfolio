import { statusStyles, type Project } from "@/lib/config";
import { cn } from "cn";
import Image from "next/image";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

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
                "flex flex-col gap-4 border border-dashed rounded-xl border-muted p-2",
                className,
            )}
        >
            {/* image  */}
            <div className="group relative aspect-video overflow-hidden rounded-xl bg-linear-to-br from-white to-rose-500">
                <div className="absolute inset-0 translate-x-10 translate-y-10 overflow-hidden rounded-xl border-4 border-white/30 transition-transform duration-700 ease-out group-hover:translate-x-0 group-hover:translate-y-0">
                    <Image
                        alt={project.name}
                        src={project.banner}
                        fill
                        sizes="100vw"
                        className="rounded-md object-cover"
                    />
                </div>
            </div>
            {/* title + desc + links + tecstack  */}
            <div className="flex flex-col gap-2 px-1">
                <div className="flex gap-1.5 items-center">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div
                                className={cn(
                                    "size-3 rounded-full",
                                    statusStyles[project.status]
                                )}
                            />
                        </TooltipTrigger>
                        <TooltipContent>
                            <div
                                className={cn(
                                    "size-2 rounded-full",
                                    statusStyles[project.status]
                                )}
                            /> <p className="capitalize">{project.status}</p>
                        </TooltipContent>
                    </Tooltip>
                    <h3 className="text-base font-medium">{project.name}</h3>
                </div>
                <p className="text-sm font-normal text-muted-foreground">{project.line}</p>
                <div className="flex items-center justify-between">
                    <div>
                        
                    </div>

                </div>
            </div>
        </article>
    );
};
