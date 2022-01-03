import { useMemo } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import useLocalStorage from '@useweb/use-local-storage'
import type { LocalStorageOptionsTypes } from '@useweb/use-local-storage'

import type { HandlerPayloadType } from '..'

export type GetOptions = {
  fetcher?: () => any[] | Promise<any[]>
  onGet?: (result: any) => void
  onGetError?: (error: any) => void
  localStorageOptions?: LocalStorageOptionsTypes
  disableLocalStorage?: boolean
}

export type GetReturn = {
  data: any
  fetching: boolean
  hasEmptyData: boolean
  error: Error
  exec: () => void
  update: (newData: any) => void
}

export default function useGet(
  { id, defaultData = [], onChange }: HandlerPayloadType,
  {
    fetcher = () => null,
    onGet = () => null,
    onGetError = () => null,
    localStorageOptions,
    disableLocalStorage,
  }: GetOptions = {},
): GetReturn {
  // https://swr.vercel.app/docs/mutation
  const { mutate: globalMutate, cache } = useSWRConfig()

  // Local storage
  const localStorageData = useLocalStorage(id, {
    localStorageOptions,
    onGet: (result) => {
      onGet(result)
      onChange(result)
    },
  })

  // SWR
  const swrKey = () => (id ? `_${id}` : null)

  // https://swr.vercel.app/docs/options
  const swr = useSWR(swrKey(), fetcher, {
    onSuccess: (data) => {
      !disableLocalStorage && localStorageData.update(data)
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
    !disableLocalStorage && localStorageData.update(newData)

    if (id) {
      swr.mutate(newData, false)
    }
  }

  const getReturnData = () => {
    if (swr.data) {
      return swr.data
    }

    if (localStorageData.data) {
      return localStorageData.data
    }

    return defaultData
  }

  const exec = () => {
    globalMutate(swrKey())
  }

  const getHasEmptyData = () => {
    // check if fetcher returns empty data
    let hasEmptyData = false
    const fetched = cache.get(swrKey())

    if (fetched) {
      hasEmptyData =
        fetched.length === 0 &&
        (!disableLocalStorage ? localStorageData?.data?.length === 0 : true)
    }

    return hasEmptyData
  }

  // Return values
  const fetching = !swr.data && !swr.error
  const data = useMemo(
    () => getReturnData(),
    [swr.data, localStorageData.data, defaultData],
  )
  const error = swr.error
  const hasEmptyData = useMemo(() => getHasEmptyData(), [cache.get(swrKey())])

  return {
    exec,
    data,
    fetching,
    error,
    update,
    hasEmptyData,
  }
}
