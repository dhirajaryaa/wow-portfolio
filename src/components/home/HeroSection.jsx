import Image from "next/image";
import { Button } from "../ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";
import { Send } from "lucide-react";
import SocialLinks from "../common/SocialLinks";
import { profileInfo } from "@/config/about";
import { SkillBadge } from "./SkillBadge";

function HeroSection() {
  return (
    <section id="hero" className="container flex flex-col gap-2 mt-8">
      {/* hero img  */}
      <div className="w-full h-full">
        <div className="inline-block relative">
          <Image
            src="/assets/hero.webp"
            alt="Dhiraj Arya"
            width={200}
            height={200}
            className="size-25 rounded-full dark:bg-yellow-500 bg-violet-500"
          />
          {/* online status [vscode] */}
          <div className="absolute bottom-0 right-3 border size-6 rounded-full bg-muted flex items-center justify-center">
            <div className="bg-green-400 size-2 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
      {/* heading  */}
      <strong className="text-2xl font-semibold text-foreground/90">
        {"Hii, I'm"}
      </strong>
      <h1 className="text-4xl font-semibold text-foreground/90">
        Dhiraj Arya
        <span className="text-foreground/50 text-3xl font-medium">
          {" — "} {profileInfo.tagline}
        </span>
      </h1>
      {/* about me  */}
      <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-[15px] text-foreground/60 whitespace-pre-wrap">
        <span className="whitespace-pre-wrap">
          I build modern eye-catching web apps using
        </span>
        <SkillBadge name={"React"} icon={"/skills/react.svg"} />,
        <SkillBadge name={"Node js"} icon={"/skills/nodejs.svg"} />,
        <SkillBadge name={"Express js"} icon={"/skills/express.svg"} iconClassName={"dark:invert"} />, and
        <SkillBadge name={"MongoDB"} icon={"/skills/mongodb.svg"} />,
        stack and am now exploring
        <SkillBadge name={"Next.js"} icon={"/skills/nextjs.svg"} iconClassName={"dark:invert"} /> and
        <SkillBadge name={"Typescript"} icon={"/skills/typescript.svg"} />
        <span className="whitespace-pre-wrap">
          to create faster, more scalable experiences.
        </span>
      </div>
      {/* cta btn  */}
      <div className="flex gap-4 mt-8">
        <Button variant={"outline"} asChild>
          <a
            href={profileInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="-rotate-6" /> Resume/CV
          </a>
        </Button>
        <Button asChild>
          <Link href={"/contact"}>
            <Send /> Get In Touch
          </Link>
        </Button>
      </div>
      {/* social links  */}
      <SocialLinks socialLinks={profileInfo.socialLinks} />
    </section>
  );
}

export default HeroSection;
