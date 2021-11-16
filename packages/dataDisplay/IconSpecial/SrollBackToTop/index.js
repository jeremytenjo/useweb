import Animation from '../../../../utils/Animation'
import IconArrowFeather from '../../library/IconArrowFeather/index'

import { iconStyles } from './styles'
import { defaultProps, propTypes } from './props.js'

const IconSrollBackTop = ({ iconProps, animationProps, offset }) => {
  const [show, setshow] = useState(null)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true)
    return () => {
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [])

  const handleScroll = () => {
    const show = window.scrollY > offset
    setshow(show)
  }

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <Animation show={show} {...animationProps}>
      <IconArrowFeather
        background
        color='white'
        onClick={handleClick}
        style={iconStyles}
        backgroundColor='blackOpaque'
        {...iconProps}
      />
    </Animation>
  )
}

IconSrollBackTop.defaultProps = defaultProps
IconSrollBackTop.propTypes = propTypes

export default memo(IconSrollBackTop)
