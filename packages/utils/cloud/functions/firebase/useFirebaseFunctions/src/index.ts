import { httpsCallable, connectFunctionsEmulator } from 'firebase/functions'
import useFirebase from '@useweb/use-firebase'
import useAsync from '@useweb/use-async'

const isProduction = () => process.env.NODE_ENV === 'production'

type Props = {
  name: string
  localPort?: number
}

export default function useFirebaseFunctions({
  name,
  localPort: defaultLocalPort = 5002,
}: Props) {
  const firebase = useFirebase()
  const localPort = firebase?.functionsOptions?.localPort || defaultLocalPort

  const fetcher = async ({ payload }) => {
    if (!isProduction()) {
      connectFunctionsEmulator(firebase.functions, 'localhost', localPort)
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
