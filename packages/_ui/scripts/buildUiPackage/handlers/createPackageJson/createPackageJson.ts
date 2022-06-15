import path from 'path'

import createFile from '../../../../../node/createFile/createFile.js'
import { type PayloadProps } from '../../buildUiPackage'
import rootPackageJson from '../../../../package.json' assert { type: 'json' }

export type CreatePackageJsonProps = { payload: PayloadProps }

export default async function createPackageJson({ payload }: CreatePackageJsonProps) {
  const filePath = path.join(payload.buildFolder, 'package.json')

  const buildPackageJsonOverride = {
    name: '@useweb/ui',
  } as any

  const buildPackageJson = { ...rootPackageJson, ...buildPackageJsonOverride }

  delete buildPackageJson.private
  delete buildPackageJson.scripts
  delete buildPackageJson.devDependencies

  const pacakgeJsonContent = JSON.stringify(buildPackageJson, null, 2)

  await createFile(filePath, pacakgeJsonContent, {
    nojs: true,
  })
}
