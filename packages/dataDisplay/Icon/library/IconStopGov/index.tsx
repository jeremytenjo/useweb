import React from 'react'

/* eslint-disable react/no-unknown-property */
import Icon from '../../src'

export default (props) => (
  <Icon {...props} customChildren={props.children}>
    <svg
      width='20'
      height='18'
      viewBox='0 0 20 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M19.8668 8.50528L15.3611 0.701595C15.1851 0.395817 14.858 0.207047 14.5046 0.207047H5.49445C5.14112 0.207047 4.81392 0.395858 4.63792 0.701595L0.132814 8.50528C-0.0445153 8.81126 -0.0445153 9.18832 0.132814 9.49478L4.63792 17.2984C4.81392 17.6041 5.14108 17.793 5.49445 17.793H14.5046C14.858 17.793 15.185 17.6041 15.3611 17.2984L19.8668 9.49478C20.0442 9.18868 20.0442 8.81102 19.8668 8.50528ZM13.9332 15.8139H6.06585L2.13215 8.99979L6.06585 2.18605H13.9332L17.8674 8.99979L13.9332 15.8139Z' />
      <path d='M6.81415 3.48157L3.62854 8.99979L6.81415 14.5184H13.1852L16.3714 8.99979L13.1852 3.48157H6.81415Z' />
    </svg>
  </Icon>
)
