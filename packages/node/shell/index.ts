import concurrently from 'concurrently'

/**
 * @example
// run single command 
 * shell('npm run start')
 * 
// run concurrently
 * shell(['npm run start:app', 'npm run start:storybook'])
 */
export default function shell(commands: string | string[]) {
  const _commands = typeof commands === 'string' ? [commands] : commands

  concurrently(_commands, {
    prefix: 'none',
  })
}
