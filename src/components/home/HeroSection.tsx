import Image from "next/image";
import { FileText, Send } from "lucide-react";
import Link from "next/link";
import { profileInfo } from "@/config/profile";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/common/SocialLinks";

function HeroSection() {
  return (
    <section className="flex flex-col gap-4 my-8 md:my-16">
      <p className="text-muted-foreground text-xl flex items-center gap-2">
        Hi
        <span className="inline-block animate-[wave_0.5s_ease-in-out_infinite] origin-[70%_70%] text-2xl mb-1.5">
          👋
        </span>
      </p>
      <div className="flex items-end gap-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          Dhiraj Arya
        </h1>
        <Image
          priority
          src="/assets/hero.webp"
          alt="Dhiraj Arya"
          width={56}
          height={56}
          className="size-12 sm:size-14 rounded-lg border-2 border-border object-cover -rotate-6 shadow-xl shadow-foreground/30 dark:shadow-foreground/20"
        />
      </div>

      <p className="text-lg sm:text-xl text-muted-foreground">
        Self-taught developer — Next.js & MERN
      </p>

      <p className="max-w-xl text-sm sm:text-[15px] text-muted-foreground/70 leading-relaxed">
        I build modern web applications with Next.js,
        TypeScript, and the MERN stack. Focused on creating clean, performant,
        and user-friendly digital experiences.
      </p>

      <div className="flex flex-wrap gap-3 mt-2">
        <Button variant="outline" size="sm" asChild>
          <a href={profileInfo.resumeLink} target="_blank" rel="noopener noreferrer">
            <FileText className="size-3.5" />
            Resume/CV
          </a>
        </Button>
        <Button size="sm" asChild>
          <Link href="/contact">
            <Send className="size-3.5" />
            Get in Touch
          </Link>
        </Button>
      </div>

      <SocialLinks socialLinks={profileInfo.socialLinks} iconOnly={true} />
    </section>
  );
}

export default HeroSection;
