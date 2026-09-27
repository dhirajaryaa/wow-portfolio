"use client";

import { ActivityCalendar } from "react-activity-calendar";
import { useIsSmallScreen } from "@/hooks/use-mobile";
import { GitHubContribution } from "@/lib/fetch-activity";

export const RenderActivity = ({ contribution }: { contribution: GitHubContribution[] }) => {

    const isSmallScreen = useIsSmallScreen();

    return (
        <ActivityCalendar
            data={contribution}
            blockSize={isSmallScreen ? 6 : 8}
            blockMargin={isSmallScreen ? 2 : 4}
            fontSize={isSmallScreen ? 10 : 12}
            showMonthLabels={false}
            showTotalCount={false}
        />
    )
}