import { useMemo } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import useLocalStorage from '@useweb/use-local-storage'

import type { HandlerPayloadType } from '..'
import formatKey from '../utils/formatKey'

export type LocalStorageOptionsTypes = {
  getterFunction?: (options: { key: string }) => any
  setterFunction?: (options: { key: string; data: any }) => void
  removeFunction?: (options: { key: string }) => void
}

export type GetOptions = {
  fetcher?: (payload?: any) => any[] | Promise<any[]>
  onGet?: (result: any) => void
  onGetError?: (error: any) => void
  getOnMount?: boolean
  localStorageOptions?: LocalStorageOptionsTypes
  enableLocalStorage?: boolean
}

export type GetReturn = {
  data: any
  dataIsEmpty: boolean
  fetching: boolean
  error: Error
  exec: () => void
  update: (newData: any) => void
}

export default function useGet(
  { id, localStorageDefaultId, defaultData = [], onChange }: HandlerPayloadType,
  {
    fetcher = () => null,
    onGet = () => null,
    onGetError = () => null,
    getOnMount = true,
    localStorageOptions,
    enableLocalStorage = true,
  }: GetOptions = {},
): GetReturn {
  // SWR
  const swrKey = (prefix: string = '') =>
    getOnMount && id ? formatKey(prefix + id) : null

  const localStorageKey = () => formatKey('localStorage' + localStorageDefaultId)

  // https://swr.vercel.app/docs/mutation
  const { mutate: globalMutate, cache } = useSWRConfig()

  // Local storage
  const localStorageData = useLocalStorage(localStorageKey(), {
    localStorageOptions,
    onGet: (result) => {
      onGet(result)
      onChange(result)
    },
  })

  // https://swr.vercel.app/docs/options
  const swr = useSWR(swrKey(), fetcher, {
    onSuccess: (data) => {
      enableLocalStorage && localStorageData.update(data)
      onGet(data)
      onChange(data)
    },
    onError: (error) => {
      onGetError(error)
    },
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  // Functions
  const update = (newData = []) => {
    enableLocalStorage && localStorageData.update(newData)

    if (id) {
      swr.mutate(newData, false)
    }
  }

  const getReturnData = () => {
    if (swr.data) {
      return swr.data
    }

    if (localStorageData.data && enableLocalStorage && getOnMount) {
      return localStorageData.data
    }

    return defaultData
  }

  const exec = () => {
    globalMutate(swrKey())
  }

  const getDatsIsEmpty = () => {
    // check if fetcher returns empty data
    let dataIsEmpty = false
    const swrKeyData = cache.get(swrKey())

    if (swrKeyData) {
      dataIsEmpty =
        swrKeyData.length === 0 &&
        (enableLocalStorage ? localStorageData?.data?.length === 0 : true)
    }

    return dataIsEmpty
  }

  // Return values
  const fetching = !swr.data && !swr.error
  const data = useMemo(
    () => getReturnData(),
    [swr.data, localStorageData.data, defaultData],
  )
  const error = swr.error
  const dataIsEmpty = useMemo(() => getDatsIsEmpty(), [cache.get(swrKey())])

  return {
    exec,
    data,
    dataIsEmpty,
    fetching,
    error,
    update,
  }
}
