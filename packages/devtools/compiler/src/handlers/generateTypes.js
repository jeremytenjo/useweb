const path = require('path')

const ts = require('typescript')

const glob = require('../utils/glob')

function compile(fileNames, options) {
  // Create a Program with an in-memory emit
  const createdFiles = {}
  const host = ts.createCompilerHost(options)
  host.writeFile = (fileName, contents) => (createdFiles[fileName] = contents)

  // Prepare and emit the d.ts files
  const program = ts.createProgram(fileNames, options, host)
  program.emit()

  // Loop through all the input files
  fileNames.forEach((file) => {
    console.log('### JavaScript\n')
    console.log(host.readFile(file))

    console.log('### Type Definition\n')
    const dts = file.replace('.js', '.d.ts')
    console.log(createdFiles[dts])
  })
}

// Run the compiler

module.exports = async function generateTypes(packageDir) {
  // https://www.typescriptlang.org/tsconfig#include
  const includePattern = path.join(packageDir, 'src/*')
  const include = await glob(includePattern)

  const outputPath = path.join(packageDir, 'build', 'types')
  const command = `rm -rf ${outputPath}`

  // https://www.typescriptlang.org/tsconfig#compilerOptions
  const compilerOptions = {
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
    declarationDir: './build/types',
    emitDeclarationOnly: true,
    noEmit: false,
  }

  compile(include, compilerOptions)
}
