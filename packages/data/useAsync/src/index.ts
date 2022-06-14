import { useState, useCallback, useEffect } from 'react'

export type UseAsyncProps = {
  fn: (result: any) => void
  autoExec?: boolean
  defaultData?: any
  onResult?: (result: any) => void
  onError?: (error: any) => void
  onLoading?: (loading: boolean) => void
}

export type UseAsyncReturn = {
  loading: boolean
  error: any
  result: any
  exec: (payload?: any) => void
}

/**
 * @example
 * const promise = useAsync({
 * fn
 * })
 */
export default function useAsync({
  fn,
  autoExec,
  defaultData,
  onResult,
  onError,
  onLoading,
}: UseAsyncProps): UseAsyncReturn {
  const [result, setResult] = useState(defaultData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const exec = useCallback(
    async (payload?: any) => {
      if (loading) return null

      try {
        setLoading(true)
        onLoading && onLoading(true)
        setResult(defaultData)
        setError(null)
        const res = await fn(payload)
        setResult(res)
        onResult && onResult(res)
        return res
      } catch (error) {
        setError(error)
        onError && onError(error)
      } finally {
        setLoading(false)
        onLoading && onLoading(false)
      }
    },
    [fn],
  )

  useEffect(() => {
    if (autoExec) exec()
  }, [exec, autoExec])

  return { loading, error, result, exec }
}
