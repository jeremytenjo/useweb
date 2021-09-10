/* eslint-disable react/no-unknown-property */
import Icon from '../../'

export default (props) => (
  <Icon {...props} customChildren={props.children}>
    <svg
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0)'>
        <path d='M14.5677 14.5656H0.727264V0.727295H14.5677V14.5656Z' fill='#F1511B' />
        <path
          d='M29.8506 14.5656H16.009V0.727295H29.8494V14.5656H29.8506Z'
          fill='#80CC28'
        />
        <path d='M14.5677 29.8507H0.727264V16.0124H14.5677V29.8507Z' fill='#00ADEF' />
        <path
          d='M29.8506 29.8507H16.009V16.0124H29.8494V29.8507H29.8506Z'
          fill='#FBBC09'
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect
            width='29.1234'
            height='29.1234'
            fill='white'
            transform='translate(0.727264 0.727295)'
          />
        </clipPath>
      </defs>
    </svg>
  </Icon>
)
