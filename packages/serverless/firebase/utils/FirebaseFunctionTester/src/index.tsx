import React from 'react'
import FetchingUi from '@useweb/fetching-ui'
import useFirebaseFunction from '@useweb/use-firebase/useFirebaseFunction'

export type FirebaseFunctionTesterProps = { functionName: string; payload?: any }

export default function FirebaseFunctionTester({
  functionName,
  payload,
}: FirebaseFunctionTesterProps) {
  const func = useFirebaseFunction({
    name: functionName,
  })

  return (
    <FetchingUi
      onClick={() => func.exec(payload ? { data: payload } : undefined)}
      loading={func.loading}
      error={func.error}
      result={func.result}
    />
  )
}
