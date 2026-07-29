import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SkillsSection from "@/components/home/SkillsSection";
import ProjectList from "@/components/home/ProjectList";
import InterestsSection from "@/components/home/InterestsSection";

export default function Home() {
  return (
    <main className="w-full h-full px-4">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectList />
      <InterestsSection />
    </main>
  );
}
