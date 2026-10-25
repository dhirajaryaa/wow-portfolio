"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { ActivityCalendar, type ThemeInput } from "react-activity-calendar";
import { useTheme } from "next-themes";
import { useIsSmallScreen } from "@/hooks/use-mobile";
import type { GitHubActivity } from "@/lib/fetch-activity";
import { Button } from "../ui/button";

const subscribe = () => () => {};

const useIsMounted = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

/** theme-matched neutral scale — foreground shades with clear contrast */
const activityTheme: ThemeInput = {
  light: ["#ececec", "#c7c7c7", "#8a8a8a", "#454545", "#171717"],
  dark: ["#2a2a2a", "#565656", "#909090", "#c4c4c4", "#fafafa"],
};

export const RenderActivity = ({ data }: { data: GitHubActivity }) => {
  const isSmallScreen = useIsSmallScreen();
  const mounted = useIsMounted();
  const { resolvedTheme } = useTheme();

  const currentYear = new Date().getFullYear();

  // available years sorted descending
  const availableYears = useMemo(() => {
    const years = Object.keys(data.total).sort((a, b) => Number(b) - Number(a));

    return years.length > 0 ? years : [String(currentYear)];
  }, [data.total, currentYear]);

  // default to the current year, falling back to the most recent one
  const [selectedYear, setSelectedYear] = useState<string>(() =>
    availableYears.includes(String(currentYear))
      ? String(currentYear)
      : availableYears[0],
  );

  // filter contributions for the selected year
  const filteredContributions = useMemo(
    () =>
      data.contributions.filter((item) => item.date.startsWith(selectedYear)),
    [data.contributions, selectedYear],
  );

  const totalContributions =
    data.total[selectedYear] ??
    filteredContributions.reduce((sum, item) => sum + item.count, 0);

  if (!mounted) {
    return <div className="bg-muted h-32 w-full animate-pulse rounded-lg" />;
  }

  return (
    <div className="flex flex-col gap-3">
      {/* activity graph */}
      <div
        className="scrollbar-none w-full overflow-x-auto"
        role="img"
        aria-label={`GitHub contribution activity for ${selectedYear}`}
      >
        <ActivityCalendar
          className="mx-auto w-full"
          data={filteredContributions}
          blockSize={isSmallScreen ? 6 : 9}
          blockMargin={isSmallScreen ? 2 : 4}
          fontSize={isSmallScreen ? 10 : 12}
          showMonthLabels={false}
          showTotalCount={false}
          theme={activityTheme}
          colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
          tooltips={{
            activity: {
              text: (activity) => {
                const dateObj = new Date(activity.date + "T00:00:00Z");
                const dateStr = new Intl.DateTimeFormat("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  timeZone: "UTC",
                })
                  .format(dateObj)
                  .toLowerCase();

                const countText =
                  activity.count === 0
                    ? "no activity"
                    : `${activity.count} ${
                        activity.count === 1 ? "activity" : "activities"
                      }`;

                return `${countText} on ${dateStr}`;
              },
              placement: "top",
              offset: 6,
              hoverRestMs: 300,
              transitionStyles: {
                duration: 100,
              },
              withArrow: true,
            },
          }}
        />
      </div>

      <div className="text-muted-foreground flex flex-col items-center justify-center gap-2 pt-1 text-xs md:flex-row md:justify-between">
        <span className="hidden md:inline">My first commit on 16 Apr 2024</span>

        <div className="flex items-center gap-1.5">
          <span className="mr-1 tabular-nums">
            {totalContributions.toLocaleString("en-US")} contributions
          </span>
          {availableYears.slice(0, 4).map((year) => (
            <Button
              key={year}
              type="button"
              size="xs"
              variant={selectedYear === year ? "default" : "outline"}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
