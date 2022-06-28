import { useMemo } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore'
import useSWRImmutable from 'swr/immutable'
import create from 'zustand'
import arrayDB from '@useweb/array-db'
import useLocalStorage from '@useweb/use-local-storage'
import useFirebase from '@useweb/firebase-config'

import type { HandlerPayloadType } from '../src'

export type LocalStorageOptionsTypes = {
  getterFunction?: (options: { key: string }) => any
  setterFunction?: (options: { key: string; data: any }) => void
  removeFunction?: (options: { key: string }) => void
}

type Types = {
  fetchedCollections: any[]
  setFetchedCollections: (newValue: any) => void
}

const useGetStore = create<Types>((set) => ({
  fetchedCollections: [],
  setFetchedCollections: (newValue) => set(() => ({ fetchedCollections: newValue })),
}))

type Options = {
  onGet?: (result: any) => void
  onGetError?: (error: any) => void
  onGetLoading?: (loading: boolean) => void
  localStorageOptions?: LocalStorageOptionsTypes
  fetcher?: () => any
}

export default function useGet(
  { userId, collectionName, defaultData = [] }: HandlerPayloadType,
  options?: Options,
) {
  const firebase = useFirebase()
  const getStore: any = useGetStore()

  const collectionWasFetched = useMemo(() => {
    const wasCollectionFetched = getStore.fetchedCollections.some(
      (fetchedCollection) => fetchedCollection.id === collectionName,
    )
    return wasCollectionFetched
  }, [collectionName, getStore.fetchedCollections])

  const defaultFetcher = async () => {
    const data = []
    const q = query(
      collection(firebase.db, collectionName),
      where('userId', '==', userId),
    )
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    return data
  }

  const updateFetchedCollections = () => {
    const updatedFetchedCollections = arrayDB.add(getStore.fetchedCollections, {
      data: { id: collectionName },
    })

    getStore.setFetchedCollections(updatedFetchedCollections)
  }

  const localStorageData = useLocalStorage(collectionName, {
    localStorageOptions: options.localStorageOptions,
    onGet: (result) => {
      updateFetchedCollections()
      options.onGet(result)
    },
  })

  const swrKey = () => (userId ? collectionName : null)

  // https://swr.vercel.app/docs/options
  const swr = useSWRImmutable(swrKey, options?.fetcher || defaultFetcher, {
    onSuccess: (data) => {
      const updatedFetchedCollections = arrayDB.add(getStore.fetchedCollections, {
        data: { id: collectionName },
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

  const fetching = !swr.data && !swr.error
  const data = getReturnData()
  const error = swr.error
  const isFetched = collectionWasFetched

  return {
    data,
    fetching,
    isFetched,
    error,
    update,
  }
}
