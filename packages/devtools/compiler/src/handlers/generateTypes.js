const path = require('path')

const runCLI = require('../utils/runCLI')

module.exports = async function generateTypes({ outputPath, entryPointFile }) {
  if (entryPointFile !== 'index.ts' && entryPointFile !== 'index.tsx') return null

  const packageSrcDir = path.join(outputPath, 'src')
  const outputPath = path.join(outputPath, 'build', 'types')

  // https://www.typescriptlang.org/tsconfig#include
  const include = path.join(packageSrcDir, 'index.*')

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
