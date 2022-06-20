import path from 'path'

import createFile from '../../../../../../node/createFile/createFile.js'
import { type PayloadProps } from '../../buildSubPackages'

export type CreatePackageJsonProps = { payload: PayloadProps }

export default async function createPackageJson({ payload }: CreatePackageJsonProps) {
  const rootPackageJsonPath = path.join(process.cwd(), 'package.json')
  const rootPackageJson = (
    await import(rootPackageJsonPath, { assert: { type: 'json' } })
  ).default
  const newPackageJsonPath = path.join(payload.buildFolder, 'package.json')

  const buildPackageJson = {
    name: payload.rootPackageName,
    description: rootPackageJson.description,
    version: rootPackageJson.version,
    main: rootPackageJson.main || './index.js',
    types: rootPackageJson.types || './types/index.d.ts',
    author: rootPackageJson.author,
    peerDependencies: rootPackageJson.peerDependencies,
  } as any

  const pacakgeJsonContent = JSON.stringify(buildPackageJson, null, 2)

  await createFile(newPackageJsonPath, pacakgeJsonContent, {
    nojs: true,
  })
}
