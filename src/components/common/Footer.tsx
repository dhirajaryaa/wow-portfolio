import Link from "next/link";
import { profileInfo, lastSiteUpdate } from "@/config/profile";
import FooterQuote from "@/components/common/FooterQuote";

function Footer() {
  return (
    <footer className="w-full border-t mt-20 py-8">
      <FooterQuote />
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
