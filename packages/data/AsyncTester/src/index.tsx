import React from 'react'
import useAsync, { type UseAsyncProps } from '@useweb/use-async'
import FetchingUi from '@useweb/fetching-ui'

export type AsyncTesterProps = UseAsyncProps

export default function AsyncTester(props: AsyncTesterProps) {
  const func = useAsync(props)

  return (
    <FetchingUi
      onClick={() => func.exec()}
      loading={func.loading}
      error={func.error}
      result={func.result}
    />
  )
}
