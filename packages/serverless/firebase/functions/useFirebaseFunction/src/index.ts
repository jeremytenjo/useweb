import useFirebase from '@useweb/use-firebase'
import useAsync from '@useweb/use-async'
import type { Options as UseAsyncProps } from '@useweb/use-async'

export type Props = {
  name: string
  fetchOptions?: RequestInit
  onResult?: UseAsyncProps['onResult']
  onLoading?: UseAsyncProps['onLoading']
  onError?: UseAsyncProps['onError']
}

type FetchProps = {
  data?: object | object[]
}

/**
 * [Docs](https://useweb.dev/?path=/docs/packages-serverless-firebase-functions-usefirebasefunction--example)
 *
 * [Firebase Functions docs](https://firebase.google.com/docs/functions/get-startedt)
 *
 * [Fetch Options](https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters)
 *
 * @example
 * const helloWorld = useFirebaseFunction({name: 'helloWorld'})
 *
 */
export default function useFirebaseFunction({
  name,
  fetchOptions = {},
  onResult = () => null,
  onError = () => null,
  onLoading = () => null,
}: Props) {
  const firebase = useFirebase()

  const fetcher = async (options?: FetchProps) => {
    const port = firebase?.functionsOptions?.port || 5002
    const region = firebase?.functionsOptions?.region || 'us-central1'
    const url = firebase.envIsDev
      ? `http://localhost:${port}/${firebase.firebaseConfig.projectId}/${region}/${name}`
      : `https://${region}-${firebase.firebaseConfig.projectId}.cloudfunctions.net/${name}`

    let data: any = await fetch(url, {
      method: 'post',
      body: JSON.stringify(options?.data || {}),
      ...fetchOptions,
    })

    data = await data.json()

    if (data?.error) throw new Error(data.error)

    return data
  }

  const cloudFunction = useAsync(fetcher, {
    onResult,
    onError,
    onLoading,
  })

  const exec = (options?: FetchProps) => {
    cloudFunction.exec(options)
  }

  return { ...cloudFunction, fetcher, exec }
}
