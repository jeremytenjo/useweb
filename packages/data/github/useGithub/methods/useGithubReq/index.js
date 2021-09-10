import { request } from '@octokit/request'

import useAsync from '../../../../useAsync'

const useGithubReq = ({ githubAccessToken, requestUrl }) => {
  const fetcher = async (req = requestUrl, options = {}) => {
    const result = await request(req, {
      headers: {
        authorization: `token ${githubAccessToken}`,
      },
      ...options,
    })

    return result
  }

  const githubReq = useAsync(fetcher)

  return { ...githubReq }
}

export default useGithubReq
