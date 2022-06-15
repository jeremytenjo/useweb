import { useEffect } from 'react'

import useAsync from '../../../../../data/useAsync/build/types'

export default function useFetching({ props }) {
  const fetcherRes = useAsync({ fn: props.fetcher, autoExec: props.fetcher })
  const promise = props.fetcher ? fetcherRes : props.dataHook

  useEffect(() => {
    props.dataHook && props.dataHook.exec(props.dataHookExecData)
  }, [])

  return promise
}
