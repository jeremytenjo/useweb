// uses local functions in development and production function when depoyed
import firebase from 'firebase/app'

import isEnvProduction from '../../../../enviroment/isEnvProduction'

// window.cloudFunctionsLocalPort set by wapp/generators/firebase/index.js
export default function useCloudFunction(
  cloudFunctionName = 'search',
  options = {
    cloudFunctionsLocalPort: window.cloudFunctionsLocalPort,
    data: {},
  },
) {
  const defaultData = options.data
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const exec = async (data = defaultData) => {
    if (loading) return null
    try {
      setError(false)
      setLoading(true)
      if (!isEnvProduction()) {
        firebase
          .functions()
          .useFunctionsEmulator(`http://localhost:${options.cloudFunctionsLocalPort}`)
      }
      const res = await firebase.functions().httpsCallable(cloudFunctionName)(data)
      const {
        data: payload,
        data: { error },
      } = res

      if (error) {
        setError(error)
        return null
      } else {
        setResult(payload)
        return payload
      }
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return { exec, result, loading, error }
}
