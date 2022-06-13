import React from 'react'
import useFetch, { type RequestProps } from '@useweb/use-fetch'
import FetchingUi from '@useweb/fetching-ui'

export type FetchTesterProps = { url: string; payload?: RequestProps }

export default function FetchTester({ url, payload }: FetchTesterProps) {
  const func = useFetch({ url })

  return (
    <FetchingUi
      onClick={() => func.request(payload)}
      loading={func.fetching}
      error={func.error}
      result={func.response}
    />
  )
}
