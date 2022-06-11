import React from 'react'

import useData from './useData'
import Ui from './Ui'
/**
 * Test fetchers and dataHooks
 * @param  {} fetcher
 * @param  {} dataHook
 * @example
 * <TestDataHookDashboard fetcher={fetcher} />
 */
export default function TestDataHookDashboard(props) {
  const data = useData(props)

  return <Ui {...data} />
}
