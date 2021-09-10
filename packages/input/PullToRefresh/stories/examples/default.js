import B from '../../../../storybook/variationBlock'
import PullToRefresh from '../..'

export default () => {
  const [refreshed, setrefreshed] = useState(null)
  const handleRefersh = () => {
    setrefreshed('refreshed')
  }

  return (
    <B title='default' background>
      <PullToRefresh onRefresh={handleRefersh} />

      <span style={{ color: 'blue' }}>{refreshed && refreshed}</span>
      <h1>Pull down to refresh</h1>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>1</p>
      <p>2</p>
      <p>3</p>
    </B>
  )
}
