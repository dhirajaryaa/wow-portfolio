"use client";

import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

/* the error boundary has to be a client component to catch the reset handler */
export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    /* this boundary is the closest error handler, so the console is the only log */
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <Container className="py-12 sm:py-20">
            <PageHeader
                title="Something broke"
                count="500"
                description="The page hit an error while rendering. It is not you — retrying usually clears it, and if it does not the note below identifies the exact render."
            />

            <hr />

            <section className="flex flex-col justify-center gap-4 py-10 md:py-14">
                <SectionHeading title="Try Again" hint="same page, fresh attempt." />

                <div className="flex flex-wrap items-center gap-2">
                    <Button size="sm" onClick={reset}>
                        retry
                        <RotateCcw />
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                        <Link href="/">back home</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                        <Link href="/blog">read something instead</Link>
                    </Button>
                </div>

                {error.digest && (
                    <p className="text-muted-foreground text-[13px] leading-[1.55]">
                        Reference for whoever is debugging:{" "}
                        <span className="text-foreground/80 font-mono text-xs">
                            {error.digest}
                        </span>
                    </p>
                )}
            </section>
        </Container>
    );
}
