const getPackagejson = require('../utils/getPackageJsonCommon.cjs')
const getReadme = require('../utils/getReadme.cjs')

const story = require('./story.cjs')

const files = [
  {
    path: () => `src/index.tsx`,
    template: ({ name, helpers }) => {
      const namePascalCase = helpers.changeCase.pascalCase(name)
      const propsName = `${namePascalCase}Props`
      return `import React from 'react'
      import Mui${name}, { type ${propsName} as Mui${propsName} } from '@mui/material/${name}'
      
      export type ${propsName} = Mui${propsName} 
      
      /**
       * [API](https://mui.com/material-ui/api/${name}/)
       * 
       * [Demo](https://mui.com/material-ui/react-${name}/)
       * 
       * @example 
       * <${name} open={open} onClose={close${name}}>Hello</${name}>
       */
      export default function ${name}(props: ${propsName}) {
        return <Mui${name} {...props} />
      }`
    },
  },
  {
    path: () => `package.json`,
    template: ({ name, helpers }) => {
      const nameLowerCase = helpers.changeCase.lowerCase(name)
      return `{
        "name": "@useweb/${nameLowerCase}",
        ${getPackagejson({ addMuiPeerDeps: true })}
      }
      `
    },
  },
  ...story.componentStoryFiles,
  getReadme(),
]

const template = {
  type: 'Mui Component Package',
  files,
}

module.exports = {
  files,
  template,
}
