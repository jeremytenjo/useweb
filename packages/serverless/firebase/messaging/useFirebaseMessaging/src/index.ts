import { useEffect, useState } from 'react'
import useFirebase from '@useweb/use-firebase'

const isProduction = () => process.env.NODE_ENV === 'production'

type Props = {
  forceSupport?: boolean
  serviceWorkerFileName?: string
  onMessage: (payload: any) => void
  onError: (error: any) => void
}

export default function useFirebaseMessaging({
  forceSupport,
  serviceWorkerFileName = '/firebase-messaging-sw.js',
  onMessage = () => null,
  onError = () => null,
}: Props) {
  const firebase = useFirebase()
  const messaging = firebase.messaging.isSupported() ? firebase.messaging() : null
  const isProductionApp = isProduction()
  const [initialized, setInitialized] = useState(null)
  const [fcmRegistrationToken, setFcmRegistrationToken] = useState(null)
  const [initializing, setInitializing] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isSupported()) {
      const hasPermission = Notification.permission === 'granted'

      if (hasPermission) {
        registerServiceWorker()
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
      console.warn('push notifications not supported', {
        Notification: 'Notification' in window,
        serviceWorker: 'serviceWorker' in navigator,
        PushManager: 'PushManager' in window,
        isProductionApp,
      })
    }

    return forceSupport || result
  }

  const registerServiceWorker = () => {
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
      messaging.onMessage(onMessage)
    } catch (error) {
      setError(error)
      onError(error)
    } finally {
      setInitializing(false)
    }
  }

  const isReadyToUse = isSupported() && !initializing && fcmRegistrationToken

  return {
    isSupported,
    init,
    fcmRegistrationToken,
    initializing,
    error,
    isReadyToUse,
  }
}
