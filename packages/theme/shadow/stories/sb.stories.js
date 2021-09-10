import { storiesOf } from '@storybook/react'

import B from '../../../storybook/variationBlock/index'
import shadows from '..'

const vars = shadows.split('boxShadow')
vars.pop()

const Variations = () => (
  <B background style={{ width: 'auto' }}>
    {vars.map((variable, i) => (
      <B
        title={`box-shadow: var(--boxShadow-${i + 1})`}
        titleColor='black'
        background
        style={{ width: 'auto' }}
        key={i}
      >
        <div
          style={{
            boxShadow: `var(--boxShadow-${i + 1})`,
            width: 100,
            height: 100,
          }}
        />
      </B>
    ))}
  </B>
)

storiesOf('Lib/Theme/Shadow', module).add('Variables', () => <Variations />)
