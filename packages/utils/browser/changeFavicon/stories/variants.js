import React from 'react'

import { B } from '../../../../storybook/ui'
import Button from '../../../../input/Button/src'
import changeFavicon from '..'

const Example = () => {
  const change = () => {
    changeFavicon('https://www.flaticon.com/svg/static/icons/svg/3199/3199830.svg')
  }

  return (
    <>
      <B title='default'>
        <Button onClick={change} />
      </B>
    </>
  )
}

export default Example
