import { useEffect, useState } from 'react'

const useInterval = ({ startTime }) => {
  const [timerSeconds, setSeconds] = useState(startTime)

  function resetTimer() {
    setSeconds(startTime)
  }

  useEffect(() => {
    let interval = null
    interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [timerSeconds])

  return { resetTimer, timerSeconds }
}
export default useInterval
