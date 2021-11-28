import { useEffect, useRef } from 'react'

/**
 * @example
 * useEventListener('click', handleClick)
 */
export default function useEventListener(
  eventName: string,
  handler: (event: any) => void,
  element?: HTMLElement,
) {
  // Create a ref that stores handler
  type SavedHandler = {
    triggerHandler: (event: Event) => void
  }
  const savedHandler = useRef<SavedHandler>({ triggerHandler: () => null })

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current.triggerHandler = handler
  }, [handler])

  useEffect(
    () => {
      const el = element || window
      // Make sure element supports addEventListener
      const isSupported = el && el.addEventListener
      if (!isSupported) return

      // Create event listener that calls handler function stored in ref
      const eventListener = (event: Event) =>
        savedHandler.current && savedHandler.current.triggerHandler(event)

      // Add event listener
      el.addEventListener(eventName, eventListener)

      // Remove event listener on cleanup
      return () => {
        el.removeEventListener(eventName, eventListener)
      }
    },
    [eventName, element], // Re-run if eventName or element changes
  )
}
