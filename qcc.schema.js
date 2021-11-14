const shell = require('child_process')

module.exports = [
  {
    type: 'React component',
    hooks: {
      onCreate: ({ outputPath }) => {
        shell.exec(`cd ${outputPath} && npm i`)
      },
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
        template: ({ name }) => `{
          "name": "@useweb/${name}",
          "version": "0.0.1",
          "main": "./build/index.js",
          "author": "Jeremy Tenjo",
          "types": "./build/types/index.d.ts",
          "files": [
            "build"
          ],
          "scripts": {
            "build": "node ./node_modules/@useweb/compiler/build",
            "build:watch": "node ./node_modules/@useweb/compiler/build --watch",
            "prepublish": "npm run build",
            "deploy": "npm run build && npm publish --access public"
          },
          "peerDependencies": {
            "react": "^17.0.0"
          },
          "devDependencies": {
            "@useweb/compiler": "0.0.3"
          }
        }`,
      },
    ],
  },
]
