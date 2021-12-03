import buildStorybook from '../../devtools/storybook/scripts/buildStorybook/buildStorybook.js'
import deployHosting from '../../firebase/scrips/deployHosting/deployHosting.js'
;(async function devScript() {
  await buildStorybook()
  deployHosting()
})()
