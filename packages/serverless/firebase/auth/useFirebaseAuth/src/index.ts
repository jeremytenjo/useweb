import { useEffect } from 'react'
import { onAuthStateChanged, signOut as signOutFromFirebase } from 'firebase/auth'
import create from 'zustand'
import useAsync from '@useweb/use-async'

type Types = {
  user: any
  setUser: (newValue: any) => void
}

const useAuthStore = create<Types>((set) => ({
  user: null,
  setUser: (newValue) => set(() => ({ user: newValue })),
}))

type Props = {
  auth: any
  signInFetcher: () => any
  onSignIn?: (result?: any) => any
  onSignInLoading?: (loading?: boolean) => any
  onSignInError?: (error?: any) => any
}

/**
 * [Docs](https://useweb.dev/?path=/docs/packages-serverless-firebase-auth-usefirebaseauth--example)
 *
 * [Firebase Auth docs](https://firebase.google.com/docs/auth/web/start)
 */
export default function useFirebaseAuth(
  {
    auth,
    signInFetcher,
    onSignIn = () => null,
    onSignInLoading = () => null,
    onSignInError = () => null,
  }: Props = { auth: null, signInFetcher: null },
) {
  const authStore = useAuthStore()

  useEffect(() => {
    if (auth) {
      const cleanOnAuthStateChanged = onAuthStateChanged(auth, (user) => {
        if (user) authStore.setUser(user)
        else if (user !== null) {
          authStore.setUser(false)
        }
      })

      return () => {
        cleanOnAuthStateChanged()
      }
    }
  }, [])

  const signIn = useAsync(signInFetcher, {
    onResult: (result) => {
      onSignIn(result)
    },
    onLoading: (loading) => {
      onSignInLoading(loading)
    },
    onError: (error) => {
      onSignInError(error)
    },
  })

  const signOut = async () => {
    if (authStore.user) {
      await signOutFromFirebase(auth)
    }
  }

  return {
    user: authStore.user,
    signIn,
    signOut,
    auth,
  }
}
