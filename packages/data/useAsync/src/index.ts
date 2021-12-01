import { useState, useCallback, useEffect } from 'react'

type Options = {
  autoExec?: boolean
  onResult?: (result: any) => void
  onError?: (error: any) => void
  onLoading?: (loading: boolean) => void
}

type Return = {
  loading: boolean
  error: any
  result: any
  exec: (payload?: any) => void
}

/**
 * @example
 * const promise = useAsync(fetcher)
 */
export default function useAsync(
  fetcher: (result: any) => void,
  options?: Options,
): Return {
  const [loading, setLoading] = useState(null)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const exec = useCallback(
    async (payload?: any) => {
      if (loading) return null

      try {
        setLoading(true)
        options?.onLoading && options?.onLoading(true)
        setResult(null)
        setError(null)
        const res = await fetcher(payload)
        setResult(res)
        options?.onResult && options?.onResult(res)
        return res
      } catch (error) {
        setError(error)
        options?.onError && options?.onError(error)
      } finally {
        setLoading(false)
        options?.onLoading && options?.onLoading(false)
      }
    },
    [fetcher],
  )

  useEffect(() => {
    if (options?.autoExec) exec()
  }, [exec, options?.autoExec])

  return { loading, error, result, exec }
}
