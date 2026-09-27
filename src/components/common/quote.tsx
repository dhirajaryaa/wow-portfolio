import type { Quote } from "@/lib/config";
import { cn } from "@/lib/utils";

export const QuoteBlock = ({
    quote,
    className,
}: {
    quote: Quote;
    className?: string;
}) => {
    return (
        <blockquote
            className={cn(
                "mx-auto flex max-w-prose flex-col items-center justify-center gap-3 py-10 text-center md:pb-14",
                className,
            )}
        >
            <p className="text-foreground/80 font-serif text-lg leading-[1.4] italic md:text-xl">
                &ldquo;{quote.text}&rdquo;
            </p>
            <footer className="text-muted-foreground text-xs">
                &mdash; {quote.author}
            </footer>
        </blockquote>
    );
};
