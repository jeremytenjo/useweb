import useAsync from '@useweb/use-async'
import { Object } from 'ts-toolbelt'
import type { Return as UseAsyncReturn } from '@useweb/use-async'
import arrayDB from '@useweb/array-db'

import type { HandlerPayloadType } from '..'

type Remover = {
  removedItemId: ExecProps['id']
  latestData: object[]
}

export type ExecProps = {
  id: string | number
}

export type RemoveOptions = {
  remover?: (data?: any) => any
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
  { data = [], updateData, onChange }: HandlerPayloadType,
  {
    remover = () => null,
    onRemove = () => null,
    onRemoveError = () => null,
    onRemoveLoading = () => null,
    idKey,
  }: RemoveOptions = {},
): RemoveReturn {
  const fetcher = async ({ id: removedItemId }: ExecProps): Promise<Remover> => {
    const latestData = arrayDB.remove(data, {
      id: removedItemId,
      idKey,
    })

    const returnData = { removedItemId, latestData }

    await remover(returnData)

    return returnData
  }

  const remove = useAsync(fetcher, {
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
