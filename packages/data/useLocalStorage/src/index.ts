import { useState } from 'react'
import useSWRImmutable from 'swr/immutable'
import { Storage } from '@capacitor/storage'

type Options = {
  onGet?: (result: any) => void
  onUpdate?: (result: any) => void
  onError?: (error: any) => void
}

type Return = {
  data: any
  error: any
  updating: boolean
  fetching: boolean
  update: (newData: any) => void
  remove: () => void
}

/**
 * [Docs](https://capacitorjs.com/docs/apis/storage)
 *
 * @example
 * const getLocalTimers = useLocalStorage('timers')
 */
export default function useLocalStorage(key: string, options?: Options): Return {
  const [updating, setUpdating] = useState(null)
  const [error, setError] = useState(null)

  const fetcher = async () => {
    const { value } = await Storage.get({ key })
    const valueParsed = JSON.parse(value)

    return valueParsed
  }

  // https://swr.vercel.app/docs/options
  const swr = useSWRImmutable(key, fetcher, {
    onSuccess: (data) => {
      options?.onGet && options?.onGet(data)
    },
    onError: (error) => {
      setError(error)
      options?.onError && options?.onError(error)
    },
  })

  const update = async (newData) => {
    setError(false)
    setUpdating(true)

    try {
      const valueStringifyed = JSON.stringify(newData)
      await Storage.set({ key: key, value: valueStringifyed })
      swr.mutate(newData, false)
      options?.onUpdate && options?.onUpdate(newData)
    } catch (error) {
      setError(error)
    } finally {
      setUpdating(false)
    }
  }

  const remove = async () => {
    await Storage.remove({ key: key })
  }

  const fetching = !swr.data && !swr.error

  return { data: swr.data, update, remove, error, updating, fetching }
}
