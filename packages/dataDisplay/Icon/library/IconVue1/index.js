/* eslint-disable react/no-unknown-property */
import Icon from '../../'

export default (props) => (
  <Icon {...props} customChildren={props.children}>
    <svg viewBox='0 0 256 221'>
      <path
        fill='#41B883'
        d='M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z'
      />
      <path fill='#41B883' d='M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z' />
      <path
        fill='#35495E'
        d='M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z'
      />
    </svg>
  </Icon>
)
