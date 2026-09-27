import { Container } from "@/components/common/container";
import { AboutSection } from "@/components/home/about";
import { BeyondCode } from "@/components/home/beyond-code";
import { FeatureProject } from "@/components/home/feature-project";
import { FeatureTool } from "@/components/home/feature-tool";
import { GithubActivity } from "@/components/home/github-activity";
import { HeroSection } from "@/components/home/hero";

export default function HomePage() {
  return (
    <Container className="py-12 sm:py-20 ">
      
     <HeroSection />
     <AboutSection />
      <hr />
     <FeatureProject />
      <hr />
      <FeatureTool />
      <hr />
      <GithubActivity />
      <hr />
      <BeyondCode />
    </Container>
  )
}
