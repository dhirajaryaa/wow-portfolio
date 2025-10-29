import Section from "@/components/common/Section";
import SocialLinks from "@/components/common/SocialLinks";
import { Button } from "@/components/ui/button";
import { profileInfo } from "@/config/about";
import { FileText, Send, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/config/project";
import GithubActivity from "@/components/common/GithubActivity";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { ArrowRight } from "lucide-react";
import { Code2 } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="w-full h-full p-4">
        {/* hero  */}
        <section id="hero" className="container flex flex-col gap-2 mt-8">
          {/* hero img  */}
          <div className="w-full h-full">
            <div className="inline-block relative">
              <Image
                src="/assets/hero.webp"
                alt="Dhiraj Arya"
                width={200}
                height={200}
                className="size-25 rounded-full object-cover"
              />
              {/* online status [vscode] */}
              <div className="absolute bottom-0 right-3 border size-6 rounded-full bg-muted flex items-center justify-center">
                <div className="bg-green-400 size-2 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
          {/* heading  */}
          <strong className="text-2xl font-semibold text-foreground/90">
            Hii, I'm
          </strong>
          <h1 className="text-4xl font-medium text-foreground/90 ml-2">
            Dhiraj Arya
            <span className="text-foreground/50 text-3xl">
              {" — "} {profileInfo.tagline}
            </span>
          </h1>
          {/* about me  */}
          <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base text-foreground/60 whitespace-pre-wrap">
            <span className="whitespace-pre-wrap">
              I build modern eye-catching web apps using
            </span>
            <a
              href="https://react.dev"
              target="_blank"
              className="inline-flex gap-1 bg-muted text-foreground px-2 rounded border border-foreground/50 border-dashed py-0.5"
            >
              <Image
                src={"/skills/react.svg"}
                alt="react"
                width={16}
                height={16}
              />
              <p className="text-sm ml-1">React</p>
            </a>
            ,
            <a
              href="https://nodejs.org"
              target="_blank"
              className="inline-flex gap-1 bg-muted text-foreground px-2 rounded border border-foreground/50 border-dashed py-0.5"
            >
              <Image
                src={"/skills/nodejs.svg"}
                alt="nodejs"
                width={16}
                height={16}
              />
              <p className="text-sm ml-1">Node js</p>
            </a>
            ,
            <a
              href="https://expressjs.com"
              target="_blank"
              className="inline-flex gap-1 bg-muted text-foreground px-2 rounded border border-foreground/50 border-dashed py-0.5"
            >
              <Image
                src={"/skills/express.svg"}
                alt="express"
                width={16}
                height={16}
                className="dark:invert invert-0"
              />
              <p className="text-sm ml-1">Express js</p>
            </a>
            and
            <a
              href="https://www.mongodb.com"
              target="_blank"
              className="inline-flex gap-1 bg-muted text-foreground px-2 rounded border border-foreground/50 border-dashed py-0.5"
            >
              <Image
                src={"/skills/mongodb.svg"}
                alt="mongodb"
                width={16}
                height={16}
              />
              <p className="text-sm ml-1">MongoDB</p>
            </a>
            stack and am now exploring
            <a
              href="https://nextjs.org"
              target="_blank"
              className="inline-flex gap-1 bg-muted text-foreground px-2 rounded border border-foreground/50 border-dashed py-0.5"
            >
              <Image
                src={"/skills/nextjs.svg"}
                alt="nextjs"
                width={16}
                height={16}
                className="dark:invert invert-0"
              />
              <p className="text-sm ml-1">Next.js</p>
            </a>
            and
            <a
              href="https://www.typescriptlang.org"
              target="_blank"
              className="inline-flex gap-1 bg-muted text-foreground px-2 rounded border border-foreground/50 border-dashed py-0.5"
            >
              <Image
                src={"/skills/typescript.svg"}
                alt="typescript"
                width={16}
                height={16}
              />
              <p className="text-sm ml-1">Typescript</p>
            </a>
            <span className="whitespace-pre-wrap">
              to create faster, more scalable experiences.
            </span>
          </div>
          {/* cta btn  */}
          <div className="flex gap-4 mt-8">
            <Button variant={"outline"} size={"lg"} asChild>
              <a
                href={profileInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="-rotate-6" /> Resume/CV
              </a>
            </Button>
            <Button size={"lg"} asChild>
              <Link href={"/contact"}>
                <Send /> Get In Touch
              </Link>
            </Button>
          </div>
          {/* social links  */}
          <SocialLinks socialLinks={profileInfo.socialLinks} />
        </section>
        {/* projects  */}
        <Section title={"Projects"} hintText={"my proof-of-work✨"}>
          <div className="grid  grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="w-full flex justify-center items-center mt-8">
            <Button size={"lg"} variant={'outline'} asChild>
              <Link href="/pow">
                Show More
              </Link>
            </Button>
          </div>
        </Section>
        {/* github contribution  */}
        <Section title={"GitHub Activity"} hintText={"my coding journey💻"}>
          <div className="border border-dashed border-foreground/60 my-6 p-6 rounded-xl">
            <GithubActivity username={profileInfo.githubUsername} />
          </div>
        </Section>
        {/* my setup  */}
        <Section title={"Setup"} hintText={'my coding launchpad🚀'}>
          <div className="space-y-4 my-6">
            {/* gears  */}
            <Item variant="muted" className={'rounded-xl'} asChild>
              <Link href="/setup/gears">
                <ItemMedia variant="icon">
                  <Settings />
                </ItemMedia>
                <ItemContent className={'gap-0'}>
                  <ItemTitle>Gear used</ItemTitle>
                  <ItemDescription className={'text-xs'}>Gears I use to stay productive.</ItemDescription>
                </ItemContent>
                <ItemActions >
                  <ArrowRight size={16} />
                </ItemActions>
              </Link>
            </Item>
            {/* vscode  */}
            <Item variant="muted" className={'rounded-xl'} asChild>
              <Link href="/setup/vscode-setup">
                <ItemMedia variant="icon">
                  <Code2 />
                </ItemMedia>
                <ItemContent className={'gap-0'}>
                  <ItemTitle>VS Code Setup</ItemTitle>
                  <ItemDescription className={'text-xs'}>My VS Code setup, optimized for coding and a clean dev experience.</ItemDescription>
                </ItemContent>
                <ItemActions >
                  <ArrowRight size={16} />
                </ItemActions>
              </Link>
            </Item>
          </div>
        </Section>
      </main>
    </>
  );
}
