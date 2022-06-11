const shell = require('child_process')

const component = require('./component.cjs')
const story = require('./story.cjs')
const getPackageJsonCommon = require('../utils/getPackageJsonCommon.cjs')

const onCreate = ({ outputPath }) => {
  shell.exec(`cd ${outputPath} && npm i`)
}

const template = {
  type: 'Component Package',
  hooks: {
    onCreate,
  },
  files: [
    ...component.files,
    ...story.componentStoryFiles,
    {
      path: () => 'package.json',
      template: ({ name, helpers: { changeCase } }) => {
        const packageJsonCommon = getPackageJsonCommon({
          peerDependencies: ['"react": "^18.0.0"', '"@mui/material": "^5.0.0"'],
        })

        return `{
      "name": "@useweb/${changeCase.lowerCase(name)}",
      ${packageJsonCommon}
    }`
      },
    },
  ],
}

module.exports = {
  template,
}
