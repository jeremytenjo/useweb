const path = require('path')

const runCLI = require('../utils/runCLI')
const getDeepestFolderLength = require('../utils/getDeepestFolderLength')

module.exports = async function generateTypes(packageDir, entryPointFile) {
  if (entryPointFile !== 'index.ts' && entryPointFile !== 'index.tsx') return null
  const packageSrcDir = path.join(packageDir, 'src')
  const outputPath = path.join(packageDir, 'build', 'types')

  const srcDirLengh = await getDeepestFolderLength(packageSrcDir)
  const srcDirLengArray = Array.from(Array(srcDirLengh).keys())
  const inlcudePatt = srcDirLengArray.reduce((accumulator) => `${accumulator}/**`, '/**')
  // https://www.typescriptlang.org/tsconfig#include
  const include = path.join(packageSrcDir, inlcudePatt)

  // https://www.typescriptlang.org/docs/handbook/compiler-options.html
  const tscArgs = {
    esModuleInterop: true,
    isolatedModules: true,
    jsx: 'react',
    lib: ['ESNext', 'dom'],
    target: 'es5',
    noImplicitAny: false,
    noImplicitReturns: false,
    allowJs: true,
    noImplicitThis: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    noUncheckedIndexedAccess: true,
    skipLibCheck: true,
    types: ['node'],
    declaration: true,
    declarationDir: outputPath,
    emitDeclarationOnly: true,
    noEmit: false,
  }

  await runCLI(`tsc ${include}`, tscArgs)
}
