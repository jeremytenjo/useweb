import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import create from 'zustand'
import useFirebase from '@useweb/use-firebase'

type Types = {
  user: any
  setUser: (newValue: any) => void
}

const useAuthStore = create<Types>((set) => ({
  user: null,
  setUser: (newValue) => set(() => ({ user: newValue })),
}))

export default function useFirebaseAuth() {
  const authStore = useAuthStore()
  const firebase = useFirebase()

  useEffect(() => {
    if (firebase.auth) {
      const cleanOnAuthStateChanged = onAuthStateChanged(firebase.auth, (user) => {
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

  return {
    user: authStore.user,
  }
}
