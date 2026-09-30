import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { GearSection } from "@/components/gear/gear-section";
import { gearGroups, ogImages, profile } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gears",
    description:
        "The hardware behind the work — an Intel i5 desktop, dual monitors, the gadgets on the desk, and the browser extensions that remove small annoyances.",
    keywords: [
        "PC setup",
        "developer setup",
        "gadgets",
        "web extensions",
        "browser extensions",
        "hardware",
        "workstation",
    ],
    alternates: { canonical: "/gears" },
    openGraph: {
        title: "Gears — Dhiraj Arya",
        description:
            "PC setup, gadgets & tools I use daily — the hardware and extensions behind the work.",
        url: "/gears",
        images: [...ogImages],
    },
};

export default function GearsPage() {
    return (
        <Container className="py-12 sm:py-20">
            <PageHeader
                title="Gears"
                count={`0${gearGroups.reduce((n, g) => n + g.items.length, 0)}`}
                description="Beyond the code. The machine, the setup and the extensions I reach for daily — collected because friends keep asking."
            />

            <hr className="mt-4" />

            {gearGroups.map((group, index) => (
                <div key={group.id}>
                    {index > 0 && <hr className="mt-4" />}
                    <GearSection group={group} />
                </div>
            ))}

            <hr className="mt-4" />

            {/* setup cross-link  */}
            <section className="flex flex-col justify-center gap-3 py-10 md:py-14">
                <h2 className="text-foreground font-serif text-lg font-medium">
                    # The Rest
                </h2>
                <p className="text-foreground/70 text-[13px] leading-[1.6] md:text-sm">
                    The dotfiles, the terminal config and the keybindings live on
                    their own page. So do the books, and so do the movies.
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                    <Button variant="outline" size="sm" asChild>
                        <Link href="/setup">
                            see my setup
                            <ArrowUpRight />
                        </Link>
                    </Button>
                    <Button
                        variant="link"
                        size="sm"
                        className="text-muted-foreground hover:text-foreground"
                        asChild
                    >
                        <a href={`mailto:${profile.email}`}>
                            ask me anything about it
                        </a>
                    </Button>
                </div>
            </section>

        </Container>
    );
}
