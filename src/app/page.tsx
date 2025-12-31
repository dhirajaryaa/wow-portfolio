import GithubActivity from "@/components/home/GithubActivity";
import Section from "@/components/common/Section";
import HeroSection from "@/components/home/HeroSection";
import MySetup from "@/components/home/MySetup";
import ProjectCard from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { profileInfo } from "@/config/about";
import { projects } from "@/config/project";
import Link from "next/link";
import ProjectList from "@/components/home/ProjectList";


export default function Home() {
  return (
    <>
      <main className="w-full h-full p-4">
        {/* hero  */}
        <HeroSection />

        {/* projects  */}
       <ProjectList />

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
