import buildStorybook from '../../devtools/storybook/scripts/buildStorybook/buildStorybook.js'
import deployHosting from '../../firebase/scripts/deployHosting/deployHosting.js'
;(async function devScript() {
  await buildStorybook()
  deployHosting()
})()
