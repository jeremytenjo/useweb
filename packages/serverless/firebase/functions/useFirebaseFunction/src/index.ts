import useFirebase from '@useweb/use-firebase'
import useAsync from '@useweb/use-async'

export type Props = {
  name: string
  fetchOptions?: RequestInit
}

type FetchProps = {
  data?: object | object[]
}

/**
 * @example
 * const helloWorld = useFirebaseFunction({name: 'helloWorld'})
 *
 * [Fetch Options](https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters)
 *
 */
export default function useFirebaseFunction({ name, fetchOptions = {} }: Props) {
  const firebase = useFirebase()

  const fetcher = async (options?: FetchProps) => {
    const port = firebase?.functionsOptions?.port || 5002
    const region = firebase?.functionsOptions?.region || 'us-central1'
    const url = firebase.envIsDev
      ? `http://localhost:${port}/${firebase.firebaseConfig.projectId}/${region}/${name}`
      : `https://${region}-${firebase.firebaseConfig.projectId}.cloudfunctions.net/${name}`

    let data = await fetch(url, {
      method: 'post',
      body: JSON.stringify(options?.data || {}),
      ...fetchOptions,
    })

    data = await data.json()

    return data
  }

  const cloudFunction = useAsync(fetcher)

  const exec = (options?: FetchProps) => {
    cloudFunction.exec(options)
  }

  return { ...cloudFunction, fetcher, exec }
}
