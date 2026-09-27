import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { QuoteBlock } from "@/components/common/quote";
import { SectionHeading } from "@/components/common/section-heading";
import { quotes, setupGroups } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Setup",
    description:
        "My VSCode configuration and dev environment preferences — fonts, theme, terminal, workbench, Git and the extensions I actually keep installed.",
    keywords: [
        "VSCode config",
        "vscode settings.json",
        "developer setup",
        "dev environment",
        "Min Dark theme",
        "JetBrainsMono Nerd Font",
        "dotfiles",
    ],
    alternates: { canonical: "/setup" },
    openGraph: {
        title: "Setup — Dhiraj Arya",
        description:
            "My VSCode configuration and dev environment preferences.",
        url: "/setup",
    },
};

export default function SetupPage() {
    return (
        <Container className="py-12 sm:py-20">
            <PageHeader
                title="Setup"
                description="My VSCode configuration and dev environment preferences. Synced from my local config — no secrets, just the settings I actually use."
            />

            <hr />

            {setupGroups.map((group, index) => (
                <div key={group.id}>
                    {index > 0 && <hr />}
                    <section className="flex flex-col justify-center gap-4 py-8 md:py-10">
                        <SectionHeading
                            title={group.title}
                            hint={`${group.items.length} setting${group.items.length === 1 ? "" : "s"}.`}
                        />

                        <dl className="flex flex-col">
                            {group.items.map(({ key, value }) => (
                                <div
                                    key={key}
                                    className="border-muted hover:bg-muted/40 flex items-center justify-between gap-4 rounded-lg border-b border-dashed px-2 py-2 transition-colors duration-200 md:px-4"
                                >
                                    <dt className="text-muted-foreground text-[13px]">
                                        {key}
                                    </dt>
                                    <dd className="text-foreground text-right font-mono text-xs">
                                        {value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </section>
                </div>
            ))}

            <hr />

            <QuoteBlock quote={quotes.setup} />

            <hr />

        </Container>
    );
}
