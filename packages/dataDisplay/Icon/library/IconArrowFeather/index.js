/* eslint-disable react/no-unknown-property */
import Icon from '../../'

export default (props) => (
  <Icon {...props} customChildren={props.children} isStroke>
    <svg viewBox='0 0 9 15' fill='none'>
      <path
        d='M7.10913 13.9727L1.10913 7.97272L7.10913 1.97272'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </Icon>
)
