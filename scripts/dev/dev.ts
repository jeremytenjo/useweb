import startStorybook from '../../devtools/storybook/scripts/startStorybook/startStorybook.js'
import shell from '../../packages/node/shell/index.js'

export default async function devApp() {
  await shell('npm run lerna:link')
  startStorybook()
}
