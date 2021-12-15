import useGet, { type Options as GetOptions } from './handlers/useGet'
import useCreate, { type Options as CreateOptions } from './handlers/useCreate'
import useRemove, { type Options as RemoveOptions } from './handlers/useRemove'
import useUpdate, { type Options as UpdateOptions } from './handlers/useUpdate'

export type HandlerPayloadType = {
  id: string
  defaultData: any
  data: any
  updateData: (newData: any) => void
}

type Options = {
  id: string
  defaultData?: any
} & GetOptions &
  CreateOptions &
  RemoveOptions &
  UpdateOptions

export default function useData({
  id,
  defaultData,

  fetcher,
  onGet = () => null,
  onGetError = () => null,
  onGetLoading = () => null,
  localStorageOptions,

  creator,
  onCreate = () => null,
  onCreateError = () => null,
  onCreateLoading = () => null,

  remover,
  onRemove = () => null,
  onRemoveError = () => null,
  onRemoveLoading = () => null,

  updater,
  onUpdate = () => null,
  onUpdateError = () => null,
  onUpdateLoading = () => null,
}: Options) {
  const handlerPayload: HandlerPayloadType = {
    id,
    defaultData,
    updateData: () => null,
    data: [],
  }

  const get = useGet(handlerPayload, {
    fetcher,
    onGet,
    onGetError,
    onGetLoading,
    localStorageOptions: localStorageOptions,
  })

  handlerPayload.updateData = get.update
  handlerPayload.data = get.data

  const create = useCreate(handlerPayload, {
    creator,
    onCreate,
    onCreateError,
    onCreateLoading,
  })

  const update = useUpdate(handlerPayload, {
    updater,
    onUpdate,
    onUpdateError,
    onUpdateLoading,
  })

  const remove = useRemove(handlerPayload, {
    remover,
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
