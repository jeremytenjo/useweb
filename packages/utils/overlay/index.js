import useAnimation from '../Animation'
import Box from '@useweb/box'
import preventBodyScroll from '../scrolling/preventBodyScroll'

import { defaultProps, propTypes } from './props'
import * as styles from './styles'

const Overlay = ({ show, onClick, dataCy, appendToBody, wrapperStyles }) => {
  const overlayRef = useRef(null)

  useEffect(() => {
    if (appendToBody) {
      document.querySelector('body').append(overlayRef.current)
    }
  }, [])

  useEffect(() => {
    preventBodyScroll(show)
  }, [show])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyInput, true)
    return () => {
      window.removeEventListener('keydown', handleKeyInput, true)
      preventBodyScroll(false)
    }
  }, [])

  const handleKeyInput = ({ key }) => key === 'Escape' && onClick()

  useAnimation({
    name: 'showHide',
    show,
    el: overlayRef,
  })

  return (
    <Box
      name='overlay'
      ref={overlayRef}
      onClick={onClick}
      data-cy={dataCy}
      styles={{ ...styles.wrapper, ...wrapperStyles }}
    />
  )
}

Overlay.defaultProps = defaultProps
Overlay.propTypes = propTypes

export default Overlay
