import { Suspense } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { getGitHubActivity } from "@/lib/fetch-activity";
import { RenderActivity } from "./render-activity";

const GITHUB_USERNAME = "dhirajaryaa";
const GITHUB_PROFILE = `https://github.com/${GITHUB_USERNAME}`;

const ActivitySkeleton = () => (
  <div className="bg-muted h-32 w-full animate-pulse rounded-lg" />
);

const ActivityContent = async () => {
  const data = await getGitHubActivity(GITHUB_USERNAME);

  if (!data) {
    return (
      <p className="text-muted-foreground text-xs">
        GitHub activity is unavailable right now.{" "}
        <a
          href={GITHUB_PROFILE}
          target="_blank"
          rel="noreferrer"
          className="text-foreground underline underline-offset-[3px]"
        >
          See it on GitHub
        </a>
        .
      </p>
    );
  }

  return <RenderActivity data={data} />;
};

export const GithubActivity = () => {
  return (
    <section className="flex flex-col justify-center gap-6 py-10 md:py-14">
      <SectionHeading
        title="GitHub Activity"
        hint="some squares and late night cooking."
      >
        <a
          href={GITHUB_PROFILE}
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-foreground inline-flex shrink-0 items-center gap-1 text-xs transition-colors hover:underline"
        >
          @{GITHUB_USERNAME}
          <ArrowUpRight className="size-3" />
        </a>
      </SectionHeading>

      <Suspense fallback={<ActivitySkeleton />}>
        <ActivityContent />
      </Suspense>
    </section>
  );
};
