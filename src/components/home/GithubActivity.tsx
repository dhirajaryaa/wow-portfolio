"use client";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";

function GithubActivity({
  username,
  loading,
}: {
  username: string;
  loading?: boolean;
}) {
  const { resolvedTheme } = useTheme();

  return (
    <>
      {loading ? (
        <GitHubCalendar
          username={username}
          colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
          fontSize={12}
          loading={true}
          blockSize={9}
          maxLevel={10}
        />
      ) : (
        <GitHubCalendar
          username={username}
          colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
          fontSize={12}
          blockSize={9}
          maxLevel={10}
        />
      )}
    </>
  );
}

export default GithubActivity;
