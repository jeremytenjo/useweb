import { createContext, useContext, useEffect, useState } from 'react'
import { getFirestore } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

import initializeFirebaseEmulator from './utils/initializeFirebaseEmulator'

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_CONFIG_apiKey,
  // authDomain: import.meta.env.VITE_FIREBASE_CONFIG_authDomain,
  // projectId: import.meta.env.VITE_FIREBASE_CONFIG_projectId,
  // storageBucket: import.meta.env.VITE_FIREBASE_CONFIG_storageBucket,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_CONFIG_messagingSenderId,
  // appId: import.meta.env.VITE_FIREBASE_CONFIG_appId,
  // measurementId: import.meta.env.VITE_FIREBASE_CONFIG_measurementId,
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

initializeFirebaseEmulator({ auth, db })

const FirebaseContext = createContext(null)

type Props = {
  firebaseConfig: object
  children: any
  enableAuth?: boolean
}

export const FirebaseProvider = ({ children, enableAuth = true }: Props) => {
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
