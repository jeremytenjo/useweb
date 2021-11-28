/* eslint-disable react/no-unknown-property */
import Icon from '../../src'

export default (props) => (
  <Icon {...props} customChildren={props.children}>
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M22 11.08V12a10 10 0 11-5.93-9.14'
        stroke='#000'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M22 4L12 14.01l-3-3'
        stroke='#000'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </Icon>
)
