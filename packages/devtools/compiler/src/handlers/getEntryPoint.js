const path = require('path')

const glob = require('glob')

const getFiles = (pattern) => {
  // eslint-disable-next-line no-undef
  return new Promise(async (resolve, reject) => {
    glob(pattern, null, (err, files) => {
      if (err) reject(err)
      resolve(files)
    })
  })
}

module.exports = async function getEntryPoint(packageDir) {
  const pattern = path.join(packageDir, 'src', '/index.*')
  let entryPointFile = 'index.js'
  const srcFiles = await getFiles(pattern)

  if (srcFiles.length) {
    const indexFile = srcFiles[0].split('/').pop()
    entryPointFile = indexFile
  } else throw new Error('package should have an index file inside the src folder')

  const entryPoint = path.join(packageDir, 'src', entryPointFile)

  return entryPoint
}
