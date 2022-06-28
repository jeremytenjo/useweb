import { useEffect, useRef, useState } from 'react'
import {
  getToken,
  onMessage as messagingOnMessage,
  isSupported,
} from 'firebase/messaging'
import useAsync from '@useweb/use-async'
import useFirebase from '@useweb/firebase-config'

const isProduction = () => process.env.NODE_ENV === 'production'

export type MessagingProps = {
  vapidKey?: string
  forceSupport?: boolean
  serviceWorkerFileName?: string
  onMessage?: (payload: any) => any
  onError?: (error: any) => any
  onFcmRegistrationToken?: (fcmRegistrationToken: string) => any
}

export type Return = {
  isSupported: () => Promise<boolean>
  init: () => void
  fcmRegistrationToken: string
  initializing: boolean
  error: any
  isReadyToUse: boolean
}

/**
 * [Docs](https://firebase.google.com/docs/cloud-messaging/js/receive)
 */
export default function useFirebaseMessaging({
  vapidKey: defaultVapidKey,
  forceSupport: defaultForceSupport,
  serviceWorkerFileName: defaultServiceWorkerFileName = '/firebase-messaging-sw.js',
  onMessage: defaultOnMessage = () => null,
  onError: defaultOnError = () => null,
  onFcmRegistrationToken = () => null,
}: MessagingProps = {}): Return {
  const onMessageRemoveListenerRef = useRef<any>(null)
  const firebase = useFirebase()
  const isSupportedRes = useAsync({
    fn: isSupported,
    autoExec: true,
    onResult: () => console.warn('Firebase messaging is not supported in this device.'),
  })

  const forceSupport = firebase?.messagingOptions?.forceSupport || defaultForceSupport
  const serviceWorkerFileName =
    firebase?.messagingOptions?.serviceWorkerFileName || defaultServiceWorkerFileName
  const onMessage = firebase?.messagingOptions?.onMessage || defaultOnMessage
  const onError = firebase?.messagingOptions?.onError || defaultOnError
  const vapidKey = firebase?.messagingOptions?.vapidKey || defaultVapidKey

  const isProductionApp = isProduction()

  const [fcmRegistrationToken, setFcmRegistrationToken] = useState<any>(null)
  const [initializing, setInitializing] = useState<any>(null)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    return () => {
      onMessageRemoveListenerRef.current && onMessageRemoveListenerRef.current()
    }
  }, [])

  const validateConfig = () => {
    if (!firebase?.messaging) {
      throw new Error('Missing `messaging` property in `FirebaseProvider` (firebase.tsx)')
    }
  }

  useEffect(() => {
    validateConfig()
  }, [firebase])

  const registerServiceWorker = async () => {
    if (forceSupport || isProductionApp) {
      try {
        await navigator.serviceWorker.register(serviceWorkerFileName)
      } catch (error) {
        console.error(`Faild to register ${serviceWorkerFileName}`, error)
      }
    }
  }

  const init = async () => {
    const isSupportedResult = await isSupported()

    if (isSupportedResult && !fcmRegistrationToken) {
      startNotificationListener()
    }
  }

  const startNotificationListener = async () => {
    setInitializing(true)
    setError(false)

    try {
      const token = await getToken(firebase.messaging, { vapidKey })

      if (token) {
        await registerServiceWorker()
        setFcmRegistrationToken(token)

        onMessageRemoveListenerRef.current = messagingOnMessage(
          firebase.messaging,
          onMessage,
        )

        onFcmRegistrationToken(token)
      }
    } catch (error) {
      setError(error)
      onError(error)
    } finally {
      setInitializing(false)
    }
  }

  const isReadyToUse = isSupportedRes.result && !initializing && fcmRegistrationToken

  return {
    isSupported,
    init,
    fcmRegistrationToken,
    initializing,
    error,
    isReadyToUse: Boolean(isReadyToUse),
  }
}
