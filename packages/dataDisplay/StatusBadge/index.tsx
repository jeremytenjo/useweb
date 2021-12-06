import Box from '../Box/build/types'
import Text from '../Text/build/types'

import { defaultProps } from './props'
import * as styles from './styles'
import useData from './useData'

/**
 * @example
 * <StatusBadge state='loading' />
 */
export default function StatusBadge(props) {
  const data = useData(props)

  return (
    <Box
      styles={{
        ...styles.wrapper,
        backgroundColor: `--${data.backgroundColor}`,
      }}
    >
      <Text text={data.text} styles={{ color: `--${data.foregroundColor}` }} />
      {data.icon}
    </Box>
  )
}

StatusBadge.defaultProps = defaultProps
