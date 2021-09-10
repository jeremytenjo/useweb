import { useEffect, useRef } from 'react'

export default ({ seconds, callback = () => null, reseter }) => {
  const timeoutRef = useRef(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      callback()
    }, seconds)

    return () => clear()
  }, [reseter])

  const clear = () => clearTimeout(timeoutRef.current)

  return { clear }
}
