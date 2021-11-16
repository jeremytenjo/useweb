import { storiesOf } from '@storybook/react'

import { B } from '../../../storybook/ui'

import Example from './variants'

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

storiesOf('Lib/Animation/Web Animations API', module).add('variations', () => (
  <Variations />
))
