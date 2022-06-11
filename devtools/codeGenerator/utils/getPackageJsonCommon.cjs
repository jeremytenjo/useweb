module.exports = function getPackageJsonCommon({ peerDependencies = [] }) {
  const devDependenciesString = getDevDependencies({ peerDependencies })
  const peerDependenciesString = peerDependencies.join(',\n')

  return `
  "version": "1.0.0",
  "main": "./build/index.js",
  "author": "Jeremy Tenjo",
  "types": "./build/types/index.d.ts",
  "files": [
    "build"
  ],
  "scripts": {
    "build": "node ./node_modules/@useweb/compiler/build",
    "build:watch": "node ./node_modules/@useweb/compiler/build --watch",
    "deploy": "npm run build && npm publish --access public"
  },
  "peerDependencies": {
    ${peerDependenciesString}
  },
  "devDependencies": {
    "@useweb/compiler": "latest",
    ${devDependenciesString}
  }`
}

const getDevDependencies = ({ peerDependencies }) => {
  const devDependencies = peerDependencies.filter(
    (pd) => !pd.includes('"react"') || !pd.includes('"react-dom"'),
  )
  const devDependenciesString = devDependencies.join(',\n')

  return devDependenciesString
}
