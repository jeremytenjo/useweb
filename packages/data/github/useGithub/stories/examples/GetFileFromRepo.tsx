import React from 'react'

import TestDataHookDashboard from '../../../../../dataDisplay/TestDataHookDashboard'
import useGithub from '../..'

export default function GetFileFromRepo() {
  const github = useGithub()

  const fetcher = async () => {
    // https://octokit.github.io/rest.js/v18#repos-get-content
    const res = await github.octokit.repos.getContent({
      owner: 'jeremytenjo',
      repo: 'github-api-test',
      path: 'colors.js',
    })

    return res
  }

  return <TestDataHookDashboard fetcher={fetcher} />
}
