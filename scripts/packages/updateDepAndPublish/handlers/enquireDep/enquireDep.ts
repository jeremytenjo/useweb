// https://github.com/enquirer/enquirer
import enquirer from 'enquirer'

export type EnquireDepReturn = {
  packageName: string
  packageVersion: string
}

export default async function enquireDep(): Promise<EnquireDepReturn> {
  const { packageName, packageVersion }: EnquireDepReturn = await enquirer.prompt([
    {
      type: 'input',
      name: 'packageName',
      message: 'Package Name',
    },
    {
      type: 'input',
      name: 'packageVersion',
      message: 'Package Version',
    },
  ])

  return { packageName, packageVersion }
}
