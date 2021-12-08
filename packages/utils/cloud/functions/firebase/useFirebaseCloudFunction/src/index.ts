import { httpsCallable } from 'firebase/functions'
import useFirebase from '@useweb/use-firebase'
import useAsync from '@useweb/use-async'

const isProduction = () => process.env.NODE_ENV === 'production'

type Props = {
  name: string
  localPort?: number
  payload
}

export default function useFirebaseCloudFunction({
  name,
  cloudFunctionsLocalPort = 5002,
}: Props) {
  const firebase = useFirebase()

  const fetcher = async ({ payload }) => {
    if (!isProduction()) {
      useFunctionsEmulator(`http://localhost:${cloudFunctionsLocalPort}`)
    }
    const result = await httpsCallable(firebase.functions, name)(payload)
    const data = result.data
    const sanitizedMessage = data.text

    return {
      data,
      sanitizedMessage,
    }
  }

  const cloudFunction = useAsync(fetcher)

  return cloudFunction
}
