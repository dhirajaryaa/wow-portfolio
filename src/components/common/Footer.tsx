import Link from "next/link";
import { profileInfo } from "@/config/profile";

function Footer() {
  return (
    <footer className="w-full border-t mt-20 py-8">
      <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground/60 justify-center">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <Link href="/pow" className="hover:text-foreground transition-colors">Work</Link>
        <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
        <a href={profileInfo.resumeLink} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Resume</a>
        <Link href="/gears" className="hover:text-foreground transition-colors">Gears</Link>
        <a href="/rss.xml" className="hover:text-foreground transition-colors">RSS</a>
      </nav>
      <p className="text-center text-xs text-muted-foreground/40 mt-4">
        &copy; {new Date().getFullYear()} Dhiraj Arya. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
