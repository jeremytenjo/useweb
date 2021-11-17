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
    "@useweb/compiler": "1.1.4"
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
