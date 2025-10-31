'use client'
import { useTheme } from 'next-themes'
import GitHubCalendar from 'react-github-calendar'

function GithubActivity({ username }) {
  const {theme} = useTheme();
  return (
    <GitHubCalendar username={username}
    colorScheme={theme}
      year={new Date().getFullYear()}
      fontSize={12}
    />
  )
}

export default GithubActivity