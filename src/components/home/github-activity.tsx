import { Button } from "@/components/ui/button";
import { getGitHubActivity } from "@/lib/fetch-activity";
import { ActivityCalendar } from "react-activity-calendar";
import { RenderActivity } from "./render-activity";





export const GithubActivity = async () => {
  const data = await getGitHubActivity("dhirajaryaa");

  const currentYear = new Date().getFullYear();

  const currentYearActivity = data.contributions.filter((item) =>
    item.date.startsWith(String(currentYear)),
  );


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
          className="hover:text-foreground text-muted-foreground truncate"
        >
          {data.total[currentYear] ?? 0} contr. on {currentYear}
        </Button>
      </div>
      <div className="w-full overflow-x-auto">
        <RenderActivity contribution={data.contributions} />
      </div>
    </section>
  );
};
