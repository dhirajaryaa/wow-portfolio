'use client'
import { useTheme } from 'next-themes'
import GitHubCalendar from 'react-github-calendar'

function GithubActivity({ username }) {
  const { resolvedTheme } = useTheme();
  return (
    <GitHubCalendar username={username}
      colorScheme={resolvedTheme || 'light'}
      year={new Date().getFullYear()}
      fontSize={12}
    />
  )
}

export default GithubActivity