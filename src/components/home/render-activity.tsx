"use client";

import { useState, useSyncExternalStore, useMemo } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { useIsSmallScreen } from "@/hooks/use-mobile";
import { GitHubContribution } from "@/lib/fetch-activity";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

const subscribe = () => () => {};

const useIsMounted = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

type ActivityData = {
  total: Record<string, number>;
  contributions: GitHubContribution[];
};

export const RenderActivity = ({ data }: { data: ActivityData }) => {
  const isSmallScreen = useIsSmallScreen();
  const mounted = useIsMounted();
  const { resolvedTheme } = useTheme();

  const currentYear = new Date().getFullYear();

  // Available individual years sorted descending
  const availableYears = useMemo(() => {
    const years = Object.keys(data?.total || {}).sort(
      (a, b) => Number(b) - Number(a)
    );
    if (years.length === 0) return [String(currentYear)];
    return years;
  }, [data?.total, currentYear]);

  // Default to current year (e.g. 2026)
  const [selectedYear, setSelectedYear] = useState<string>(
    String(currentYear)
  );

  // Filter contributions for selected year
  const filteredContributions = useMemo(() => {
    const contributions = data?.contributions || [];
    return contributions.filter((item) =>
      item.date.startsWith(selectedYear)
    );
  }, [data?.contributions, selectedYear]);

  if (!mounted) {
    return (
      <div className="h-28 w-full animate-pulse rounded-lg bg-muted" />
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Activity Graph */}
      <div className="w-full overflow-x-auto">
        <ActivityCalendar
          className="w-full mx-auto"
          data={filteredContributions}
          blockSize={isSmallScreen ? 6 : 9}
          blockMargin={isSmallScreen ? 2 : 4}
          fontSize={isSmallScreen ? 10 : 12}
          showMonthLabels={false}
          showTotalCount={false}
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
                    ? "no activities"
                    : `${activity.count} ${activity.count === 1 ? "activity" : "activities"}`;

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
          colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        />
      </div>

      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between gap-2 pt-1 text-xs text-muted-foreground">
        <span className="hidden md:inline">My first commit on 16 apr 2024</span>

        <div className="flex items-center gap-1.5">
          <span className="mr-1 hidden md:inline">Year:</span>
          {availableYears.slice(0, 4).map((yr) => (
            <Button
              key={yr}
              type="button"
              size="xs"
              variant={selectedYear === yr ? "default" : "outline"}
              onClick={() => setSelectedYear(yr)}
            >
              {yr}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
