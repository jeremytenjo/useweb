import globLib from 'glob'
/**
 * [Docs](https://github.com/isaacs/node-glob)
 */
export default function glob(pattern: string, options?: any) {
  // eslint-disable-next-line no-undef
  return new Promise<string[]>(async (resolve, reject) => {
    globLib(pattern, options || null, (err, files) => {
      if (err) reject(err)
      resolve(files)
    })
  })
}
