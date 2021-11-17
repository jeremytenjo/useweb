import { useEffect, useRef } from 'react'

/**
 * {@link https://keycode.info/ Find key code}
 * @param  {string} keys (use event.key)
 * @param  {function} onPress
 * @example
 * const onPress = () => {
    console.log('onPress!')
  }
 * useKeyPress('a', onPress)
 * @description WARNING - if `onPress` function updates state, ensure to track that state in useRef and useState to keep state up to date. See `Carousel` for example.
 */
export default function useKeyPress(keys: string, onPress?: () => void) {
  const keysArray = keys.split(' ').map((key) => key.toLowerCase())
  const isSingleKey = keysArray.length === 1
  const pressedKeys = useRef([])

  const keyIsRequested = (key) => {
    key = key.toLowerCase()
    return keysArray.includes(key)
  }

  const addPressedKey = (key) => {
    key = key.toLowerCase()
    const update = pressedKeys.current.slice()
    update.push(key)
    pressedKeys.current = update
  }

  const removePressedKey = (key) => {
    key = key.toLowerCase()
    let update = pressedKeys.current.slice()
    const index = update.findIndex((sKey) => sKey === key)
    update = update.slice(0, index)
    pressedKeys.current = update
  }

  const downHandler = ({ key }) => {
    const isKeyRequested = keyIsRequested(key)
    if (isKeyRequested) {
      addPressedKey(key)
    }
  }

  const upHandler = ({ key }) => {
    const isKeyRequested = keyIsRequested(key)
    if (isKeyRequested) {
      if (isSingleKey) {
        pressedKeys.current = []
        onPress()
      } else {
        const containsAll = keysArray.every((i) => pressedKeys.current.includes(i))
        removePressedKey(key)
        if (containsAll) {
          onPress()
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [])
}
