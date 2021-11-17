import blinking from './blinking'
import centerOut from './centerOut'
import outmostIn from './outmostIn'
import showHide from './showHide'

const presets = {
  blinking,
  centerOut,
  outmostIn,
  showHide,
}

const animationPresets = (name, props) => presets[name](props)

export default animationPresets
