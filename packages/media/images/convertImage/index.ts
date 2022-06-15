import isNode from '../../../utils/enviroment/isNode'

export default async function convertImage(fileDir, outputDir, format) {
  if (isNode) {
    const sharp = require('sharp')
    await sharp(fileDir).toFormat(format).toFile(outputDir)
  } else {
    console.error('Sharp is only suppprted in Node enviroment')
  }
}
