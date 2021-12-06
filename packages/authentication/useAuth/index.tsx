import firebase from 'firebase/app'
import { createContext, useContext } from 'react'

import saveToCredentialManager from '../functions/webApi/credentialMangment/cm.save'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children, service = 'firebase' }) => {
  const [user, setUser] = useState(null)
  const [signingIn, setSigningIn] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    checkIfSignedIn()
  }, [])

  useEffect(() => {
    user && firebase.analytics().setUserId(user.uid || user.id)
  }, [user])

  useEffect(() => {
    const cleanOnAuthStateChanged = firebase.auth().onAuthStateChanged((user) => {
      if (user) setUser(user)
      else {
        if (user !== null) {
          setUser(false)
        }
      }
    })

    return () => {
      cleanOnAuthStateChanged()
    }
  }, [])

  const signIn = async ({ provider = 'email', credentials, action = 'login' }) => {
    setSigningIn(true)
    const search = provider === 'email' ? 'email' : 'social'
    const signIn = await import(`../functions/${service}/auth.${search}`)
    const {
      error: signInError,
      user: signedInUser,
      credentialManagerData,
    } = await signIn.default({
      provider,
      action,
      credentials,
    })

    if (signedInUser) {
      setUser(signedInUser)
      saveToCredentialManager(credentialManagerData)
      setError(false)
    } else if (signInError) {
      setError(signInError)
    }

    setSigningIn(false)
  }

  const checkIfSignedIn = async () => {
    const authCheck = await import(`../functions/${service}/auth.check`)
    const { user: userRes } = await authCheck.default()

    if (userRes) {
      setUser(userRes)
      saveToCredentialManager(userRes)
    } else {
      // Check Credential Manager if not Signed in
      const cmModule = await import('../functions/webApi/credentialMangment/cm.get')
      const { user: cmUser } = await cmModule.default()
      if (cmUser) setUser(cmUser)
      else setUser(false)
    }
  }

  const signOut = async () => {
    const signOutFunc = await import(`../functions/${service}/auth.signOut`)
    await signOutFunc.default()

    setUser(false)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        signingIn,
        error,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default () => useContext(AuthContext)
