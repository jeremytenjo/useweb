import B from '../../../../../../storybook/variationBlock/index'
import Image from '../../../../../images/Image/index'
import Text from '../../../../../../dataDisplay/Text/index'
import useTmdb from '../../'

export default () => {
  const { fetchTmdb, response } = useTmdb({
    query: 'avengers',
    apiKey: '2388873e04ec158e7436ea33b73e5002',
  })

  console.log({ response })

  useEffect(() => {
    fetchTmdb()
  }, [])

  return (
    <B title='default'>
      {response && (
        <>
          <Image src={response.posterUrl} />
          <Text text={response.results[0].overview} styles={{ color: 'white' }} />
        </>
      )}
    </B>
  )
}
