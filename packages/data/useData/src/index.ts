import useGet, { type GetOptions, type GetReturn } from './handlers/useGet'
import useCreate, { type CreateOptions, type CreateReturn } from './handlers/useCreate'
import useUpdate, { type UpdateOptions, type UpdateReturn } from './handlers/useUpdate'
import useRemove, { type RemoveOptions, type RemoveReturn } from './handlers/useRemove'

export { default as prefetch } from './helpers/prefetch/prefetch'

export type HandlerPayloadType = {
  id: string
  defaultData: any
  localStorageDefaultId: string
  onlyLocalStorage: boolean | undefined
  data: any
  updateData: (newData: any) => void
  onChange?: (latestData: any) => any
}

export type UseDataProps = {
  id: string
  localStorageDefaultId: string
  defaultData?: any
  onlyLocalStorage?: boolean | undefined
  onChange?: (latestData: any) => any
  get?: GetOptions
  create?: CreateOptions
  remove?: RemoveOptions
  update?: UpdateOptions
}

export type UseDataReturn = {
  get: GetReturn
  create: CreateReturn
  update: UpdateReturn
  remove: RemoveReturn
}

export default function useData({
  id,
  localStorageDefaultId,
  defaultData,
  onChange = () => null,
  onlyLocalStorage,
  get: getOptions,
  create: createOptions,
  update: updateOptions,
  remove: removeOptions,
}: UseDataProps): UseDataReturn {
  const handlerPayload: HandlerPayloadType = {
    id,
    localStorageDefaultId,
    defaultData,
    updateData: () => null,
    onChange,
    onlyLocalStorage,
    data: [],
  }

  const get = useGet(handlerPayload, getOptions)

  handlerPayload.updateData = get.update
  handlerPayload.data = get.data

  const create = useCreate(handlerPayload, createOptions)
  const update = useUpdate(handlerPayload, updateOptions)
  const remove = useRemove(handlerPayload, removeOptions)

  return {
    get,
    update,
    remove,
    create,
  }
}
