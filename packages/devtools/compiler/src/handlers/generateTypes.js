const path = require('path')

const runCLI = require('../utils/runCLI')

module.exports = async function generateTypes({
  outputPath,
  entryPointFile,
  packageDir,
  outputBuildFolder,
  typesOutputDir,
}) {
  if (entryPointFile !== 'index.ts' && entryPointFile !== 'index.tsx') return null

  const packageSrcDir = path.join(packageDir, 'src')
  const typesOutputPath = path.join(outputPath, outputBuildFolder, typesOutputDir)

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
    declarationDir: typesOutputPath,
    emitDeclarationOnly: true,
    noEmit: false,
  }

  await runCLI(`tsc ${include}`, tscArgs)
}
