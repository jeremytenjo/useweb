import useAsync from '../../../../../data/useAsync'

export default function useFetching({ props }) {
  const fetcherRes = useAsync(props.fetcher, { autoExec: props.fetcher })
  const promise = props.fetcher ? fetcherRes : props.dataHook

  useEffect(() => {
    props.dataHook && props.dataHook.exec(props.dataHookExecData)
  }, [])

  return promise
}
