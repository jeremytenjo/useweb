import styled from 'styled-components'

import system from '../../theme/system'

import { defaultProps, propTypes } from './props'

const defineTag = (tag, variant) => {
  switch (variant) {
    case 'body1':
    case 'body2':
      return 'p'
    default:
      return tag
  }
}

const El = styled.span`
  ${system}
`

/**
 * @example
 * <Text text={initials} />
 */
const Text = ({ tag, variant, styles, onClick, text, className = '', children }) => {
  const classN = `typography-${variant} ${className}`
  const Tag = defineTag(tag, variant)

  return (
    <El as={Tag} styles={styles} className={classN} onClick={onClick}>
      {children || text}
    </El>
  )
}

Text.defaultProps = defaultProps
Text.propTypes = propTypes

export default Text
