import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ActivityShow } from "@/components/common/activity";
import { GitHubCalendar } from "react-github-calendar";

export const ActivityLoader = () => {
  return <GitHubCalendar loading={true} username={"dhirajaryaa"} />;
};

export const GithubActivity = () => {
  return (
    <section className="flex flex-col justify-center gap-6 py-10 md:py-14">
      {/* heading  */}
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <h2 className="text-foreground font-serif text-lg font-medium">
            # Github Activity
          </h2>
          <p className="text-muted-foreground hidden pl-2 text-xs tracking-wider md:block">
            some green squares and late night cooking.
          </p>
        </div>
        <Button
          variant={"link"}
          className="hover:text-foreground text-muted-foreground"
        >
          1180 commit on last year.
        </Button>
      </div>
      {/*<Suspense fallback={<ActivityLoader />}>*/}
        <ActivityShow />
      {/*</Suspense>*/}
    </section>
  );
};
