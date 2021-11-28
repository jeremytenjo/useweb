import { PayloadTypes } from '../../index'

import shell from '../../../../../../packages/node/shell/index.js'

export default async function runStorybookStartCli(payload: PayloadTypes) {
  shell(
    'start-storybook -c ./devtools/storybook -p 6007 --quiet --ci --no-manager-cache --modern',
  )
}
