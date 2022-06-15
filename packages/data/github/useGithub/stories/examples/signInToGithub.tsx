import React from 'react'

import TestDataHookDashboard from '../../../../../dataDisplay/TestDataHookDashboard'
import useGithub from '../..'

export default function useSignInStory() {
  const github = useGithub()

  return <TestDataHookDashboard dataHook={github.signInToGithub} />
}
