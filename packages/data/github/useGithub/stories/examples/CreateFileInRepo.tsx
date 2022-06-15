import React from 'react'

import TestDataHookDashboard from '../../../../../dataDisplay/TestDataHookDashboard'
import useGithub from '../..'

/** 
 returns "HttpError: Invalid request.\n\n\"sha\" wasn't supplied." if file already created, needs sha to update the file
 */
export default function CreateFileInRepo() {
  const github = useGithub()

  const fetcher = async () => {
    const res = await github.octokit.repos.createOrUpdateFileContents({
      owner: 'jeremytenjo',
      repo: 'github-api-test',
      path: 'woop.js',
      content: window.btoa('hello from the component side'),
      message: 'commit message yo',
    })

    return res
  }

  return <TestDataHookDashboard fetcher={fetcher} />
}
