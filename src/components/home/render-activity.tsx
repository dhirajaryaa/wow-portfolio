"use client";

import { ActivityCalendar } from "react-activity-calendar";
import { useIsSmallScreen } from "@/hooks/use-mobile";
import { GitHubContribution } from "@/lib/fetch-activity";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const subscribe = () => () => {};

const useIsMounted = () =>
    useSyncExternalStore(
        subscribe,
        () => true,
        () => false,
    );

export const RenderActivity = ({ contribution }: { contribution: GitHubContribution[] }) => {
    const isSmallScreen = useIsSmallScreen();

    const mounted = useIsMounted();
    const { resolvedTheme } = useTheme();

    if (!mounted) {
        return (
            <div className="h-28 w-full animate-pulse rounded-lg bg-muted" />
        );
    }

    return (
        <ActivityCalendar
            data={contribution}
            blockSize={isSmallScreen ? 6 : 9}
            blockMargin={isSmallScreen ? 2 : 4}
            fontSize={isSmallScreen ? 10 : 12}
            showMonthLabels={false}
            showTotalCount={false}
            tooltips={{
                activity: {
                    text: ({ level, date }) =>
                        `${level} activities on ${new Date(date).toLocaleDateString('en-US')}`,
                    placement: 'top',
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
    )
}