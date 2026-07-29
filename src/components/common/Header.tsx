import Link from "next/link";
import ToggleTheme from "@/components/common/ToggleTheme";
import { profileInfo } from "@/config/profile";

function Header() {
  return (
    <header className="w-full sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="flex items-center justify-between w-full max-w-3xl py-3 px-4 mx-auto">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-foreground hover:opacity-70 transition-opacity"
          >
            DA
          </Link>
          <div className="flex gap-4 sm:gap-5 items-center text-sm">
            <Link href="/pow" className="text-muted-foreground hover:text-foreground transition-colors">
              Work
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <a
              href={profileInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
        <ToggleTheme />
      </nav>
    </header>
  );
}

export default Header;
