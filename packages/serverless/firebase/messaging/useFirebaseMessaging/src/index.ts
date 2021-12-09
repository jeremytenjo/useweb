import { useEffect, useRef, useState } from 'react'
import useFirebase from '@useweb/use-firebase'
import { getToken, onMessage as messagingOnMessage } from 'firebase/messaging'

const isProduction = () => process.env.NODE_ENV === 'production'

export type MessagingProps = {
  vapidKey?: string
  forceSupport?: boolean
  serviceWorkerFileName?: string
  onMessage?: (payload: any) => any
  onError?: (error: any) => any
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
  vapidKey,
  forceSupport: defaultForceSupport,
  serviceWorkerFileName: defaultServiceWorkerFileName = '/firebase-messaging-sw.js',
  onMessage: defaultOnMessage = () => null,
  onError: defaultOnError = () => null,
}: MessagingProps): Return {
  const onMessageRemoveListenerRef = useRef(null)
  const firebase = useFirebase()

  const forceSupport = firebase?.messagingOptions?.forceSupport || defaultForceSupport
  const serviceWorkerFileName =
    firebase?.messagingOptions?.serviceWorkerFileName || defaultServiceWorkerFileName
  const onMessage = firebase?.messagingOptions?.onMessage || defaultOnMessage
  const onError = firebase?.messagingOptions?.onError || defaultOnError

  const isProductionApp = isProduction()

  const [fcmRegistrationToken, setFcmRegistrationToken] = useState(null)
  const [initializing, setInitializing] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    return () => {
      onMessageRemoveListenerRef.current && onMessageRemoveListenerRef.current()
    }
  }, [])

  const isSupported = () => {
    const result =
      'Notification' in window &&
      'serviceWorker' in navigator &&
      'PushManager' in window &&
      isProductionApp

    if (!result && !forceSupport) {
      console.log('Push notifications are not supported on the current device', {
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
    if (isSupported() && !fcmRegistrationToken) {
      startNotificationListener()
    }
  }

  const startNotificationListener = async () => {
    setInitializing(true)
    setError(false)

    try {
      const token = await getToken(firebase.messaging, { vapidKey })

      if (token) {
        registerServiceWorker()
        setFcmRegistrationToken(token)
        onMessageRemoveListenerRef.current = messagingOnMessage(
          firebase.messaging,
          onMessage,
        )
      }
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
