import startStorybook from '../../devtools/storybook/scripts/start/index.js'
import shell from '../../packages/node/shell/index.js'
;(async function devScript() {
  await shell('npm run lerna:link')
  startStorybook()
})()
