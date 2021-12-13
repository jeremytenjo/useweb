import Box from '../Box/src/index'
import Text from '../Text/src/index'

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
