import React, { createContext, useContext, useEffect } from 'react'

import startFirebaseEmulators from './handlers/startFirebaseEmulators/startFirebaseEmulators'

export type LocalStorageOptionsTypes = {
  getterFunction?: (options: { key: string }) => any
  setterFunction?: (options: { key: string; data: any }) => void
  removeFunction?: (options: { key: string }) => void
}

export type AuthOptions = {
  testUserEmail: string
  testUserPassword: string
  authEmulatorPort?: number
}

export type DBOptions = {
  dbEmulatorPort?: number
}

type FirebaseConfig = {
  apiKey?: string
  authDomain?: string
  projectId?: string
  storageBucket?: string
  messagingSenderId?: string
  appId?: string
  measurementId?: string
}

type FirebaseProviderProps = {
  firebaseApp: any
  firebaseConfig: FirebaseConfig
  envIsDev: boolean
  children: any
  db?: any
  dbOptions?: DBOptions
  auth?: any
  authOptions?: AuthOptions
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
  auth?: any
  authOptions?: any
  db?: any
  localStorageOptions?: LocalStorageOptionsTypes
  messaging?: any
  messagingOptions?: any
  analytics?: any
  analyticsOptions?: any
  functions?: any
  functionsOptions?: any
}

export const FirebaseConfigContext = createContext(null as any)

export const FirebaseConfigProvider = (props: FirebaseProviderProps) => {
  useEffect(() => {
    startFirebaseEmulators({
      auth: props.auth,
      authOptions: props.authOptions,
      db: props.db,
      dbOptions: props.dbOptions,
      functions: props.functions,
      enable: props.envIsDev,
    })
  }, [props.envIsDev])

  return (
    <FirebaseConfigContext.Provider value={props}>
      {props.children}
    </FirebaseConfigContext.Provider>
  )
}

const useFirebaseConfig = () => useContext<Return>(FirebaseConfigContext)

export default useFirebaseConfig
