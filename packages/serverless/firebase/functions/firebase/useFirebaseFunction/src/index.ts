import { httpsCallable } from 'firebase/functions'
import useFirebase from '@useweb/use-firebase'
import useAsync from '@useweb/use-async'

export type Props = {
  name: string
}
/**
 * @example
 * const helloWorld = useFirebaseFunction({name: 'helloWorld'})
 */
export default function useFirebaseFunction({ name }: Props) {
  const firebase = useFirebase()

  const fetcher = async (payload?: any) => {
    const result = await httpsCallable(firebase.functions, name)(payload)

    return result
  }

  const cloudFunction = useAsync(fetcher)

  return { ...cloudFunction, fetcher }
}
