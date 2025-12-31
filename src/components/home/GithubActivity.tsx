"use client";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";

function GithubActivity({ username }: { username: string }) {
  const { resolvedTheme } = useTheme();
  return (
    <GitHubCalendar
      username={username}
      colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
      year={new Date().getFullYear()}
      fontSize={12}
      blockSize={9}
    />
  );
}

export default GithubActivity;
