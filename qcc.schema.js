const shell = require('shelljs')

module.exports = [
  {
    type: 'React component',
    hooks: {
      onCreate: ({ outputPath }) => {
        shell(`cd ${outputPath} && npm i`)
      },
    },
    files: [
      {
        path: () => 'src/index.js',
        template: ({ name, helpers: { changeCase } }) => `
        import React from 'react';
        import styles from './${changeCase.paramCase(name)}.css';
        
        export default function ${changeCase.pascalCase(name)}() {
          return ${changeCase.pascalCase(name)}
        }
          `,
      },
      {
        path: () => 'package.json',
        template: ({ name }) => `{
          "name": "@useweb/${name}",
          "version": "0.0.1",
          "main": "./build/index.js",
          "author": "Jeremy Tenjo",
          "files": [
            "build"
          ],
          "scripts": {
            "build": "node ./node_modules/@useweb/compiler/build",
            "build:watch": "node ./node_modules/@useweb/compiler/build --watch",
            "prepublish": "npm run build",
            "deploy": "npm publish --access public"
          },
          "peerDependencies": {
            "react": "^17.0.0"
          },
          "devDependencies": {
            "@useweb/compiler": "0.0.2"
          }
        }`,
      },
    ],
  },
]
