import { Object } from 'ts-toolbelt'
import useAsync, { type UseAsyncReturn } from '@useweb/use-async'
import arrayDB from '@useweb/array-db'

import type { HandlerPayloadType } from '..'

type RemoverReturn = {
  removedItemId: ExecProps['id']
  latestData: object[]
}

export type ExecProps = {
  id: string | number
}

export type RemoveOptions = {
  remover?: (data?: RemoverReturn) => any
  onRemove?: (result: any) => void
  onRemoveError?: (error: any) => void
  onRemoveLoading?: (loading: boolean) => void
  idKey?: string
}

export type RemoveReturn = Object.P.Update<
  UseAsyncReturn,
  ['exec'],
  (props: ExecProps) => any
>

export default function useRemove(
  { data = [], updateData, onChange = () => null }: HandlerPayloadType,
  {
    remover = () => null,
    onRemove = () => null,
    onRemoveError = () => null,
    onRemoveLoading = () => null,
    idKey,
  }: RemoveOptions = {},
): RemoveReturn {
  const fetcher = async ({ id: removedItemId }: ExecProps): Promise<RemoverReturn> => {
    const latestData = arrayDB.remove(data, {
      id: removedItemId,
      idKey,
    })

    const returnData = { removedItemId, latestData }

    await remover(returnData)

    return returnData
  }

  const remove = useAsync({
    fn: fetcher,
    onResult: (result) => {
      updateData(result.latestData)
      onRemove(result)
      onChange(result.latestData)
    },
    onError: (error) => {
      onRemoveError(error)
    },
    onLoading: (loading) => {
      onRemoveLoading(loading)
    },
  })

  return remove
}
