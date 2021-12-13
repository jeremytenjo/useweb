import { httpsCallable, connectFunctionsEmulator } from 'firebase/functions'
import useFirebase from '@useweb/use-firebase'
import useAsync from '@useweb/use-async'

const isProduction = () => process.env.NODE_ENV === 'production'

export type Props = {
  name: string
  localPort?: number
}
/**
 * @example
 * const helloWorld = useFirebaseFunction({name: 'helloWorld'})
 */
export default function useFirebaseFunction({
  name,
  localPort: defaultLocalPort = 5002,
}: Props) {
  const firebase = useFirebase()
  const localPort = firebase?.functionsOptions?.localPort || defaultLocalPort

  const fetcher = async (payload?: any) => {
    if (!isProduction()) {
      connectFunctionsEmulator(firebase.functions, 'localhost', localPort)
    }
    const result = await httpsCallable(firebase.functions, name)(payload)

    return result
  }

  const cloudFunction = useAsync(fetcher)

  return cloudFunction
}
