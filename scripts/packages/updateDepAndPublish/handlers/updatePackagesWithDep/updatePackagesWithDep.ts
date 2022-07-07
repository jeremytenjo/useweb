import path from 'path'

import chalk from 'chalk'

import shell from '../../../../../packages/node/shell/shell.js'
import glob from '../../../../../devtools/utils/glob.js'
import { type EnquireDepReturn } from '../enquireDep/enquireDep'
import log from '../../../../../devtools/utils/log.js'

export type GetPackagesThatHaveDepProps = { depToUpdate: EnquireDepReturn }

export default async function updatePackagesWithDep({
  depToUpdate,
}: GetPackagesThatHaveDepProps) {
  const packagesPaths: any = await glob({
    pattern: 'packages/**/package.json',
    options: {
      ignore: '**/node_modules/**',
    },
  })

  await Promise.all(
    packagesPaths.map(async (packagesPath) => {
      const pkgPath = path.join(process.cwd(), packagesPath)

      let packageDirPath: any = pkgPath.split('/')
      packageDirPath.pop()
      packageDirPath = packageDirPath.join('/')

      const { default: pkgData } = await import(pkgPath, {
        assert: {
          type: 'json',
        },
      })

      // update dependencies
      if (pkgData.dependencies) {
        const hasDepToUpdate = pkgData.dependencies[depToUpdate.packageName]

        if (hasDepToUpdate) {
          await shell(
            `cd ${packageDirPath} && npm version minor && npm i ${depToUpdate.packageName}:"${depToUpdate.packageVersion}"`,
          )
          log.success(`Updated ${chalk.cyan(pkgData.name)} > ${packagesPath}`)
        }
      }
    }),
  )
}
