import fetch from 'node-fetch'

import log from '../../../../../utils/log'
import createFile from '../../../../../utils/files/createFile'

/**
 * @example
 * downloadImage(url, dest)
 */
export default async function downloadImage(url, dest) {
  try {
    const res = await fetch(url)
    const fileContent = await res.text()

    createFile(dest, fileContent, { nojs: true })
  } catch (error) {
    log(`Error downloading image from ${url} \n ${error}`, { error: true })
  }
}
