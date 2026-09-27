import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { SectionHeading } from "@/components/common/section-heading";
import { movies} from "@/lib/config";
import { Clapperboard } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Movies",
    description:
        "Films and shows I recommend — the ones that left an impression, and a sentence on why each one stuck.",
    keywords: [
        "movies",
        "film recommendations",
        "movie list",
        "Interstellar",
        "The Social Network",
        "LifeHack",
        "web developer",
    ],
    alternates: { canonical: "/movies" },
    openGraph: {
        title: "Movies — Dhiraj Arya",
        description: "Films that left an impression on me.",
        url: "/movies",
    },
};

export default function MoviesPage() {
    return (
        <Container className="py-12 sm:py-20">
            <PageHeader
                title="Movies"
                count={`0${movies.length}`}
                description="Films that left an impression on me. No ratings, no essays — just the list and a sentence each."
            />

            <hr />

            {/* recommendations  */}
            <section className="flex flex-col justify-center gap-4 py-10 md:py-14">
                <SectionHeading
                    title="Recommendations"
                    hint="films & shows worth the runtime."
                />

                <ul className="flex flex-col">
                    {movies.map((movie) => (
                        <li key={movie.slug}>
                            <article className="group border-muted hover:bg-muted/40 flex items-start gap-3 rounded-lg border-b border-dashed p-3 transition-all duration-200 md:px-4">
                                <Clapperboard className="text-muted-foreground mt-0.5 size-4 shrink-0" />

                                <div className="flex min-w-0 flex-col gap-1">
                                    <div className="flex flex-wrap items-baseline gap-x-2">
                                        <h2 className="text-foreground text-[15px] font-medium">
                                            {movie.title}
                                        </h2>
                                        <span className="text-muted-foreground/70 font-mono text-[11px]">
                                            ({movie.year})
                                        </span>
                                    </div>
                                    <p className="text-muted-foreground max-w-prose text-[13px] leading-[1.55]">
                                        {movie.line}
                                    </p>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </section>

        </Container>
    );
}
