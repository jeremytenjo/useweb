import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import type { LocalStorageOptionsTypes } from '@useweb/use-local-storage'

type Props = {
  firebaseApp: any
  db: any
  children: any
  auth?: any
  enableAuth?: boolean
  localStorageOptions?: LocalStorageOptionsTypes
}

type Return = {
  firebaseApp: any
  auth: any
  db: any
  user: any
  localStorageOptions: LocalStorageOptionsTypes
}

const FirebaseContext = createContext<Return>(null)

export const FirebaseProvider = ({
  firebaseApp,
  auth,
  db,
  children,
  enableAuth = true,
  localStorageOptions,
}: Props) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (enableAuth) {
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
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}

const useFirebase = () => useContext(FirebaseContext)

export default useFirebase
