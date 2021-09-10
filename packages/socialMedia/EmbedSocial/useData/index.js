import getSocialNameFromUrl from './handlers/getSocialNameFromUrl'

export default function useData(props) {
  const [socialApp, setSocialApp] = useState({})

  useEffect(() => {
    setSocialApp(getSocialNameFromUrl(props.url))
  }, [])

  return { socialApp }
}
