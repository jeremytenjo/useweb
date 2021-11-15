const path = require('path')

const runCLI = require('../utils/runCLI')

module.exports = async function generateTypes(packageDir) {
  const outputPath = path.join(packageDir, 'build', 'types')

  // https://www.typescriptlang.org/tsconfig#include
  const include = path.join(packageDir, 'src/*')

  // https://www.typescriptlang.org/docs/handbook/compiler-options.html
  const tscArgs = {
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

  await runCLI(`tsc ${include}`, tscArgs)
}
