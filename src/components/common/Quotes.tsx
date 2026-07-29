import { quotes } from "@/config/quotes";
import { Quote } from "lucide-react";

function getDailyQuote() {
  if (!quotes?.length) return null;
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      86400000
  );
  return quotes[dayOfYear % quotes.length];
}

function Quotes() {
  const quote = getDailyQuote();
  if (!quote) return null;

  return (
    <section className="w-full px-4 my-20">
      <div className="relative w-full rounded-2xl border bg-muted/30 p-8 sm:p-10 overflow-hidden">
        <Quote
          className="absolute top-3 left-3 text-muted-foreground/10"
          fill="currentColor"
          stroke="none"
          size={80}
        />

        <div className="flex flex-col gap-4 relative">
          <p className="text-sm sm:text-[17px] text-foreground/70 leading-relaxed italic">
            &ldquo;{quote.quote}&rdquo;
          </p>

          <p className="text-sm font-medium text-right text-foreground/50">
            — {quote.author}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Quotes;
