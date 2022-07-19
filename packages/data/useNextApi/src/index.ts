import useAsync, { type UseAsyncProps, UseAsyncReturn } from '@useweb/use-async'

export type UseNextApiProps = Omit<UseAsyncProps, 'fn'> & {
  name: string
  // eslint-disable-next-line no-undef
  fetchOptions?: RequestInit
  onResult?: (result: any) => any
  onError?: (error: any) => any
  onLoading?: (state: boolean) => any
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
}: UseNextApiProps): UseAsyncReturn & {
  // eslint-disable-next-line no-undef
  fetcher: (fetchOptions: RequestInit) => Promise<any>
} {
  // eslint-disable-next-line no-undef
  const fetcher = async (fetchOptions = {} as RequestInit) => {
    const options = { ...defaultFetchOptions, fetchOptions }
    const url = `api/${name}`

    let data: any = await fetch(url, {
      ...options,
      body: options?.body ? JSON.stringify(options.body) : undefined,
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

  // eslint-disable-next-line no-undef
  const exec = (options = {} as RequestInit) => {
    cloudFunction.exec(options)
  }

  return { ...cloudFunction, fetcher, exec }
}
