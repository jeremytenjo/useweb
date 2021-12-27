import { useEffect } from 'react'
import mobilePullToRefresh from 'mobile-pull-to-refresh'
import ptrAnimatesMaterial from 'mobile-pull-to-refresh/dist/styles/material/animates'

import isTouchScreen from '../../../../screen/isTouchScreen'

import createRefreshElement from './handlers/createRefreshElement'
import addStylesToHead from './handlers/addStylesToHead'
import vibrate from './utils/vibrate'

type Options = {
  color?: string
}

/**
 * Change spinner color with `--use-pull-to-refresh-spinner-color` css variable
 *
 * @example
 * useOnPullToRefresh(() => {
    console.log('refreshed')
  })
 */
export default function usePullToRefresh(
  onPullToRefresh: () => any = () => null,
  { color = 'var(--use-pull-to-refresh-spinner-color, black)' }: Options = {},
) {
  const bodyElement = document.body

  const handleScrollAttributes = (action: 'allow' | 'prevent') => {
    const scrollArrControls = {
      prevent: { attr: 'overscrollBehaviorY', value: 'contain' },
      allow: { attr: 'overscrollBehaviorY', value: 'auto' },
    }
    const minHeight = '100vh'

    bodyElement.style[scrollArrControls[action].attr] = scrollArrControls[action].value
    bodyElement.style.minHeight = minHeight
  }

  const isSupported = () =>
    (bodyElement.style.overscrollBehaviorY ||
      bodyElement.style.overscrollBehaviorY === '') &&
    isTouchScreen()

  useEffect(() => {
    if (isSupported()) {
      addStylesToHead()
      createRefreshElement({ color })
      const remove = init(bodyElement)

      return () => {
        handleScrollAttributes('allow')
        remove()
      }
    }
  }, [])

  const init = (container: HTMLElement) => {
    handleScrollAttributes('prevent')
    const remove = mobilePullToRefresh({
      container,
      animates: ptrAnimatesMaterial,
      refresh() {
        return new Promise((resolve) => {
          vibrate(3)
          onPullToRefresh()
          resolve(true)
        })
      },
    })

    return remove
  }
}
