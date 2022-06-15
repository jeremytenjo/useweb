import createFile from '../../../../../node/createFile'
import { type PayloadProps } from '../../buildUiPackage'

export type CreatePackageJsonProps = { payload: PayloadProps }

export default async function createPackageJson({ payload }: CreatePackageJsonProps) {
  const data = 'hi'

  return data
}
