import fs from 'fs-extra'
import prettier from 'prettier'

import prettierConfig from '../../../devtools/prettier/prettierConfig.cjs'

const addTimestamp = (fileContent: string) => {
  const fileContentWithTimestamp = `
 /**
 * DON'T EDIT THIS FILE
 * This file is auto generated
 */
  
  ${fileContent}
  `
  return fileContentWithTimestamp
}

type Options = {
  nojs?: boolean
  noTimestamp?: boolean
}

export default function createFile(
  filePath: string,
  fileContent: string,
  options?: Options,
) {
  const formateed = options?.nojs
    ? fileContent
    : prettier.format(options?.noTimestamp ? fileContent : addTimestamp(fileContent), {
        ...prettierConfig,
        parser: 'babel',
      })

  fs.outputFileSync(filePath, formateed, (err) => {
    if (err) throw err
  })
}
