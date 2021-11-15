const path = require('path')

const runCLI = require('../utils/runCLI')
const glob = require('../utils/glob')

module.exports = async function generateTypes(packageDir) {
  const outputPath = path.join(packageDir, 'build', 'types')

  // https://www.typescriptlang.org/tsconfig#include
  // const includePattern = path.join(packageDir, 'src/*')
  // const include = await glob(includePattern)

  // https://www.typescriptlang.org/tsconfig#compilerOptions
  const tsConfig = {
    esModuleInterop: true,
    isolatedModules: true,
    jsx: 'react',
    lib: ['ESNext', 'dom'],
    target: 'es5',
    noImplicitAny: true,
    noImplicitReturns: false,
    noImplicitThis: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    noUncheckedIndexedAccess: true,
    skipLibCheck: true,
    strict: true,
    types: ['node'],
    declaration: true,
    declarationDir: outputPath,
    emitDeclarationOnly: true,
    noEmit: false,
  }

  await runCLI('tsc', tsConfig)
}
