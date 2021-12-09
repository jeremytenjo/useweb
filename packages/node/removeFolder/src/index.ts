import fs from 'fs'

export default function removeFolder(path: string): Promise<void> {
  return new Promise((resolve) => {
    fs.rm(path, { recursive: true }, () => resolve())
  })
}
