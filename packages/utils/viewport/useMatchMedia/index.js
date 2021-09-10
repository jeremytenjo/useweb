export default ({ mediaQuery = 'max-width: 768px' }) => {
  const [matches, setmatches] = useState(null)

  useEffect(() => {
    const mq = window.matchMedia(`(${mediaQuery})`)
    mq.addListener(handleMq)
    handleMq(mq)

    return () => {
      mq.removeListener(handleMq)
    }
  }, [mediaQuery])

  const handleMq = (mq) => setmatches(mq.matches)

  return matches
}
