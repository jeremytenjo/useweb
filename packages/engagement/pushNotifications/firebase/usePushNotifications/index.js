import firebase from 'firebase/app'

import isProduction from '../../../../utils/enviroment/isEnvProduction'
import 'firebase/messaging'

const messaging = firebase.messaging.isSupported() ? firebase.messaging() : null

export const PushNotificationsContext = createContext(null)

export const PushNotificationsProvider = ({
  children,
  forceSupport,
  serviceWorkerFileName = '/firebase-messaging-sw.js',
}) => {
  const isProductionApp = isProduction()
  const [initialized, setInitialized] = useState(null)
  const [fcmRegistrationToken, setFcmRegistrationToken] = useState(null)
  const [message, setMessage] = useState(null)
  const [initializing, setInitializing] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isSupported()) {
      const hasPermission = Notification.permission === 'granted'

      if (hasPermission) {
        registerServiceWroker()
        setNotificationListener()
        setInitialized(true)
      }
    } else {
      const notSupportedMessage =
        'usePushNotifications: Push notifications are not supported on the current device'
      setError(notSupportedMessage)
      console.error(notSupportedMessage)
    }
  }, [])

  const isSupported = () => {
    const result =
      'Notification' in window &&
      'serviceWorker' in navigator &&
      'PushManager' in window &&
      isProductionApp

    if (!result && !forceSupport) {
      console.error({
        Notification: 'Notification' in window,
        serviceWorker: 'serviceWorker' in navigator,
        PushManager: 'PushManager' in window,
        isProductionApp,
      })
    }

    return forceSupport || result
  }

  const registerServiceWroker = () => {
    if (forceSupport || isProductionApp) {
      navigator.serviceWorker.register(serviceWorkerFileName)
    }
  }

  const init = async () => {
    if (isSupported() && !initialized) {
      const permission = await Notification.requestPermission()
      if (permission === 'granted') setNotificationListener()
    }

    setInitialized(true)
  }

  const setNotificationListener = async () => {
    setInitializing(true)
    setError(false)

    try {
      const token = await messaging.getToken()
      token && setFcmRegistrationToken(token)
      messaging.onMessage((payload) => setMessage(payload))
//Todo handle messaging unsubscribe
    } catch (error) {
      setError(error)
    } finally {
      setInitializing(false)
    }
  }

  const isReadyToUse = isSupported() && !initializing && fcmRegistrationToken

  return (
    <PushNotificationsContext.Provider
      value={{
        isSupported,
        init,
        fcmRegistrationToken,
        message,
        initializing,
        error,
        isReadyToUse,
      }}
    >
      {children}
    </PushNotificationsContext.Provider>
  )
}

/**
 * @returns {{
 * isSupported: function
 * init: function
 * fcmRegistrationToken: string
 * message: string
 * initializing: boolean
 * isReadyToUse: boolean
 * error: object
 * }} object
 *
 * @example
 * const pushNotitications = usePushNotifications()
 */
export default function usePushNotifications() {
  return useContext(PushNotificationsContext)
}
