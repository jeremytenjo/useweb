const { promises: Fs } = require('fs')

module.exports = async function doesFileExist(path) {
  try {
    await Fs.access(path)
    return true
  } catch {
    return false
  }
}
