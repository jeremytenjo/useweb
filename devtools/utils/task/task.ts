import chalk from 'chalk'

import log from '../log.js'

type TaskProps = {
  fn: (props?: any) => Promise<any>
  title: string
  onError?: (error: any) => any
  noBail?: boolean
}

export default async function task(props: TaskProps) {
  console.log(`${chalk.yellow('⚡')}${props.title}`)
  console.log('')

  try {
    const result = await props.fn()

    console.log('')
    log.success(props.title)

    return result
  } catch (error) {
    if (props?.onError) {
      await props.onError(error)
      return
    }

    console.log('')
    console.log(`ERROR: ${chalk.red(props.title)}`)
    console.log('')
    console.error(chalk.red(JSON.stringify(error, null, 2)))

    if (props.noBail) return

    process.exit(1)
  } finally {
    console.log('')
  }
}
