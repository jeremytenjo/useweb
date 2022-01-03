import { useMemo } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import create from 'zustand'
import arrayDB from '@useweb/array-db'
import useLocalStorage from '@useweb/use-local-storage'
import type { LocalStorageOptionsTypes } from '@useweb/use-local-storage'

import type { HandlerPayloadType } from '..'

type Types = {
  fetchedCollections: any[]
  setFetchedCollections: (newValue: any) => void
}

const useGetStore = create<Types>((set) => ({
  fetchedCollections: [],
  setFetchedCollections: (newValue) => set(() => ({ fetchedCollections: newValue })),
}))

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
  error: Error
  exec: () => void
  update: (newData: any) => void
}

// TODO add `getReturnedEmptyData` return prop that shows when fetchers return empty data

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
  const { mutate: globalMutate } = useSWRConfig()
  const getStore: any = useGetStore()

  const collectionWasFetched = useMemo(() => {
    const wasCollectionFetched = getStore.fetchedCollections.some(
      (fetchedCollection) => fetchedCollection.id === id,
    )
    return wasCollectionFetched
  }, [id, getStore.fetchedCollections])

  const updateFetchedCollections = () => {
    const updatedFetchedCollections = arrayDB.add(getStore.fetchedCollections, {
      data: { id },
    })

    getStore.setFetchedCollections(updatedFetchedCollections)
  }

  // Local storage
  const localStorageData = useLocalStorage(id, {
    localStorageOptions,
    onGet: (result) => {
      updateFetchedCollections()
      onGet(result)
      onChange(result)
    },
  })

  // SWR
  const swrKey = () => (id ? `_${id}` : null)

  // https://swr.vercel.app/docs/options
  const swr = useSWR(swrKey(), fetcher, {
    onSuccess: (data) => {
      const updatedFetchedCollections = arrayDB.add(getStore.fetchedCollections, {
        data: { id },
      })

      getStore.setFetchedCollections(updatedFetchedCollections)
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
    if (!swr.data && !collectionWasFetched && localStorageData.data) {
      return localStorageData.data
    }

    if (swr.data) {
      return swr.data
    }

    if (!swr.data && !!localStorageData?.data?.length) {
      return localStorageData.data
    }

    return defaultData
  }

  const exec = () => {
    globalMutate(swrKey())
  }

  // Return Props
  const fetching = !swr.data && !swr.error
  const data = getReturnData()
  const error = swr.error

  return {
    exec,
    data,
    fetching,
    error,
    update,
  }
}
