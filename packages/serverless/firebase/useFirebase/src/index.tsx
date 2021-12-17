import React, { createContext, useContext, useEffect } from 'react'
import type { LocalStorageOptionsTypes } from '@useweb/use-local-storage'
import startFirebaseEmulators from './handlers/startFirebaseEmulators/startFirebaseEmulators'

type FirebaseConfig = {
  apiKey?: string
  authDomain?: string
  projectId?: string
  storageBucket?: string
  messagingSenderId?: string
  appId?: string
  measurementId?: string
}

type Props = {
  firebaseApp: any
  firebaseConfig: FirebaseConfig
  envIsDev: boolean
  children: any
  db?: any
  auth?: any
  localStorageOptions?: LocalStorageOptionsTypes
  messaging?: any
  messagingOptions?: any
  analytics?: any
  analyticsOptions?: any
  functions?: any
  functionsOptions?: any
}

type Return = {
  firebaseApp: any
  firebaseConfig: FirebaseConfig
  envIsDev: boolean
  auth: any
  db: any
  localStorageOptions: LocalStorageOptionsTypes
  messaging: any
  messagingOptions?: any
  analytics?: any
  analyticsOptions?: any
  functions?: any
  functionsOptions?: any
}

const FirebaseContext = createContext<Return>(null)

export const FirebaseProvider = ({
  firebaseApp,
  firebaseConfig,
  envIsDev,
  auth,
  db,
  children,
  localStorageOptions,
  messaging,
  messagingOptions,
  analytics,
  analyticsOptions,
  functions,
  functionsOptions,
}: Props) => {
  useEffect(() => {
    startFirebaseEmulators({
      auth,
      db,
      functions,
      enable: envIsDev,
    })
  }, [envIsDev])

  return (
    <FirebaseContext.Provider
      value={{
        firebaseApp,
        firebaseConfig,
        envIsDev,
        auth,
        db,
        localStorageOptions,
        messaging,
        messagingOptions,
        analytics,
        analyticsOptions,
        functions,
        functionsOptions,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}

const useFirebase = () => useContext(FirebaseContext)

export default useFirebase
