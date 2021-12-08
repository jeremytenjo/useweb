import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import type { LocalStorageOptionsTypes } from '@useweb/use-local-storage'
import type { MessagingProps } from '@useweb/use-firebase-messaging'

type Props = {
  firebaseApp: any
  children: any
  db?: any
  auth?: any
  localStorageOptions?: LocalStorageOptionsTypes
  messaging?: any
  messagingOptions?: MessagingProps
  analytics?: any
  analyticsOptions?: any
  functions?: any
  functionsOptions?: any
}

type Return = {
  firebaseApp: any
  auth: any
  db: any
  user: any
  localStorageOptions: LocalStorageOptionsTypes
  messaging: any
  messagingOptions?: MessagingProps
  analytics?: any
  analyticsOptions?: any
  functions?: any
  functionsOptions?: any
}

const FirebaseContext = createContext<Return>(null)

export const FirebaseProvider = ({
  firebaseApp,
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
