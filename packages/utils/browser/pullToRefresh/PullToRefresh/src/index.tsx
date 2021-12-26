import React, { forwardRef, useEffect, useRef } from 'react'
import pullToRefreshMod from 'mobile-pull-to-refresh'
import ptrAnimatesMaterial from 'mobile-pull-to-refresh/dist/styles/material/animates'
import './index.css'

import vibrate from './utils/vibrate'

type Props = {
  color?: string
  containerSelector?: string
  children?: any
  onPullToRefresh: () => any
}

// <PullToRefresh onPullToRefresh={onPullToRefresh} ref={ref} />
const PullToRefreshFun = (
  { onPullToRefresh = () => null, color = 'blue', containerSelector }: Props,
  ref,
) => {
  const containerClassName = 'pull_to_refresh_container'
  const bodyElement = document.body
  const htmlElement = document.getElementsByTagName('html')[0]
  const scrollArrControls = {
    prevent: { attr: 'overscrollBehaviorY', value: 'contain' },
    allow: { attr: 'overscrollBehaviorY', value: 'auto' },
  }

  useEffect(() => {
    if (isSupported()) {
      const container = ref ? ref.current : document.querySelector(containerSelector)

      container && init(container)
      return () => {
        handleScrollAttributes('allow')
      }
    }
  }, [])

  const init = (container: string) => {
    handleScrollAttributes('prevent')
    pullToRefreshMod({
      container,
      animates: ptrAnimatesMaterial,
      refresh() {
        return new Promise((resolve) => {
          vibrate(3)
          onPullToRefresh()
          resolve(null)
        })
      },
    })
  }

  const handleScrollAttributes = (action) => {
    bodyElement.style[scrollArrControls[action].attr] = scrollArrControls[action].value
    htmlElement.style[scrollArrControls[action].attr] = scrollArrControls[action].value
  }

  const isSupported = () =>
    bodyElement.style.overscrollBehaviorY || bodyElement.style.overscrollBehaviorY === ''

  return (
    <>
      <div
        className={`${containerClassName} pull-to-refresh-material`}
        style={{ zIndex: 999 }}
      >
        <div className='pull-to-refresh-material__control'>
          <svg
            style={{ fill: color }}
            className='pull-to-refresh-material__icon'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z' />
            <path d='M0 0h24v24H0z' fill='none' />
          </svg>

          <svg
            style={{ fill: color }}
            className='pull-to-refresh-material__spinner'
            width='24'
            height='24'
            viewBox='25 25 50 50'
          >
            <circle
              className='pull-to-refresh-material__path'
              cx='50'
              cy='50'
              r='20'
              fill='none'
              strokeWidth='4'
              strokeMiterlimit='10'
            />
          </svg>
        </div>
      </div>
    </>
  )
}

const PullToRefreshWrapper = forwardRef(PullToRefreshFun)

export default function PullToRefresh(props: Props) {
  const ref = useRef(null)

  return (
    <div ref={ref} style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <PullToRefreshWrapper {...props} ref={ref} />
      {props.children}
    </div>
  )
}
