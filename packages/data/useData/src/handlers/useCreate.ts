import useAsync from '@useweb/use-async'
import arrayDB from '@useweb/array-db'

import type { HandlerPayloadType } from '..'

type Creator = {
  createdItem: object
  latestData: object[]
}

type ExecProps = {
  value: object
}

export type Options = {
  creator?: (data: Creator) => any
  onCreate?: (result: any) => void
  onCreateError?: (error: any) => void
  onCreateLoading?: (loading: boolean) => void
}

export default function useCreate(
  { updateData, data: allData = [] }: HandlerPayloadType,
  options: Options,
) {
  const fetcher = async ({ value: createdItem }: ExecProps): Promise<Creator> => {
    const latestData = arrayDB.add(allData, { data: createdItem })
    const returnData = { createdItem, latestData }

    await options.creator(returnData)

    return returnData
  }

  const create = useAsync(fetcher, {
    onResult: (result) => {
      updateData(result.latestData)
      options.onCreate(result)
    },
    onError: (error) => {
      options.onCreateError(error)
    },
    onLoading: (loading) => {
      options.onCreateLoading(loading)
    },
  })

  // Need this to add types to exec
  const exec = (props: ExecProps) => {
    create.exec(props)
  }

  return { ...create, exec }
}
