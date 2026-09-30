import { Container } from "@/components/common/container";
import { AboutSection } from "@/components/home/about";
import { BeyondCode } from "@/components/home/beyond-code";
import { FeatureProject } from "@/components/home/feature-project";
import { FeatureTool } from "@/components/home/feature-tool";
import { GithubActivity } from "@/components/home/github-activity";
import { HeroSection } from "@/components/home/hero";
import { WritingSection } from "@/components/home/writing";

export default function HomePage() {
  return (
    <Container className="py-12 sm:py-20 ">

      <HeroSection />
      <AboutSection />
      <hr className="mt-4" />
      <FeatureProject />
      <hr className="mt-4" />
      <FeatureTool />
      <hr className="mt-4" />
      <GithubActivity />
      <hr className="mt-4" />
      <WritingSection />
      <hr className="mt-4" />
      <BeyondCode />
    </Container>
  )
}
