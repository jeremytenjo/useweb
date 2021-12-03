import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
export { default as initializeFirebaseEmulator } from './utils/initializeFirebaseEmulator'

const FirebaseContext = createContext(null)

type Props = {
  firebaseApp: any
  db: any
  children: any
  auth?: any
  enableAuth?: boolean
}

export const FirebaseProvider = ({
  firebaseApp,
  auth,
  db,
  children,
  enableAuth = true,
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
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}

type Return = {
  firebaseApp: any
  auth: any
  db: any
  user: any
}

const useFirebase = () => useContext<Return>(FirebaseContext)

export default useFirebase
