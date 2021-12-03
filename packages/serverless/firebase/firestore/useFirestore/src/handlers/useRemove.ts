import { doc, deleteDoc } from 'firebase/firestore'
import useAsync from '@useweb/use-async'
import arrayDB from '@useweb/array-db'
import useFirebase from '@useweb/use-firebase'

import type { HandlerPayloadType } from '..'

type Callbacks = {
  onRemove?: (result: any) => void
  onRemoveError?: (error: any) => void
  onRemoveLoading?: (loading: boolean) => void
}

export default function useRemove(
  { data = [], updateData, userId, collectionName }: HandlerPayloadType,
  callbacks?: Callbacks,
) {
  const firebase = useFirebase()

  const fetcher = async ({ id }) => {
    const remainingItems = arrayDB.remove(data, {
      id,
    })

    if (userId) {
      await deleteDoc(doc(firebase.db, collectionName, id))
    }

    const returnData = { removedItemId: id, remainingItems }

    return returnData
  }

  const remove = useAsync(fetcher, {
    onResult: (result) => {
      updateData(result.remainingItems)
      callbacks.onRemove(result)
    },
    onError: (error) => {
      callbacks.onRemoveError(error)
    },
    onLoading: (loading) => {
      callbacks.onRemoveLoading(loading)
    },
  })

  return remove
}
