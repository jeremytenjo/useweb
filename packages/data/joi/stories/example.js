import generateStubs from './data/users/stubs'

export default () => {
  const [stubs, setStubs] = useState('')
  useEffect(() => {
    gen()
  }, [])

  const gen = async () => {
    const newStubs = await generateStubs

    console.log({ newStubs })
    setStubs(JSON.stringify(newStubs, null, 2))
  }

  return <code style={{ color: 'white' }}>{stubs}</code>
}
