import chalk from 'chalk'

import buildApp from '../buildApp/buildApp.js'
import shell from '../../packages/node/shell/shell.js'

export default async function deployApp() {
  await buildApp()
  await shell('git commit -m "built storybook" -a')
  await shell('git push')

  console.log('')
  console.log(chalk.cyan('Storybook deployed successfully!'))
}
