import React, { createContext, useContext, useRef, useEffect, useState } from 'react'

export const UseInstallPromptContext = createContext(null)

type Props = {
  children: JSX.Element
}

export const UseInstallPromptProvider = ({ children }: Props) => {
  const [isNotInstalledRef, setIsNotInstalled] = useState(null)
  const deferredPromptRef = useRef(null)
  const isNotInstalled = isNotInstalledRef === null ? false : isNotInstalledRef

  const prompt = () => {
    if (deferredPromptRef.current) {
      deferredPromptRef.current.prompt()

      deferredPromptRef.current.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          setIsNotInstalled(false)
        }
      })
    }
  }

  const setPromptFunction = (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault()
    // Stash the event so it can be triggered later.
    deferredPromptRef.current = e

    if (window.matchMedia) {
      const appIsInstalled = window.matchMedia('(display-mode: standalone)').matches
      setIsNotInstalled(!appIsInstalled)
    }
  }

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', setPromptFunction)

    return () => {
      window.removeEventListener('beforeinstallprompt', setPromptFunction)
    }
  }, [])

  return (
    <UseInstallPromptContext.Provider
      value={{
        prompt,
        isNotInstalled,
      }}
    >
      {children}
    </UseInstallPromptContext.Provider>
  )
}

type Return = {
  prompt: () => void
  isNotInstalled: boolean
}

const useInstallPrompt = () => useContext<Return>(UseInstallPromptContext)

export default useInstallPrompt
