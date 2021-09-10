module.exports = function updateVersion(number, type = 'minor') {
  let version = '0.1.0'

  if (number) {
    let [major, minor, patch] = number.split('.')
    major = parseInt(major, 10)
    minor = parseInt(minor, 10)
    patch = parseInt(patch, 10)

    if (type === 'major') version = `${major + 1}.${minor}.${patch}`
    if (type === 'minor') version = `${major}.${minor + 1}.${patch}`
    if (type === 'patch') version = `${major}.${minor}.${patch + 1}`
  }

  return version
}
