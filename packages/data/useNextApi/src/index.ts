import useAsync, { type UseAsyncProps } from '@useweb/use-async'

export type UseNextApiProps = Omit<UseAsyncProps, 'fn'> & {
  name: string
  // eslint-disable-next-line no-undef
  fetchOptions?: RequestInit
}

export default function UseNextApi({
  name,
  onResult = () => null,
  onError = () => null,
  onLoading = () => null,
  fetchOptions: defaultFetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {} as any,
  },
}: UseNextApiProps) {
  // eslint-disable-next-line no-undef
  const fetcher = async (fetchOptions = defaultFetchOptions as RequestInit) => {
    const url = `api/${name}`

    let data: any = await fetch(url, {
      ...fetchOptions,
      body: JSON.stringify(fetchOptions?.body),
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
