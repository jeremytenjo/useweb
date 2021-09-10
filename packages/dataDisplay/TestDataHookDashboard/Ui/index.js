import Box from '../../Box'

import TopBar from './TopBar'
import Response from './Response'

export default function Ui(data) {
  return (
    <Box styles={{ gridGap: 'm' }}>
      <TopBar {...data} />
      <Response {...data} />
    </Box>
  )
}
