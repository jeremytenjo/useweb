import chalk from 'chalk'

import buildApp from '../buildApp/buildApp.js'
import shell from '../../packages/node/shell/shell.js'

export default async function deployApp() {
  await buildApp()
  console.log('')
  await shell('git add --all')
  await shell('git commit -m "built storybook"')
  await shell('git push')

  console.log('')
  console.log(chalk.cyan('Storybook deployed successfully!'))
}
