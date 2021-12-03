const shell = require('child_process')

// changeCase API https://github.com/blakeembrey/change-case#core

const packageJsonCommon = `
  "version": "1.0.0",
  "main": "./build/index.js",
  "author": "Jeremy Tenjo",
  "types": "./build/types/index.d.ts",
  "files": [
    "build"
  ],
  "scripts": {
    "build": "node ./node_modules/@useweb/compiler/build",
    "build:watch": "node ./node_modules/@useweb/compiler/build --watch",
    "deploy": "npm run build && npm publish --access public"
  },
  "peerDependencies": {
    "react": "^17.0.0"
  },
  "devDependencies": {
    "@useweb/compiler": "1.1.5"
  }`

const onCreate = ({ outputPath }) => {
  shell.exec(`cd ${outputPath} && npm i`)
}

module.exports = [
  {
    type: 'React Component',
    hooks: {
      onCreate,
    },
    files: [
      {
        path: () => 'src/index.jsx',
        template: ({ name, helpers: { changeCase } }) => `
        import React from 'react';
        
        export default function ${changeCase.pascalCase(name)}() {
          return <div>${changeCase.pascalCase(name)}</div>
        }
          `,
      },
      {
        path: () => 'stories/stories.tsx',
        template: ({ name, helpers: { changeCase } }) => `
        import React from 'react'
        import { Meta } from '@storybook/react'

        import Docs from './docs'
        import { ${changeCase.pascalCase(name)} } from './component'

        export default {
          title: 'packages/namethisfolder/${changeCase.pascalCase(name)}',
          component: ${changeCase.pascalCase(name)},
          // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
          parameters: {
            docs: {
              page: () => <Docs />,
            },
          },
        } as Meta

        const Template = (args) => {
          return (
            <${changeCase.pascalCase(name)} {...args} />
          )
        }

        export const Example = Template.bind({})
        Example.args = {}`,
      },
      {
        path: () => 'stories/component.tsx',
        template: ({ name, helpers: { changeCase } }) => `
        import Component from '../src'

        // export const in order to automatically populate argtypes table https://storybook.js.org/docs/react/api/argtypes
        export const ${changeCase.pascalCase(name)} = Component
`,
      },
      {
        path: () => 'stories/docs.tsx',
        template: ({ name, helpers: { changeCase } }) => `
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
              <Description>This is a ${changeCase.pascalCase(name)}</Description>
              <Primary />
              <ArgsTable story={PRIMARY_STORY} />
            </>
          )
        }`,
      },
      {
        path: () => 'package.json',
        template: ({ name, helpers: { changeCase } }) => `{
        "name": "@useweb/${changeCase.lowerCase(name)}",
        ${packageJsonCommon}
      }`,
      },
    ],
  },
  {
    type: 'React Hook',
    hooks: {
      onCreate,
    },
    files: [
      {
        path: () => 'src/index.ts',
        template: ({ name }) => `
        export default function ${name}() {
          const title = '${name}'
          return {
            title
          }
        }
          `,
      },
      {
        path: () => 'package.json',
        template: ({ name, helpers: { changeCase } }) => `{
        "name": "@useweb/${changeCase.paramCase(name)}",
        ${packageJsonCommon}
      }`,
      },
    ],
  },
]
