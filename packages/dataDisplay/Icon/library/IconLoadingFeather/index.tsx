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
      <path d='M13 1V5.8' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M13 20.2V25'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.51599 4.51599L7.91199 7.91199'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.088 18.088L21.484 21.484'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M1 13H5.8' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M20.2 13H25'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.51599 21.484L7.91199 18.088'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.088 7.91199L21.484 4.51599'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </Icon>
)
