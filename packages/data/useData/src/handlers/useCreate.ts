import { Object } from 'ts-toolbelt'
import useAsync, { type UseAsyncReturn } from '@useweb/use-async'
import arrayDB, { type AddTypes } from '@useweb/array-db'

import type { HandlerPayloadType } from '..'

type Creator = {
  value: {
    [key: string]: any
  }
  latestData: object[]
  newItem?: any
}

type CreatorReturn = {
  createdItem: {
    [key: string]: any
  }
  latestData: object[]
}

export type ExecProps = {
  value: Creator['value']
}

export type CreateOptions = {
  creator?: (data: Creator) => { newItem: Creator['newItem'] }
  onCreate?: (result: any) => void
  onCreateError?: (error: any) => void
  onCreateLoading?: (loading: boolean) => void
  insertMethod?: 'push' | 'unshift'
  ifExists?: AddTypes['ifExists']
}

export type CreateReturn = Object.P.Update<
  UseAsyncReturn,
  ['exec'],
  (props: ExecProps) => any
>

export default function useCreate(
  { updateData, data: allData = [], onChange }: HandlerPayloadType,
  {
    creator,
    onCreate = () => null,
    onCreateError = () => null,
    onCreateLoading = () => null,
    insertMethod,
    ifExists,
  }: CreateOptions = {},
): CreateReturn {
  const fetcher = async ({ value }: ExecProps): Promise<CreatorReturn> => {
    let createdItem = value

    if (creator) {
      // creator returns new item with id set by database
      const { newItem } = await creator({ value, latestData: allData })
      createdItem = newItem
    }

    const latestData = arrayDB.add(allData, { data: createdItem, insertMethod, ifExists })
    const returnData = { createdItem, latestData }

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
