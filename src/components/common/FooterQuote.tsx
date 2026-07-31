"use client";

import { quotes } from "@/config/quotes";
import { Quote } from "lucide-react";

const dayIndex = Math.floor(Date.now() / 86_400_000);
const randomQuote = quotes[dayIndex % quotes.length];

function FooterQuote() {
  if (!randomQuote) return null;

  return (
    <div className="max-w-lg mx-auto mb-8 px-4">
      <div className="flex items-start gap-2 text-center justify-center">
        <Quote className="size-6 text-muted-foreground/20 mt-0.5 shrink-0" />
        <p className="text-xs text-muted-foreground/40 leading-relaxed italic">
          &ldquo;{randomQuote.quote}&rdquo;
          <span className="text-muted-foreground/30 not-italic"> — {randomQuote.author}</span>
        </p>
      </div>
    </div>
  );
}

export default FooterQuote;
