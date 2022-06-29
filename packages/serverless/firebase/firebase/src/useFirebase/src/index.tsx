import React from 'react'

type Firebase = any

type ContextOptions = any

declare global {
  interface Window {
    ReactFirebaseContext?: React.Context<Firebase | undefined>
  }
}

export const defaultContext = React.createContext<Firebase | undefined>(undefined)

const FirebaseSharingContext = React.createContext<boolean>(false)

// If we are given a context, we will use it.
// Otherwise, if contextSharing is on, we share the first and at least one
// instance of the context across the window
// to ensure that if React Query is used across
// different bundles or microfrontends they will
// all use the same **instance** of context, regardless
// of module scoping.
function getFirebaseContext(
  context: React.Context<Firebase | undefined> | undefined,
  contextSharing: boolean,
) {
  if (context) {
    return context
  }
  if (contextSharing && typeof window !== 'undefined') {
    if (!window.ReactFirebaseContext) {
      window.ReactFirebaseContext = defaultContext
    }

    return window.ReactFirebaseContext
  }

  return defaultContext
}

export default function useFirebase({ context }: ContextOptions = {}) {
  const queryClient = React.useContext(
    getFirebaseContext(context, React.useContext(FirebaseSharingContext)),
  )

  if (!queryClient) {
    throw new Error('No Firebase set, use FirebaseProvider to set one')
  }

  return queryClient
}

type FirebaseProviderPropsBase = {
  client: Firebase
  children?: React.ReactNode
}
type FirebaseProviderPropsWithContext = ContextOptions & {
  contextSharing?: never
} & FirebaseProviderPropsBase
type FirebaseProviderPropsWithContextSharing = {
  context?: never
  contextSharing?: boolean
} & FirebaseProviderPropsBase

export type FirebaseProviderProps =
  | FirebaseProviderPropsWithContext
  | FirebaseProviderPropsWithContextSharing

export const FirebaseProvider = ({
  value,
  children,
  context,
  contextSharing = false,
}: FirebaseProviderProps) => {
  const Context = getFirebaseContext(context, contextSharing)

  return (
    <FirebaseSharingContext.Provider value={!context && contextSharing}>
      <Context.Provider value={value}>{children}</Context.Provider>
    </FirebaseSharingContext.Provider>
  )
}
