const fs = require('fs')

module.exports = async function copyFile({ sourcePath, destPath }) {
  await fs.copyFileSync(sourcePath, destPath)
}
