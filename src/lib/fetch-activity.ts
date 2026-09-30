export type GitHubContribution = {
    date: string;
    count: number;
    level: number;
};

//? fetch github activity
export async function getGitHubActivity(username: string) {
    const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${username}`,
        {
            next: {
                revalidate: 14400, // 6 hour
            },
        },
    );

    if (!res.ok) {
        throw new Error("Failed to fetch GitHub activity");
    }

    const data: {
        total: Record<string, number>;
        contributions: GitHubContribution[];
    } = await res.json();

    return data;
};