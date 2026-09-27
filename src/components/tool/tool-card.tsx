import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { Tool } from "@/lib/config";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export const ToolCard = ({
    className,
    tool,
}: {
    className?: string;
    tool: Tool;
}) => {
    const Icon = tool.icon;
    const isSoon = tool.status === "Coming soon";

    return (
        <Collapsible className="group/tool">
            <div
                className={cn(
                    "border-muted bg-background rounded-xl border border-dashed p-2 transition-all duration-300 group-data-[state=open]/tool:bg-gray-50 dark:group-data-[state=open]/tool:bg-foreground/5",
                    className,
                )}
            >
                {/* header  */}
                <CollapsibleTrigger asChild>
                    <div className="hover:bg-muted/40 flex items-center justify-between gap-2 rounded-lg p-2 transition-colors duration-200 md:px-3">
                        <div className="flex min-w-0 flex-col gap-0.5">
                            <div className="flex items-center gap-2">
                                <Icon className="size-4 shrink-0" />
                                <h3 className="text-foreground group-hover/tool:underline text-[15px] font-medium">
                                    {tool.name}
                                </h3>
                                {isSoon && (
                                    <span className="border-muted text-muted-foreground/70 rounded border border-dashed px-1 py-px font-mono text-[10px]">
                                        soon
                                    </span>
                                )}
                            </div>
                            <p className="text-muted-foreground line-clamp-1 text-xs font-normal">
                                ~ {tool.line}
                            </p>
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                            {tool.href && !isSoon && (
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a
                                            href={tool.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Open ${tool.name}`}
                                            className="text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            <ArrowUpRight className="size-4" />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Open {tool.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            )}
                            <ChevronDown
                                strokeWidth={1.6}
                                className="text-muted-foreground group-data-[state=open]/tool:rotate-180 size-4 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </CollapsibleTrigger>

                {/* detail  */}
                <CollapsibleContent>
                    <div className="flex flex-col gap-4 px-2 pt-4 pb-2 md:px-3">
                        <p className="text-foreground/70 text-[13px] leading-[1.6]">
                            {tool.detail}
                        </p>

                        <ul className="flex flex-col gap-1.5">
                            {tool.highlights.map((highlight) => (
                                <li
                                    key={highlight}
                                    className="text-muted-foreground flex items-start gap-2 text-[13px] leading-[1.5]"
                                >
                                    <span className="bg-muted-foreground/40 mt-[0.45em] size-1 shrink-0 rounded-full" />
                                    {highlight}
                                </li>
                            ))}
                        </ul>

                        {tool.href && (
                            <div className="border-muted border-t border-dashed pt-4">
                                {isSoon ? (
                                    <p className="text-muted-foreground/60 text-xs">
                                        Not live yet — it is on the bench.
                                    </p>
                                ) : (
                                    <Button variant="outline" size="sm" asChild>
                                        <a
                                            href={tool.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            open {tool.name}
                                            <ArrowUpRight />
                                        </a>
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                </CollapsibleContent>
            </div>
        </Collapsible>
    );
};
