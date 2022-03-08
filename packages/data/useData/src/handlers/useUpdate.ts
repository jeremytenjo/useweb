import { Object } from 'ts-toolbelt'
import useAsync from '@useweb/use-async'
import type { UseAsyncReturn } from '@useweb/use-async'
import arrayDB from '@useweb/array-db'
import type { HandlerPayloadType } from '..'

type Updater = {
  updatedItem: any
  latestData: object[]
}

export type ExecProps = {
  id: string | number
  value: any
}

export type UpdateOptions = {
  updater?: (data: Updater) => any
  onUpdate?: (result: any) => void
  onUpdateError?: (error: any) => void
  onUpdateLoading?: (loading: boolean) => void
  idKey?: string
}

export type UpdateReturn = Object.P.Update<
  UseAsyncReturn,
  ['exec'],
  (props: ExecProps) => any
>

export default function useUpdate(
  { data: allData = [], updateData, onChange }: HandlerPayloadType,
  {
    updater = () => null,
    onUpdate = () => null,
    onUpdateError = () => null,
    onUpdateLoading = () => null,
    idKey,
  }: UpdateOptions = {},
): UpdateReturn {
  const fetcher = async ({
    id: dataId,
    value: updatedItem,
  }: ExecProps): Promise<Updater> => {
    const latestData = arrayDB.update(allData, {
      data: updatedItem,
      id: dataId,
      idKey,
    })

    const returnData = { updatedItem, latestData }

    await updater(returnData)

    return returnData
  }

  const update = useAsync({
    fn: fetcher,
    onResult: (result) => {
      updateData(result.latestData)
      onUpdate(result)
      onChange(result.latestData)
    },
    onLoading: (loading) => {
      onUpdateLoading(loading)
    },
    onError: (error) => {
      onUpdateError(error)
    },
  })

  return update
}
