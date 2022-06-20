import { useEffect } from 'react'

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

declare global {
  interface Window {
    useFirebaseData: any
  }
}

export const FirebaseProvider = (props: FirebaseProviderProps) => {
  setFirebaseData(props)

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

  return props.children
}

const setFirebaseData = (props: FirebaseProviderProps) => {
  if (typeof window !== 'undefined') {
    window.useFirebaseData = props
  }
}

const getFirebaseData = (): FirebaseProviderProps => {
  if (typeof window === 'undefined') return undefined as any

  return window.useFirebaseData
}

export default function useFirebase(): Return {
  const firebaseData = getFirebaseData()
  return firebaseData
}
