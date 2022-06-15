import React from 'react'

/* eslint-disable react/no-unknown-property */
import Icon from '../../src'

export default (props) => (
  <Icon {...props} customChildren={props.children}>
    <svg
      width='17'
      height='30'
      viewBox='0 0 17 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0)'>
        <path
          d='M10.7653 29.8471V16.5656H15.2452L15.9159 11.3896H10.7653V8.08482C10.7653 6.58628 11.1835 5.56494 13.3431 5.56494L16.0974 5.56367V0.934324C15.6208 0.871475 13.986 0.730591 12.0839 0.730591C8.11281 0.730591 5.3941 3.14263 5.3941 7.57247V11.3897H0.902618V16.5657H5.39396V29.8472L10.7653 29.8471Z'
          fill='#3C5A9A'
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect
            width='15.1948'
            height='29.1234'
            fill='white'
            transform='translate(0.902588 0.727295)'
          />
        </clipPath>
      </defs>
    </svg>
  </Icon>
)
