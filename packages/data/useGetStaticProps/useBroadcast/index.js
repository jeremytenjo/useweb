export default function useBroadcast(id, initialData) {
  const bcRef = useRef()

  const [state, setState] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const bc = new BroadcastChannel(id)
    bcRef.current = bc

    bc.onmessage = (e) => {
      postMessage(e.data)
    }

    bc.onerror = (error) => {
      setError(error)
    }

    if (initialData) postMessage(initialData)

    return () => {
      bc.close()
    }
  }, [])

  const postMessage = (message) => {
    bcRef.current.postMessage(message)
    setState(message)
  }

  return { state, postMessage, error }
}
