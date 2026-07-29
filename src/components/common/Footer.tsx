import Link from "next/link";
import { profileInfo, lastSiteUpdate } from "@/config/profile";
import { quotes } from "@/config/quotes";
import { Quote } from "lucide-react";

function Footer() {
  const quote = quotes.length ? quotes[Math.floor(Math.random() * quotes.length)] : null;

  return (
    <footer className="w-full border-t mt-20 py-8">
      {quote && (
        <div className="max-w-lg mx-auto mb-8 px-4">
          <div className="flex items-start gap-2 text-center justify-center">
            <Quote className="size-6 text-muted-foreground/20 mt-0.5 shrink-0" />
            <p className="text-xs text-muted-foreground/40 leading-relaxed italic">
              &ldquo;{quote.quote}&rdquo;
              <span className="text-muted-foreground/30 not-italic"> — {quote.author}</span>
            </p>
          </div>
        </div>
      )}
      <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground/60 justify-center">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <Link href="/pow" className="hover:text-foreground transition-colors">Work</Link>
        <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
        <a href={profileInfo.resumeLink} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Resume</a>
        <Link href="/gears" className="hover:text-foreground transition-colors">Gears</Link>
        <Link href="/setup" className="hover:text-foreground transition-colors">Setup</Link>
        <a href="/rss.xml" className="hover:text-foreground transition-colors">RSS</a>
      </nav>
      <p className="text-center text-xs text-muted-foreground/40 mt-4">
        &copy; {new Date().getFullYear()} Dhiraj Arya. All rights reserved.
      </p>
      <p className="text-center text-[11px] text-muted-foreground/30 mt-2">
        Last updated — {lastSiteUpdate}
      </p>
    </footer>
  );
}

export default Footer;
