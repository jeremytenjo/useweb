import useAsync from '@useweb/use-async'
import arrayDB from '@useweb/array-db'

import type { HandlerPayloadType } from '..'

type Remover = {
  removedItemId: ExecProps['id']
  latestData: object[]
}

type ExecProps = {
  id: string | number
}

export type Options = {
  remover?: (data?: any) => any
  onRemove?: (result: any) => void
  onRemoveError?: (error: any) => void
  onRemoveLoading?: (loading: boolean) => void
}

export default function useRemove(
  { data = [], updateData }: HandlerPayloadType,
  options?: Options,
) {
  const fetcher = async ({ id: removedItemId }: ExecProps): Promise<Remover> => {
    const latestData = arrayDB.remove(data, {
      id: removedItemId,
    })

    const returnData = { removedItemId, latestData }

    return returnData
  }

  const remove = useAsync(fetcher, {
    onResult: (result) => {
      updateData(result.latestData)
      options.onRemove(result)
    },
    onError: (error) => {
      options.onRemoveError(error)
    },
    onLoading: (loading) => {
      options.onRemoveLoading(loading)
    },
  })

  // Need this to add types to exec
  const exec = (props: ExecProps) => {
    remove.exec(props)
  }

  return { ...remove, exec }
}
