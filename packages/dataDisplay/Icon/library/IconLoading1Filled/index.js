/* eslint-disable react/no-unknown-property */
import Icon from '../../src'

export default (props) => (
  <Icon {...props} customChildren={props.children} isStroke>
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13 1v4.8M13 20.2V25M4.516 4.516l3.396 3.396M18.088 18.088l3.396 3.396M1 13h4.8M20.2 13H25M4.516 21.484l3.396-3.396M18.088 7.912l3.396-3.396'
        stroke='#000'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </Icon>
)
