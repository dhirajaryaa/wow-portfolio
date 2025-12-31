import GithubActivity from "@/components/home/GithubActivity";
import Section from "@/components/common/Section";
import HeroSection from "@/components/home/HeroSection";
import MySetup from "@/components/home/MySetup";
import ProjectCard from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { profileInfo } from "@/config/about";
import { projects } from "@/config/project";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <main className="w-full h-full p-4">
        {/* hero  */}
        <HeroSection />

        {/* projects  */}
        <Section
          title={"Projects"}
          hintText={"my proof-of-work✨"}
          className={"mt-18"}
        >
          <div className="grid  grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="w-full flex justify-center items-center mt-8">
            <Button size={"lg"} variant={"outline"} asChild>
              <Link href="/pow">Show More</Link>
            </Button>
          </div>
        </Section>

        {/* github contribution  */}
        <Section
          title={"GitHub Activity"}
          hintText={"my coding journey💻"}
          className={"mt-18"}
        >
          <div className="border border-dashed border-foreground/60 my-6 p-4 rounded-xl flex items-center justify-center">
            <GithubActivity username={profileInfo.githubUsername} />
          </div>
        </Section>

        {/* my setup  */}
        <MySetup />
      </main>
    </>
  );
}
