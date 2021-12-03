import startStorybook from '../../devtools/storybook/scripts/startStorybook/startStorybook.js'
import shell from '../../packages/node/shell/index.js'
;(async function devScript() {
  await shell('npm run lerna:link')
  startStorybook()
})()
