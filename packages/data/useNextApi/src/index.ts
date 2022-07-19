import useAsync, { type UseAsyncProps } from '@useweb/use-async'

export type UseNextApiProps = Omit<UseAsyncProps, 'fn'> & {
  name: string
  fetchOptions?: any
}

export default function UseNextApi({
  name,
  onResult = () => null,
  onError = () => null,
  onLoading = () => null,
  fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {},
  },
}: UseNextApiProps) {
  const fetcher = async ({ dynamicFetchOptions = fetchOptions } = {}) => {
    const url = `api/${name}`

    let data: any = await fetch(url, {
      ...fetchOptions,
      body: JSON.stringify(dynamicFetchOptions?.data),
    })

    data = await data.json()

    if (data?.error) throw new Error(data.error)

    return data
  }

  const cloudFunction = useAsync({
    fn: fetcher,
    onResult,
    onError,
    onLoading,
  })

  const exec = (options) => {
    cloudFunction.exec(options)
  }

  return { ...cloudFunction, fetcher, exec }
}
