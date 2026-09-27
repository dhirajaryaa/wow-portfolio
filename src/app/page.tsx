import { Container } from "@/components/common/container";
import { AboutSection } from "@/components/home/about";
import { FeatureProject } from "@/components/home/feature-project";
import { FeatureTool } from "@/components/home/feature-tool";
import { HeroSection } from "@/components/home/hero";

export default function HomePage() {
  return (
    <Container className="py-12 sm:py-20">
      
     <HeroSection />
     <AboutSection />
      <hr />
     <FeatureProject />
      <hr />
      <FeatureTool />
      <hr />
    </Container>
  )
}