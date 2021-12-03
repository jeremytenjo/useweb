import { collection, addDoc } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import arrayDB from '@useweb/array-db'
import useFirebase from '@useweb/use-firebase'

import type { HandlerPayloadType } from '..'

type Callbacks = {
  onCreate?: (result: any) => void
  onCreateError?: (error: any) => void
  onCreateLoading?: (loading: boolean) => void
}

type FetcherProps = {
  data: any
  disableSnackbar: boolean
}

export default function useCreate(
  { userId, updateData, data: allData = [], collectionName }: HandlerPayloadType,
  callbacks: Callbacks,
) {
  const firebase = useFirebase()

  const fetcher = async ({ data, disableSnackbar }: FetcherProps) => {
    delete data.id
    let createdItem = {
      ...data,
      userId,
    }

    // update only locally
    if (!userId) {
      createdItem = {
        ...createdItem,
        id: Date.now().toString(),
      }
    } else {
      // update firestore
      const docRef = await addDoc(collection(firebase.db, collectionName), createdItem)

      createdItem = {
        ...createdItem,
        id: docRef.id,
      }
    }

    const updatedData = arrayDB.add(allData, { data: createdItem })
    const returnData = { createdItem, updatedData, disableSnackbar }

    return returnData
  }

  const create = useAsync(fetcher, {
    onResult: (result) => {
      updateData(result.updatedData)
      callbacks.onCreate(result)
    },
    onError: (error) => {
      callbacks.onCreateError(error)
    },
    onLoading: (loading) => {
      callbacks.onCreateLoading(loading)
    },
  })

  return create
}
