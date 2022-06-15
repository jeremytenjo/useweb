import React from 'react'

import useGithub from '../..'
import TestDataHookDashboard from '../../../../../dataDisplay/TestDataHookDashboard'

export default function GetRepos() {
  const github = useGithub()

  const fetcher = async () => {
    const res = await github.octokit.repos.listForAuthenticatedUser()

    return res
  }

  return <TestDataHookDashboard fetcher={fetcher} />
}
