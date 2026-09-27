import { Container } from "@/components/common/container";
import { QuoteBlock } from "@/components/common/quote";
import { AboutSection } from "@/components/home/about";
import { BeyondCode } from "@/components/home/beyond-code";
import { FeatureProject } from "@/components/home/feature-project";
import { FeatureTool } from "@/components/home/feature-tool";
import { GithubActivity } from "@/components/home/github-activity";
import { HeroSection } from "@/components/home/hero";
import { quotes } from "@/lib/config";

export default function HomePage() {
  return (
    <Container className="py-12 pb-4 sm:pt-20 ">
      
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
      <hr />
      <QuoteBlock quote={quotes.home} />
    </Container>
  )
}
