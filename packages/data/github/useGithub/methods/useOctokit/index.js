// https://octokit.github.io/rest.js/v18#repos-create-or-update-file-contents
const { Octokit } = require('@octokit/rest')

const useOktokit = ({ githubAccessToken }) => {
  const octokit = new Octokit({ auth: githubAccessToken })

  return octokit
}

export default useOktokit
