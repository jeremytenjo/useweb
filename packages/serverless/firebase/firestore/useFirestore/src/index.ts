import useFirebase from '@useweb/use-firebase'
import type { LocalStorageOptionsTypes } from '@useweb/use-local-storage'

import useGet from './handlers/useGet'
import useCreate from './handlers/useCreate'
import useRemove from './handlers/useRemove'
import useUpdate from './handlers/useUpdate'

export type HandlerPayloadType = {
  userId: string
  collectionName: string
  returnDefaultData: any
  defaultData: any
  updateData: (newData: any) => void
  data: any
}

type Options = {
  defaultData?: any
  returnDefaultData?: boolean
  localStorageOptions?: LocalStorageOptionsTypes

  onGet?: (result: any) => void
  onGetError?: (error: any) => void
  onGetLoading?: (loading: boolean) => void

  onCreate?: (result: any) => void
  onCreateError?: (error: any) => void
  onCreateLoading?: (loading: boolean) => void

  onRemove?: (result: any) => void
  onRemoveError?: (error: any) => void
  onRemoveLoading?: (loading: boolean) => void

  onUpdate?: (result: any) => void
  onUpdateError?: (error: any) => void
  onUpdateLoading?: (loading: boolean) => void
}

export default function useFirestore(
  collectionName: string,
  {
    defaultData,
    returnDefaultData,
    localStorageOptions,

    onGet = () => null,
    onGetError = () => null,
    onGetLoading = () => null,

    onCreate = () => null,
    onCreateError = () => null,
    onCreateLoading = () => null,

    onRemove = () => null,
    onRemoveError = () => null,
    onRemoveLoading = () => null,

    onUpdate = () => null,
    onUpdateError = () => null,
    onUpdateLoading = () => null,
  }: Options,
) {
  const firebase = useFirebase()

  const handlerPayload: HandlerPayloadType = {
    userId: firebase.user?.uid,
    collectionName,
    returnDefaultData,
    defaultData,
    updateData: () => null,
    data: [],
  }

  const get = useGet(handlerPayload, {
    onGet,
    onGetError,
    onGetLoading,
    localStorageOptions: localStorageOptions || firebase.localStorageOptions,
  })

  handlerPayload.updateData = get.update
  handlerPayload.data = get.data

  const create = useCreate(handlerPayload, {
    onCreate,
    onCreateError,
    onCreateLoading,
  })

  const update = useUpdate(handlerPayload, {
    onUpdate,
    onUpdateError,
    onUpdateLoading,
  })

  const remove = useRemove(handlerPayload, {
    onRemove,
    onRemoveError,
    onRemoveLoading,
  })

  return {
    get,
    update,
    remove,
    create,
  }
}
