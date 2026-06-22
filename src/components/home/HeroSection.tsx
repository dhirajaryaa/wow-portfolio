import Image from "next/image";
import { FileText, Send } from "lucide-react";
import Link from "next/link";
import { profileInfo } from "@/config/profile";
import { SkillBadge } from "@/components/home/SkillBadge";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/common/SocialLinks";

function HeroSection() {
  return (
    <section className="container flex flex-col gap-2 my-8 md:my-20">
      {/* heading */}
      <div className="flex items-start sm:items-center w-fit flex-col sm:flex-row gap-2 sm:gap-4 whitespace-nowrap group cursor-default">
        <strong className="font-medium text-foreground/80 text-2xl sm:text-5xl">
          Hi, I&apos;m
        </strong>
        <div className="flex items-center gap-2 sm:gap-4 sm:flex-row flex-row-reverse">
          <Image
        priority
            src="/assets/hero.webp"
            alt="Dhiraj Arya"
            width={100}
            height={100}
            className="size-14 sm:size-16 rounded-lg border-4 -rotate-6  border-white shadow-2xl shadow-foreground/60 inline-block relative whitespace-nowrap bg-yellow-500"
          />
          <h1 className="inline-block text-[45px] sm:text-6xl font-semibold text-foreground group-hover:underline">
            Dhiraj Arya!
          </h1>
        </div>
      </div>
      {/* tagline  */}
      <div className="text-foreground/80 text-xl sm:text-3xl font-medium flex items-center">
        <span className="text-foreground/50 text-lg sm:text-2xl mr-2">
          I&apos;m a
        </span>
        {profileInfo.tagline}
      </div>

      {/* about  */}
      <p className="mt-4 text-[15px] text-foreground/60 whitespace-break-spaces tracking-wide">
        I build modern web applications with
        <SkillBadge
          name="Next.js"
          icon="/skills/nextjs.svg"
          iconClassName="dark:invert"
        />
        and
        <SkillBadge
          name="TypeScript"
          icon="/skills/typescript.svg"
        />
        , focusing on performance, scalability, and great user experiences.
        Currently exploring AI-powered products and SaaS development.
      </p>

      {/* cta btn  */}
      <div className="flex gap-4 mt-8">
        <Button size="sm" variant={"outline"} asChild>
          <a
            href={profileInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="-rotate-6" /> Resume/CV
          </a>
        </Button>
        <Button  size="sm" asChild>
          <Link href={"/contact"}>
            <Send /> Get in Touch
          </Link>
        </Button>
      </div>
      {/* social links  */}
      <SocialLinks socialLinks={profileInfo.socialLinks} iconOnly={true} />
    </section>
  );
}

export default HeroSection;
