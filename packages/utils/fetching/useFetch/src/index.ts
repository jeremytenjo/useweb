import { useEffect, useRef, useState } from 'react'

export type UseFetchProps = {
  url?: string
  method?: 'get' | 'post' | 'HEAD'
  // eslint-disable-next-line no-undef
  headers?: ResponseInit['headers']
  fetchOnMount?: boolean
  onResponse?: (responseData?: any) => any
  onError?: (error?: any) => any
}

export type RequestProps =
  | {
      body?: any
      headers?: UseFetchProps['headers']
      mode?: any
      url?: UseFetchProps['url']
      method?: UseFetchProps['method']
      credentials?: any
    }
  | undefined

export type UseFetchReturn = {
  fetching: boolean
  request: (RequestProps?: any) => any
  error: any
  response: any
  abort: (params?: any) => any
}

export default function useFetch({
  url: defaultUrl,
  method: defaultMethod = 'get',
  headers: defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  fetchOnMount,
  onResponse,
  onError,
}: UseFetchProps = {}) {
  const aborController = useRef(null)
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)
  const fetchingRef = useRef(null)

  useEffect(() => {
    if (fetchOnMount && defaultUrl) {
      request()
    }
  }, [])

  useEffect(() => {
    initializeAbortController()
    return () => {
      fetching && abort()
    }
  }, [])

  const request = async (params: RequestProps = {}) => {
    const { current: isFetching } = fetchingRef
    if (isFetching) return null
    setError(null)
    const {
      body = null,
      headers = defaultHeaders,
      mode = 'cors',
      url: dynamicUrl = defaultUrl,
      method = defaultMethod,
      credentials,
    } = params

    try {
      setFetching(true)
      fetchingRef.current = true
      let res = null
      if (method === 'get' || method === 'HEAD') {
        res = await fetch(dynamicUrl, {
          signal: aborController.current?.signal,
          credentials,
          mode,
        })
        res = await res.json()
      } else {
        res = await fetch(dynamicUrl, {
          credentials,
          headers,
          method,
          mode,
          body: JSON.stringify(body),
        })
        res = await res.json()
      }

      if (res.error) throw res.error

      setResponse(res)
      onResponse && onResponse(res)
      return res
    } catch (error) {
      onError && onError(error)

      if (error.name === 'AbortError') {
        setResponse(false)
        return { aborted: true }
      } else {
        setError(error)
        return { error }
      }
    } finally {
      setFetching(false)
      fetchingRef.current = false
    }
  }

  const initializeAbortController = () => {
    aborController.current = abortControllerIsSupported() ? new AbortController() : {}
  }

  const abort = () => {
    if (abortControllerIsSupported() && fetching) {
      aborController.current.abort()
      aborController.current = new AbortController()
    }
  }

  const abortControllerIsSupported = () => 'AbortController' in window

  return { fetching, request, error, response, abort }
}
