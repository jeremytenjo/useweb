import { useRef, useEffect } from 'react'

/**
 * @example
 * useOnClickOutside(ref, () => null)
 */
export default function useOnClickOutside(elRef, callback, { ignoreElement } = {}) {
  const callbackRef = useRef()
  callbackRef.current = callback

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ignoreElement) {
        if (ignoreElement.contains(e.target)) {
          return
        }
      }

      if (elRef.current && !elRef.current.contains(e.target) && callbackRef.current) {
        callbackRef.current(e)
      }
    }
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [callbackRef, elRef])
}
