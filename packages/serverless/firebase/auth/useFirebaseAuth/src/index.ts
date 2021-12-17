import { useEffect } from 'react'
import { onAuthStateChanged, signOut as signOutFromFirebase } from 'firebase/auth'
import create from 'zustand'
import useFirebase from '@useweb/use-firebase'
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
  signInFetcher: () => any
  onSignIn?: (result?: any) => any
  onSignInLoading?: (loading?: boolean) => any
  onSignInError?: (error?: any) => any
}

export default function useFirebaseAuth({
  signInFetcher,
  onSignIn = () => null,
  onSignInLoading = () => null,
  onSignInError = () => null,
}: Props) {
  const authStore = useAuthStore()
  const firebase = useFirebase()
  const auth = firebase.auth

  useEffect(() => {
    if (auth) {
      const cleanOnAuthStateChanged = onAuthStateChanged(auth, (user) => {
        if (user) authStore.setUser(user)

        if (user !== null) {
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
