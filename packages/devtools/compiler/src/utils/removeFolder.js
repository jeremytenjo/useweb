const fs = require('fs')

module.exports = function removeFolder(path) {
  return new Promise((resolve) => {
    fs.rm(path, { recursive: true }, () => resolve())
  })
}
