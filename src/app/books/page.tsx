import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { SectionHeading } from "@/components/common/section-heading";
import { books, ogImages } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Books",
    description:
        "Books that shaped how I think — a short reading list of the ones that actually changed how I approach problems.",
    keywords: [
        "books",
        "reading list",
        "book recommendations",
        "Ikigai",
        "programming books",
        "self-taught developer",
    ],
    alternates: { canonical: "/books" },
    openGraph: {
        title: "Books — Dhiraj Arya",
        description:
            "Books that shaped how I think — a short reading list of the ones worth your time.",
        url: "/books",
        images: [...ogImages],
    },
};

const statusStyles: Record<string, string> = {
    Reading: "border-blue-400/40 text-blue-600 dark:text-blue-400",
    Read: "border-green-400/40 text-green-600 dark:text-green-400",
    "Want to read": "border-muted text-muted-foreground",
};

export default function BooksPage() {
    return (
        <Container className="py-12 sm:py-20">
            <PageHeader
                title="Books"
                count={`0${books.length}`}
                description="Books that shaped my thinking. I keep the list short because a long one is just a list."
            />

            <hr className="mt-4" />

            {/* reading list  */}
            <section className="flex flex-col justify-center gap-4 py-10 md:py-14">
                <SectionHeading
                    title="Reading List"
                    hint="currently reading, and finished."
                />

                <ul className="flex flex-col gap-2">
                    {books.map((book) => (
                        <li key={book.slug}>
                            <article className="group border-muted bg-background hover:bg-gray-100 dark:hover:bg-foreground/5 flex flex-col gap-3 rounded-xl border border-dashed p-4 transition-all duration-300">
                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                    <h2 className="text-foreground text-base font-medium">
                                        {book.title}
                                    </h2>
                                    <span
                                        className={`shrink-0 rounded border border-dashed px-1.5 py-0.5 font-mono text-[10px] ${statusStyles[book.status]}`}
                                    >
                                        {book.status.toLowerCase()}
                                    </span>
                                </div>

                                <p className="text-muted-foreground text-xs">
                                    by{" "}
                                    <span className="text-foreground/80">
                                        {book.author}
                                    </span>
                                </p>

                                <p className="text-foreground/70 max-w-prose text-[13px] leading-[1.6] md:text-sm">
                                    {book.line}
                                </p>
                            </article>
                        </li>
                    ))}
                </ul>

                <p className="text-muted-foreground text-[13px] leading-[1.55]">
                    More coming — the list grows slowly, which is the point.
                </p>
            </section>
        </Container>
    );
}
