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
  get?: GetOptions
  create?: CreateOptions
  remove?: RemoveOptions
  update?: UpdateOptions
}

export default function useData({
  id,
  defaultData,
  get: getOptions,
  create: createOptions,
  update: updateOptions,
  remove: removeOptions,
}: Options) {
  const handlerPayload: HandlerPayloadType = {
    id,
    defaultData,
    updateData: () => null,
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
