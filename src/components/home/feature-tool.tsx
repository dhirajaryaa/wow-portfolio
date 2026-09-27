import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { tools, type Tool } from "@/lib/config";

export const ToolItem = ({
    className,
    tool,
}: {
    className?: string;
    tool: Tool;
}) => {
    const Icon = tool.icon;
    return (
        <div className="hover:bg-muted/40 flex items-center justify-between gap-2 transition-all duration-200 p-2 md:px-4 group cursor-pointer border-b border-dashed border-muted">
            <div className="flex justify-center md:justify-evenly md:items-center gap-1 md:gap-2 flex-col md:flex-row">
                <div className="flex gap-2 items-center">
            <Icon className="size-4" />
            <h3 className="text-foreground text-[15px] group-hover:underline font-medium">{tool.name}</h3>
                </div>
            <p className="text-muted-foreground text-xs font-normal line-clamp-1">
                {" "}
                ~ {tool.line}
            </p>
            </div>
            <ArrowUpRight size={15} className="size-4 text-muted-foreground group-hover:text-foreground md:opacity-0 md:group-hover:opacity-100 duration-200 transition-all"/>
        </div>
    )
};

export const FeatureTool = () => {
    return (
        <section className="flex flex-col justify-center gap-6 py-10 md:py-14">
            {/* heading  */}
            <div className="flex flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <h2 className="text-foreground font-serif text-lg font-medium">
                        # Feature Tools
                    </h2>
                    <p className="text-muted-foreground hidden pl-2 text-xs tracking-wider md:block">
                        small utilities and experiments.
                    </p>
                </div>
                <Button
                    variant={"link"}
                    className="hover:text-foreground text-muted-foreground"
                    asChild
                >
                    <Link href={"/tools"}>
                        view all tools <ArrowRight strokeWidth={1.6} size={16} />
                    </Link>
                </Button>
            </div>
            <div className="grid grid-cols-1 gap-2 ">
                {tools.slice(0, 4).map((tool) => {
                    return (
                        <a key={tool.name} href={tool.href} target="_blank" >
                            <ToolItem tool={tool} />
                        </a>
                    )
                    
                })}
            </div>
        </section>
    );
};
