import createFile from '../../../../../node/createFile'

export type CreatePackageJsonProps = { name: string }

export default async function createPackageJson({ name }: CreatePackageJsonProps) {
  const data = 'hi'

  return data
}
