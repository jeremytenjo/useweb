import useAsync from '@useweb/use-async'
import arrayDB from '@useweb/array-db'
import type { RemoveTypes } from '@useweb/array-db'

import type { HandlerPayloadType } from '..'

type Remover = {
  removedItemId: ExecProps['id']
  latestData: object[]
}

type ExecProps = {
  id: string | number
}

export type RemoveOptions = {
  remover?: (data?: any) => any
  onRemove?: (result: any) => void
  onRemoveError?: (error: any) => void
  onRemoveLoading?: (loading: boolean) => void
  idKey?: RemoveTypes['idKey']
}

export default function useRemove(
  { data = [], updateData }: HandlerPayloadType,
  {
    remover = () => null,
    onRemove = () => null,
    onRemoveError = () => null,
    onRemoveLoading = () => null,
    idKey,
  }: RemoveOptions = {},
) {
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
    },
    onError: (error) => {
      onRemoveError(error)
    },
    onLoading: (loading) => {
      onRemoveLoading(loading)
    },
  })

  // Need this to add types to exec
  const exec = (props: ExecProps) => {
    remove.exec(props)
  }

  return { ...remove, exec }
}
