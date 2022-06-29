import { useEffect, useRef, useState } from 'react'
import {
  getToken,
  onMessage as messagingOnMessage,
  isSupported,
  getMessaging,
} from 'firebase/messaging'
import useAsync from '@useweb/use-async'

import useFirebase from '../../useFirebase/src'

const isProduction = () => process.env.NODE_ENV === 'production'

type MessagingProps = {
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
  const messagingInstance = getMessaging()
  const onMessageRemoveListenerRef = useRef<any>(null)
  const firebase = useFirebase()
  const isSupportedRes = useAsync({
    fn: isSupported,
    autoExec: true,
    onResult: () => console.warn('Firebase messaging is not supported in this device.'),
  })

  console.log(isSupportedRes)

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
    const messagingInstance = getMessaging()

    if (!messagingInstance) {
      throw new Error('Missing `messaging` init in Firebase.tsx')
    }
  }

  useEffect(() => {
    validateConfig()
  }, [messagingInstance])

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
    const messagingInstance = getMessaging()

    setInitializing(true)
    setError(false)

    try {
      const token = await getToken(messagingInstance, { vapidKey })

      if (token) {
        await registerServiceWorker()
        setFcmRegistrationToken(token)

        onMessageRemoveListenerRef.current = messagingOnMessage(
          messagingInstance,
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
