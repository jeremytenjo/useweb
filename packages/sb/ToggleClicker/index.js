import React, { cloneElement, useState } from 'react'

import Button from '../../input/Button'

/**
 * @example
 * <ToggleClicker toggleProp='show' component={<Overlay />} />
 */
export default function ToggleClicker({
  component,
  toggleProp = 'show',
  closeFunc = 'onClick',
  children,
}) {
  const [toggle, setToggle] = useState(null)

  return (
    <>
      <Button text='Toggle' onClick={() => setToggle(!toggle)} />

      {cloneElement(component, {
        [toggleProp]: toggle,
        [closeFunc]: () => setToggle(!toggle),
      })}

      {children && children}
    </>
  )
}
