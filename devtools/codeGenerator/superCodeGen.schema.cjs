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
    "react": "^18.0.0"
  },
  "devDependencies": {
    "@useweb/compiler": "latest"
  }`

const onCreate = ({ outputPath }) => {
  shell.exec(`cd ${outputPath} && npm i`)
}

exports.old = [
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

// templates for the `Super Code Generator` vscode plugin
// https://marketplace.visualstudio.com/items?itemName=tenjojeremy.super-code-generator

const componentPackage = require('./templates/componentPackage.cjs')
const muiComponentPackage = require('./templates/muiComponent.cjs')
const functions = require('./templates/function.cjs')

module.exports = [
  componentPackage.template,
  functions.template,
  muiComponentPackage.template,
]
