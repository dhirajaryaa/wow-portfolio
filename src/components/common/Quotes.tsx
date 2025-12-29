"use client";

import { quotes } from "@/config/quotes";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

function Quotes() {
  const [quote, setQuote] = useState<any>(null);

  useEffect(() => {
    if (!quotes?.length) return;

    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  if (!quote) return null;

  return (
    <section className="w-full px-4 my-16">
      <div className="relative w-full rounded-2xl border bg-muted p-8">
        <Quote
          className="absolute top-4 left-4 text-muted-foreground/20"
          fill="currentColor"
          stroke="none"
          size={96}
        />

        <div className="flex flex-col gap-3">
          <p className="text-sm sm:text-lg text-foreground/70 wrap-break-word">
            &quot;{quote.quote}&quot;
          </p>

          <p className="text-sm sm:text-lg font-medium text-right text-foreground">
            — {quote.author}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Quotes;
