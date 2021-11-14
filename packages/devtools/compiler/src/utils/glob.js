const globLib = require('glob')

module.exports = async function glob(pattern) {
  // eslint-disable-next-line no-undef
  return new Promise(async (resolve, reject) => {
    globLib(pattern, null, (err, files) => {
      if (err) reject(err)
      resolve(files)
    })
  })
}
