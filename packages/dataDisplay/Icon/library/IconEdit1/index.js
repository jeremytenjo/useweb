/* eslint-disable react/no-unknown-property */
import Icon from '../../'

export default (props) => (
  <Icon {...props} customChildren={props.children} isStroke>
    <svg
      width='18'
      height='16'
      viewBox='0 0 18 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.6666 2.00001C12.8667 1.82491 13.1043 1.68602 13.3657 1.59126C13.6272 1.4965 13.9074 1.44772 14.1904 1.44772C14.4734 1.44772 14.7536 1.4965 15.0151 1.59126C15.2766 1.68602 15.5141 1.82491 15.7142 2.00001C15.9143 2.1751 16.0731 2.38297 16.1814 2.61175C16.2897 2.84052 16.3454 3.08572 16.3454 3.33334C16.3454 3.58096 16.2897 3.82616 16.1814 4.05494C16.0731 4.28371 15.9143 4.49158 15.7142 4.66668L5.42851 13.6667L1.23804 14.6667L2.38089 11L12.6666 2.00001Z'
        stroke='#512900'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </Icon>
)
