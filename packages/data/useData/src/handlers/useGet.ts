import { useMemo, useState } from 'react'
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
  fetcher?: () => any[] | Promise<any>
  onGet?: (result: any) => void
  onGetError?: (error: any) => void
  localStorageOptions?: LocalStorageOptionsTypes
  autoExec?: boolean
}

export type GetReturn = {
  data: any
  fetching: boolean
  isFetched: boolean
  error: Error
  exec: () => void
  reExec: () => void
  update: (newData: any) => void
}

export default function useGet(
  { id, defaultData = [], onChange }: HandlerPayloadType,
  {
    fetcher = () => null,
    onGet = () => null,
    onGetError = () => null,
    localStorageOptions,
    autoExec,
  }: GetOptions = {},
): GetReturn {
  // https://swr.vercel.app/docs/mutation
  const { mutate: globalMutate } = useSWRConfig()
  const getStore: any = useGetStore()
  const [fetchData, setShouldFetch] = useState(false)

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

  const localStorageData = useLocalStorage(id, {
    localStorageOptions,
    onGet: (result) => {
      updateFetchedCollections()
      onGet(result)
      onChange(result)
    },
  })

  const swrKey = () => (autoExec || (fetchData && id) ? `_${id}` : null)

  // https://swr.vercel.app/docs/options
  const swr = useSWR(swrKey, fetcher, {
    onSuccess: (data) => {
      const updatedFetchedCollections = arrayDB.add(getStore.fetchedCollections, {
        data: { id },
      })

      getStore.setFetchedCollections(updatedFetchedCollections)
      localStorageData.update(data)
      onGet(data)
    },
    onError: (error) => {
      onGetError(error)
    },
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  const update = (newData) => {
    localStorageData.update(newData)

    if (swrKey()) {
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
    setShouldFetch(true)
  }

  const reExec = () => {
    globalMutate(swrKey())
  }

  const fetching = !swr.data && !swr.error
  const data = getReturnData()
  const error = swr.error
  const isFetched = collectionWasFetched

  return {
    exec,
    reExec,
    data,
    fetching,
    isFetched,
    error,
    update,
  }
}
