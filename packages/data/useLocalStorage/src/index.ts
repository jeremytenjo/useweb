import { useState } from 'react'
import useSWRImmutable from 'swr/immutable'

type GetterType = { key: string }
type SetterType = { key: string; data: any }
type RemoveType = { key: string }

export type LocalStorageOptionsTypes = {
  getterFunction?: (options: GetterType) => any
  setterFunction?: (options: SetterType) => void
  removeFunction?: (options: RemoveType) => void
}

type Options = {
  onGet?: (result: any) => void
  onUpdate?: (result: any) => void
  onError?: (error: any) => void
  localStorageOptions?: LocalStorageOptionsTypes
}

type Return = {
  data: any
  error: any
  updating: boolean
  fetching: boolean
  update: (newData: any) => void
  remove: () => void
}

const defaultGetterFunction = ({ key }: GetterType) => {
  const localStorageData = localStorage.getItem(key)
  return localStorageData
}

const defaultSetterFunction = ({ key, data }: SetterType) => {
  localStorage.setItem(key, data)
}

const defaultRemoveFunction = ({ key }: RemoveType) => {
  localStorage.removeItem(key)
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
    const getterFunction =
      options?.localStorageOptions?.getterFunction || defaultGetterFunction
    const localStorageData = await getterFunction({ key })
    const valueParsed = JSON.parse(localStorageData)

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
      const setterFunction =
        options?.localStorageOptions?.setterFunction || defaultSetterFunction
      await setterFunction({ key: key, data: valueStringifyed })
      swr.mutate(newData, false)
      options?.onUpdate && options?.onUpdate(newData)
    } catch (error) {
      setError(error)
    } finally {
      setUpdating(false)
    }
  }

  const remove = async () => {
    const removeFunction =
      options?.localStorageOptions?.removeFunction || defaultRemoveFunction
    await removeFunction({ key })
  }

  const fetching = !swr.data && !swr.error

  return { data: swr.data, update, remove, error, updating, fetching }
}
