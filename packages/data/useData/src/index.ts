import useGet from './handlers/useGet'
import type { GetOptions, GetReturn } from './handlers/useGet'
import useCreate from './handlers/useCreate'
import type { CreateOptions, CreateReturn } from './handlers/useCreate'
import useUpdate from './handlers/useUpdate'
import type { UpdateOptions, UpdateReturn } from './handlers/useUpdate'
import useRemove from './handlers/useRemove'
import type { RemoveOptions, RemoveReturn } from './handlers/useRemove'

export type HandlerPayloadType = {
  id: string
  defaultData: any
  data: any
  updateData: (newData: any) => void
  onChange?: (latestData: any) => any
}

export type Props = {
  id: string
  defaultData?: any
  onChange?: (latestData: any) => any
  get?: GetOptions
  create?: CreateOptions
  remove?: RemoveOptions
  update?: UpdateOptions
}

export type Return = {
  get: GetReturn
  create: CreateReturn
  update: UpdateReturn
  remove: RemoveReturn
}

export default function useData({
  id,
  defaultData,
  onChange = () => null,
  get: getOptions,
  create: createOptions,
  update: updateOptions,
  remove: removeOptions,
}: Props): Return {
  const handlerPayload: HandlerPayloadType = {
    id,
    defaultData,
    updateData: () => null,
    onChange,
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
