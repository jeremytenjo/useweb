import { useState, useCallback, useEffect } from 'react'

export type Props = {
  fetcher: (result: any) => void
  autoExec?: boolean
  defaultData?: any
  onResult?: (result: any) => void
  onError?: (error: any) => void
  onLoading?: (loading: boolean) => void
}

export type Return = {
  loading: boolean
  error: any
  result: any
  exec: (payload?: any) => void
}

/**
 * @example
 * const promise = useAsync({
 * fetcher
 * })
 */
export default function useAsync({
  fetcher,
  autoExec,
  defaultData,
  onResult,
  onError,
  onLoading,
}: Props): Return {
  const [result, setResult] = useState(defaultData)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  const exec = useCallback(
    async (payload?: any) => {
      if (loading) return null

      try {
        setLoading(true)
        onLoading && onLoading(true)
        setResult(defaultData)
        setError(null)
        const res = await fetcher(payload)
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
    [fetcher],
  )

  useEffect(() => {
    if (autoExec) exec()
  }, [exec, autoExec])

  return { loading, error, result, exec }
}
