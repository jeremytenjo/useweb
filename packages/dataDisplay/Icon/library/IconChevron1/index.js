/* eslint-disable react/no-unknown-property */
import Icon from '../../src'

export default (props) => (
  <Icon {...props} customChildren={props.children} isStroke>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='15'
      height='9'
      fill='none'
      viewBox='0 0 15 9'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M1.274 1.281l6 6 6-6'
      />
    </svg>
  </Icon>
)
