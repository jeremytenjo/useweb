import chalk from 'chalk'

export default {
  success: (text) => {
    console.log(`${chalk.green('✔')} ${text}`)
  },
}
