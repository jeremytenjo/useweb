import shell from '../../../../../../packages/node/shell/index.js'

type Props = {
  noManagerCache?: boolean
}

export default async function runStorybookStartCli({ noManagerCache }: Props) {
  const noManagerCacheArg = noManagerCache ? '--no-manager-cache' : ''

  shell(
    `start-storybook -c ./devtools/storybook -p 7000 --quiet --ci --modern ${noManagerCacheArg}`,
  )
}
