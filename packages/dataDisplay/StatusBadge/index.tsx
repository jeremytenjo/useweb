import React from 'react'

import Box from '../../_ui/src/dataDisplay/Box/src'
import Text from '../../_ui/src/dataDisplay/Text/src'

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
      sx={{
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
