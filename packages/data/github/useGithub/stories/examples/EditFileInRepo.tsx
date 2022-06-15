import React from 'react'

import TestDataHookDashboard from '../../../../../dataDisplay/TestDataHookDashboard'
import useGithub from '../..'

export default function EditFileInRepo() {
  const github = useGithub()

  const fetcher = async () => {
    const fileInfo = await github.octokit.repos.getContent({
      owner: 'jeremytenjo',
      repo: 'github-api-test',
      path: 'readme.md',
    })

    const res = await github.octokit.repos.createOrUpdateFileContents({
      owner: 'jeremytenjo',
      repo: 'github-api-test',
      path: 'readme.md',
      content: window.btoa('Updated readme!!!'),
      message: 'commit message yo',
      sha: fileInfo.data.sha,
    })

    return res
  }

  // in app promise = useAsync(fetcher)

  return <TestDataHookDashboard fetcher={fetcher} />
}
