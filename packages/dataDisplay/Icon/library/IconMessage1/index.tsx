import React from 'react'

/* eslint-disable react/no-unknown-property */
import Icon from '../../src'

export default (props) => (
  <Icon {...props} customChildren={props.children}>
    <svg
      width='23'
      height='23'
      viewBox='0 0 23 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M20.2111 0.972229H2.78886C1.59108 0.972229 0.611084 1.95223 0.611084 3.15001V22.75L4.96664 18.3945H20.2111C21.4089 18.3945 22.3889 17.4145 22.3889 16.2167V3.15001C22.3889 1.95223 21.4089 0.972229 20.2111 0.972229ZM4.96664 8.59445H18.0333V10.7722H4.96664V8.59445ZM13.6778 14.0389H4.96664V11.8611H13.6778V14.0389ZM18.0333 7.50556H4.96664V5.32779H18.0333V7.50556Z' />
    </svg>
  </Icon>
)
