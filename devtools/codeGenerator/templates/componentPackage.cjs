const shell = require('child_process')

const getPackageJsonCommon = require('../utils/getPackageJsonCommon.cjs')

const component = require('./component.cjs')
const story = require('./story.cjs')

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
          addMuiPeerDeps: true,
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
