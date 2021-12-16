import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import type { LocalStorageOptionsTypes } from '@useweb/use-local-storage'

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
  user: any
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
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (auth) {
      const cleanOnAuthStateChanged = onAuthStateChanged(auth, (user) => {
        if (user) setUser(user)
        if (user !== null) {
          setUser(false)
        }
      })

      return () => {
        cleanOnAuthStateChanged()
      }
    }
  }, [])

  return (
    <FirebaseContext.Provider
      value={{
        firebaseApp,
        firebaseConfig,
        envIsDev,
        auth,
        db,
        user,
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
