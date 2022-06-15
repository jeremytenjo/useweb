import React from 'react'

import { B } from '../../../storybook/ui'

import Example from './variants'

export default {
  title: 'Misc/Animation/Animate',
}

const variationsReq = require.context('../presets', true, /.js$/)
const animationTypesPaths = variationsReq.keys()

const Variations = () => {
  return animationTypesPaths.map((path) => {
    if (path.includes('preset')) return null

    const type = path.split('/').join('').split('.')[1]
    return (
      <B title={type} key={path}>
        <Example type={type} />
      </B>
    )
  })
}

const Template = (args) => {
  return (
    <>
      <Variations {...args} />
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}
