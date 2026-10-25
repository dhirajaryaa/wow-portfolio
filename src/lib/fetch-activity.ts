export type GitHubContribution = {
  date: string;
  count: number;
  level: number;
};

export type GitHubActivity = {
  total: Record<string, number>;
  contributions: GitHubContribution[];
};

const GITHUB_ACTIVITY_API = "https://github-contributions-api.jogruber.de/v4";

//? fetch github activity
export async function getGitHubActivity(
  username: string,
): Promise<GitHubActivity | null> {
  try {
    const res = await fetch(`${GITHUB_ACTIVITY_API}/${username}`, {
      next: {
        revalidate: 14400, // 4 hours
      },
    });

    if (!res.ok) {
      throw new Error(`GitHub activity API responded with ${res.status}`);
    }

    return (await res.json()) as GitHubActivity;
  } catch (error) {
    // A third-party API should never take the whole home page down.
    console.error("Failed to fetch GitHub activity:", error);
    return null;
  }
}
