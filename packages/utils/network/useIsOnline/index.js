import { Window } from '../../browser'

export const IsOnlineContext = createContext(null)

const getOnlineStatus = () => {
  return typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
    ? navigator.onLine
    : true
}

export const IsOnlineProvider = ({ children }) => {
  const [isOnline, setIsOnline] = useState(getOnlineStatus())

  const goOnline = () => setIsOnline(true)
  const goOffline = () => setIsOnline(false)

  useEffect(() => {
    Window().addEventListener('online', goOnline)
    Window().addEventListener('offline', goOffline)

    return () => {
      Window().removeEventListener('online', goOnline)
      Window().removeEventListener('offline', goOffline)
    }
  }, [])

  return (
    <IsOnlineContext.Provider
      value={{
        goOnline,
        goOffline,
        isOnline,
      }}
    >
      {children}
    </IsOnlineContext.Provider>
  )
}

export default () => useContext(IsOnlineContext)
