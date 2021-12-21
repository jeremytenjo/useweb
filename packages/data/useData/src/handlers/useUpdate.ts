import useAsync from '@useweb/use-async'
import type { Return as UseAsyncReturn } from '@useweb/use-async'
import arrayDB from '@useweb/array-db'
import type { UpdateTypes } from '@useweb/array-db'
import type { HandlerPayloadType } from '..'

type Updater = {
  updatedItem: object
  latestData: object[]
}

type ExecProps = {
  id: string | number
  value: object
}

export type UpdateOptions = {
  updater?: (data: Updater) => any
  onUpdate?: (result: any) => void
  onUpdateError?: (error: any) => void
  onUpdateLoading?: (loading: boolean) => void
  idKey?: UpdateTypes['idKey']
}

export type UpdateReturn = UseAsyncReturn

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

  const update = useAsync(fetcher, {
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

  // Need this to add types to exec
  const exec = (props: ExecProps) => {
    update.exec(props)
  }

  return { ...update, exec }
}
