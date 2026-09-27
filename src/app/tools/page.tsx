import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { ToolCard } from "@/components/tool/tool-card";
import { ArrowUpRight } from "lucide-react";
import { ogImages, pdfanyTools, tools } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tools",
    description:
        "Small, useful web utilities I build and maintain — disposable email, file and image compression, and PDF compression that never leaves your browser. Free to use.",
    keywords: [
        "developer tools",
        "free online tools",
        "temp mail",
        "image compressor",
        "PDF compressor",
        "client-side compression",
        "web utilities",
        "PDFAny",
        "merge PDF",
        "split PDF",
        "sign PDF",
        "PDF editor",
    ],
    alternates: { canonical: "/tools" },
    openGraph: {
        title: "Tools — Dhiraj Arya",
        description:
            "Small, useful web utilities I build and maintain — free to use, no sign-up.",
        url: "/tools",
        images: [...ogImages],
    },
};

export default function ToolsPage() {
    const live = tools.filter((tool) => tool.status === "Live").length;
    const soon = tools.length - live;
    const pdfCount = pdfanyTools.reduce((n, c) => n + c.tools.length, 0);

    return (
        <Container className="py-12 sm:py-20">
            <PageHeader
                title="Tools"
                count={`0${tools.length}`}
                description="Small utilities I built for a problem I kept hitting. No accounts, no tracking, no catch — just open and use them."
            />

            <hr />

            {/* utility box  */}
            <section className="flex flex-col justify-center gap-4 py-10 md:py-14">
                <SectionHeading
                    title="Utility Box"
                    hint={
                        soon > 0
                            ? `${live} live, ${soon} on the bench.`
                            : `${live} live and counting.`
                    }
                />
                <div className="flex flex-col gap-2">
                    {tools.map((tool) => (
                        <ToolCard key={tool.slug} tool={tool} />
                    ))}
                </div>
            </section>

            <hr />

            {/* pdfany breakdown  */}
            <section className="flex flex-col justify-center gap-4 py-10 md:py-14">
                <SectionHeading
                    title="PDFAny"
                    hint={`${pdfCount} tools inside, all in-browser.`}
                />
                <p className="text-foreground/70 max-w-prose text-[13px] leading-[1.6] md:text-sm">
                    The biggest one in the box. Every operation runs locally, so
                    the file never leaves the machine — and it keeps working when
                    the connection does not.
                </p>

                {pdfanyTools.map((category) => (
                    <div key={category.id} className="flex flex-col gap-2">
                        <h3 className="text-muted-foreground/70 text-[11px] font-medium tracking-wider uppercase">
                            {category.title}
                        </h3>
                        <ul className="flex flex-col">
                            {category.tools.map((t) => (
                                <li
                                    key={t.name}
                                    className="border-muted hover:bg-muted/40 flex flex-col gap-0.5 rounded-lg border-b border-dashed px-2 py-2 transition-colors duration-200 md:flex-row md:items-center md:justify-between md:gap-4 md:px-4"
                                >
                                    <span className="text-foreground text-[13px] font-medium">
                                        {t.name}
                                    </span>
                                    <span className="text-muted-foreground text-xs md:text-right">
                                        {t.line}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="mt-1">
                    <Button variant="outline" size="sm" asChild>
                        <a
                            href="https://pdfany.dhirajarya.in"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            open PDFAny
                            <ArrowUpRight />
                        </a>
                    </Button>
                </div>
            </section>

            <hr />

            {/* note  */}
            <section className="flex flex-col justify-center gap-3 py-10 md:py-14">
                <SectionHeading
                    title="A Note"
                    hint="why these exist at all."
                />
                <p className="text-foreground/70 text-[13px] leading-[1.6] md:text-sm">
                    Every one of these started as a workaround for something that
                    annoyed me. Two of them —{" "}
                    <span className="underline">LowPDF</span> and{" "}
                    <span className="underline">Snapshot</span> — process
                    everything client-side, so whatever you drop in never touches
                    a server.
                </p>
                <p className="text-muted-foreground text-[13px] leading-[1.55]">
                    They are free, ad-free, and I maintain them in my spare time.
                    If one breaks, that is genuinely on me.
                </p>
            </section>
        </Container>
    );
}
