import { useMemo, useState } from 'react'
import useSWRImmutable from 'swr/immutable'
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

export type Options = {
  fetcher?: () => any[] | Promise<any>
  onGet?: (result: any) => void
  onGetError?: (error: any) => void
  onGetLoading?: (loading: boolean) => void
  localStorageOptions?: LocalStorageOptionsTypes
}

export default function useGet(
  { id, defaultData = [] }: HandlerPayloadType,
  options?: Options,
) {
  const getStore: any = useGetStore()
  const [getData, setGetData] = useState(false)

  const collectionWasFetched = useMemo(() => {
    const wasCollectionFetched = getStore.fetchedCollections.some(
      (fetchedCollection) => fetchedCollection.id === id,
    )
    return wasCollectionFetched
  }, [id, getStore.fetchedCollections])

  const updateFetchedCollections = () => {
    const updatedFetchedCollections = arrayDB.add(getStore.fetchedCollections, {
      data: { id: id },
    })

    getStore.setFetchedCollections(updatedFetchedCollections)
  }

  const localStorageData = useLocalStorage(id, {
    localStorageOptions: options.localStorageOptions,
    onGet: (result) => {
      updateFetchedCollections()
      options.onGet(result)
    },
  })

  const swrKey = () => (options.fetcher && getData ? id : null)

  // https://swr.vercel.app/docs/options
  const swr = useSWRImmutable(swrKey, options?.fetcher, {
    onSuccess: (data) => {
      const updatedFetchedCollections = arrayDB.add(getStore.fetchedCollections, {
        data: { id: id },
      })

      getStore.setFetchedCollections(updatedFetchedCollections)
      localStorageData.update(data)
      options.onGet(data)
    },
    onError: (error) => {
      options.onGetError(error)
    },
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
    setGetData(true)
  }

  const fetching = !swr.data && !swr.error
  const data = getReturnData()
  const error = swr.error
  const isFetched = collectionWasFetched

  return {
    exec,
    data,
    fetching,
    isFetched,
    error,
    update,
  }
}
