import { SectionHeading } from "@/components/common/section-heading";
import type { GearGroup } from "@/lib/config";
import { ArrowUpRight } from "lucide-react";

export const GearSection = ({ group }: { group: GearGroup }) => {
    return (
        <section className="flex flex-col justify-center gap-4 py-8 md:py-10">
            <SectionHeading title={group.title} hint={group.hint} />
            <ul className="flex flex-col">
                {group.items.map(({ name, note, href, icon: Icon }) => {
                    const body = (
                        <>
                            <div className="flex min-w-0 flex-col gap-0.5">
                                <div className="flex items-center gap-2">
                                    <Icon className="size-4 shrink-0" />
                                    <h3 className="text-foreground group-hover:underline text-[15px] font-medium">
                                        {name}
                                    </h3>
                                </div>
                                {note && (
                                    <p className="text-muted-foreground line-clamp-1 text-xs font-normal">
                                        ~ {note}
                                    </p>
                                )}
                            </div>
                            {href && (
                                <ArrowUpRight
                                    className="text-muted-foreground group-hover:text-foreground size-4 shrink-0 transition-all duration-200 md:opacity-0 md:group-hover:opacity-100"
                                />
                            )}
                        </>
                    );

                    return (
                        <li key={name}>
                            {href ? (
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-muted hover:bg-muted/40 flex items-center justify-between gap-2 rounded-lg border-b border-dashed p-2 transition-all duration-200 group md:px-4"
                                >
                                    {body}
                                </a>
                            ) : (
                                <div className="border-muted hover:bg-muted/40 flex items-center justify-between gap-2 rounded-lg border-b border-dashed p-2 transition-all duration-200 group md:px-4">
                                    {body}
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
