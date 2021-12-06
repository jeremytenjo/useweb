import { useEffect, useState } from 'react'
import useFirebase from '@useweb/use-firebase'

const isProduction = () => process.env.NODE_ENV === 'production'

export type MessagingOptions = {
  forceSupport?: boolean
  serviceWorkerFileName?: string
  onMessage: (payload: any) => void
  onError?: (error: any) => void
}

export type Return = {
  isSupported: () => boolean
  init: () => void
  fcmRegistrationToken: string
  initializing: boolean
  error: any
  isReadyToUse: boolean
}

export default function useFirebaseMessaging({
  forceSupport: defaultForceSupport,
  serviceWorkerFileName: defaultServiceWorkerFileName = '/firebase-messaging-sw.js',
  onMessage: defaultOnMessage = () => null,
  onError: defaultOnError = () => null,
}: MessagingOptions): Return {
  const firebase = useFirebase()

  const forceSupport = firebase?.messagingOptions?.forceSupport || defaultForceSupport
  const serviceWorkerFileName =
    firebase?.messagingOptions?.serviceWorkerFileName || defaultServiceWorkerFileName
  const onMessage = firebase?.messagingOptions?.onMessage || defaultOnMessage
  const onError = firebase?.messagingOptions?.onError || defaultOnError

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
    }
  }, [])

  const isSupported = () => {
    const result =
      'Notification' in window &&
      'serviceWorker' in navigator &&
      'PushManager' in window &&
      isProductionApp

    if (!result && !forceSupport) {
      console.warn('Push notifications are not supported on the current device', {
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
