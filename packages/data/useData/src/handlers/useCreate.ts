import { Object } from 'ts-toolbelt'
import useAsync from '@useweb/use-async'
import type { UseAsyncReturn } from '@useweb/use-async'
import arrayDB from '@useweb/array-db'

import type { HandlerPayloadType } from '..'

type Creator = {
  createdItem: object
  latestData: object[]
}

export type ExecProps = {
  value: object
}

export type CreateOptions = {
  creator?: (data: Creator) => any
  onCreate?: (result: any) => void
  onCreateError?: (error: any) => void
  onCreateLoading?: (loading: boolean) => void
  insertMethod?: 'push' | 'unshift'
}

export type CreateReturn = Object.P.Update<
  UseAsyncReturn,
  ['exec'],
  (props: ExecProps) => any
>

export default function useCreate(
  { updateData, data: allData = [], onChange }: HandlerPayloadType,
  {
    creator = () => null,
    onCreate = () => null,
    onCreateError = () => null,
    onCreateLoading = () => null,
    insertMethod,
  }: CreateOptions = {},
): CreateReturn {
  const fetcher = async ({ value: createdItem }: ExecProps): Promise<Creator> => {
    const latestData = arrayDB.add(allData, { data: createdItem, insertMethod })
    const returnData = { createdItem, latestData }

    await creator(returnData)

    return returnData
  }

  const create = useAsync({
    fn: fetcher,
    onResult: (result) => {
      updateData(result.latestData)
      onCreate(result)
      onChange(result.latestData)
    },
    onError: (error) => {
      onCreateError(error)
    },
    onLoading: (loading) => {
      onCreateLoading(loading)
    },
  })

  return create
}
