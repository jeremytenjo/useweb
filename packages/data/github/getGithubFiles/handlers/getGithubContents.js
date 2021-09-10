import { Octokit } from '@octokit/core'

export default async function getGithubContents({ owner, repo, path }) {
  try {
    const octokit = new Octokit({ auth: process.env.LIB_GITHUB_PERSONAL_ACCESS_TOKEN })
    const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner,
      repo,
      path,
    })

    return response
  } catch (error) {
    console.log(error)
  }
}
