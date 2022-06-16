const path = require('path')

const doesFileExist = require('../utils/doesFileExist')
const copyFile = require('../utils/copyFile')
const glob = require('../utils/glob')

/**
 * Check if index.d.ts was generated in build types folder, if not search for it in child folders and copy it to the types build folder
 */
module.exports = async function ensureDtsFile({
  typesOutputPath,
  indexDtsDirPathFallback,
}) {
  const indexDtsFilePath = path.join(typesOutputPath, 'index.d.ts')
  const added = await doesFileExist(indexDtsFilePath)

  if (!added) {
    if (!indexDtsDirPathFallback) {
      console.log('')
      console.log(
        `index.d.ts for ${typesOutputPath} not created because it is nested, provide a indexDtsDirPathFallback using --indexDtsDirPathFallback`,
      )
      console.log('')
      return process.exit(1)
    }

    const searchPattern = `${typesOutputPath}/**/index.d.ts`
    const nestedDtsFilePath = await glob(searchPattern)
    const fallbackDtsPath = nestedDtsFilePath.find((dts) =>
      dts.includes(indexDtsDirPathFallback),
    )
    const foundDtsOutputPath = path.join(typesOutputPath, 'index.d.ts')

    await copyFile({
      sourcePath: fallbackDtsPath,
      destPath: foundDtsOutputPath,
    })
  }
}
