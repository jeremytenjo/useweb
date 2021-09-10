const useGetStaticProps = (getStaticProps) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await getStaticProps()
    setData(res.props.data)
  }

  return { data }
}

export default useGetStaticProps
