import Box from '@useweb/box'

import Text from '../../../../dataDisplay/Text/build/types'
import Animation from '../../../../utils/Animation'
import Overlay from '../../../../utils/overlay/build/types'
import IconClose from '../../../../dataDisplay/Icon/library/IconCloseMaterial'
import Iconfilter from '../../../../dataDisplay/Icon/library/IconFilter1'
import { defaultProps, propTypes } from '../../props'

import styles from './styles'
import { useState } from 'react'

const Menu2 = ({ iconProps, iconWrapperStyles }) => {
  const [show, setShow] = useState(null)
  const Icon = !show ? Iconfilter : IconClose

  return (
    <>
      <Box styles={{ ...styles.icon, ...iconWrapperStyles }}>
        <Icon
          size={56}
          backgroundColor='primary'
          dark
          background
          color='primary'
          onClick={() => setShow(!show)}
          {...iconProps}
        />
      </Box>

      <Animation show={show} name='outmostIn' style={styles.animationBox}>
        <Box styles={styles.filterBox}>
          <Text text='Filter By' styles={styles.filterBox.title} />
        </Box>
      </Animation>

      <Overlay show={show} backgroundcolor='primary' onClick={() => setShow(false)} />
    </>
  )
}

Menu2.defaultProps = defaultProps
Menu2.propTypes = propTypes

export default Menu2
