import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const FeatureTool = ()=>{
    return (
        <section className="flex flex-col gap-6 justify-center py-10 md:py-14">
            {/* heading  */}
            <div className="flex flex-row items-center justify-between gap-4">
                <div className="flex gap-2 items-center">
                    <h2 className="text-foreground font-medium font-serif text-lg"># Feature Tools</h2>
                    <p className="text-muted-foreground text-xs pl-2 tracking-wider hidden md:block">small utilities and experiments.</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               
            </div>
        </section>
    )
}