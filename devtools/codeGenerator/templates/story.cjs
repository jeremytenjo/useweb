const docsTemplate = () => {
  return {
    path: ({ name }) => `stories/${name}.docs.tsx`,
    template: ({ name, helpers }) => {
      return `import React from 'react'
      import {
        Title,
        Description,
        Primary,
        ArgsTable,
        PRIMARY_STORY,
      } from '@storybook/addon-docs'
      
      // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
      export default function Docs() {
        return (
          <>
            <Title />
            <Description>This is a ${helpers.changeCase.pascalCase(name)}</Description>
            <Primary />
            <ArgsTable story={PRIMARY_STORY} />
          </>
        )
      }`
    },
  }
}

const getStoryTemplate = ({ name, type = 'component', helpers }) => {
  const isFunction = type === 'function'
  const propsName = `${helpers.changeCase.capitalCase(name).split(' ').join('')}Props`

  return `//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import { ${name}, type ${propsName} } from './component'
${
  isFunction
    ? `import AsyncTester from '../../lib/components/data/AsyncTester/AsyncTester'`
    : ''
}

import Docs from './${name}.docs'

const defaultArgs: ${propsName} = {
  name: '${name}',
}

export default {
  title: 'lib/components/${name}',
  args: defaultArgs,
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
  },
}

const Template = (args) => {
  ${isFunction ? `const fn = async () => ${name}(args)` : ''}

  return (
    <>
      ${isFunction ? `<AsyncTester fn={fn} autoExec />` : `<${name} {...args} />`}
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: ${propsName} = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
`
}

const componentStory = ({ type }) => {
  return {
    path: ({ name }) => `stories/${name}.stories.tsx`,
    template: ({ name, helpers }) => getStoryTemplate({ name, type, helpers }),
  }
}

const componentStoryFiles = [
  docsTemplate(),
  componentStory({ type: 'component' }),
  {
    path: () => 'stories/component.tsx',
    template: ({ name, helpers }) => {
      const propsName = `${helpers.changeCase.capitalCase(name).split(' ').join('')}Props`

      return `
  import Component, { type ${propsName} as ComponentProps }  from '../src'

  // export const in order to automatically populate argtypes table https://storybook.js.org/docs/react/api/argtypes
  export const ${helpers.changeCase.pascalCase(name)} = Component

  export type ${propsName} = ComponentProps
`
    },
  },
]
const functionStoryFiles = [docsTemplate(), componentStory({ type: 'function' })]

module.exports = {
  componentStoryFiles,
  functionStoryFiles,
}
