"use client";

import { useState } from "react";
import { quotes } from "@/config/quotes";
import { Quote } from "lucide-react";

type QuoteItem = (typeof quotes)[number];

export default function FooterQuote() {
  
  const [quote] = useState<QuoteItem>(() => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  });


  return (
    <div className="max-w-lg mx-auto mb-8 px-4">
      <div className="flex items-start gap-2 text-center justify-center">
        <Quote className="size-6 text-muted-foreground/20 mt-0.5 shrink-0" />
        <p className="text-xs text-muted-foreground/40 leading-relaxed italic">
          &ldquo;{quote.quote}&rdquo;
          <span className="text-muted-foreground/30 not-italic"> — {quote.author}</span>
        </p>
      </div>
    </div>
  );
}

