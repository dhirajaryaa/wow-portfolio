import GitHubCalendar from 'react-github-calendar'

function GithubActivity({ username }) {
  return (
    <GitHubCalendar username={username}
      year={new Date().getFullYear()}
      fontSize={12}
    />
  )
}

export default GithubActivity