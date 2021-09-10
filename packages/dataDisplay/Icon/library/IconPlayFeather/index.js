/* eslint-disable react/no-unknown-property */
import Icon from '../../'

export default (props) => (
  <Icon {...props} customChildren={props.children} isStroke>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather featherPlay'
    >
      <polygon points='5 3 19 12 5 21 5 3' />
    </svg>
  </Icon>
)
