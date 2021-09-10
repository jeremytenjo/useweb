import PullToRefresh from '../../../../input/PullToRefresh'
import Box from '../..'

const BoxPullToRefresh = ({ onPullToRefresh = () => null, children, ...rest }) => {
  const ref = useRef(null)

  return (
    <div ref={ref} style={{ position: 'relative', width: '100%' }}>
      <PullToRefresh onRefresh={onPullToRefresh} ref={ref} />
      <Box {...rest}>{children}</Box>
    </div>
  )
}
export default BoxPullToRefresh
