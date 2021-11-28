/* eslint-disable react/no-unknown-property */
import Icon from '../../src'

export default (props) => (
  <Icon {...props} customChildren={props.children} isStroke>
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 26 23'>
      <path
        fill='currentcolor'
        stroke='currentcolor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M13 1l3.708 6.862L25 8.969l-6 5.338 1.416 7.541L13 18.286l-7.416 3.562L7 14.307 1 8.969l8.292-1.107L13 1z'
      />
    </svg>
  </Icon>
)
