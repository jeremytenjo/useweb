export default function fileReader(
  { file, method = 'readAsDataURL', fullCompress },
  getProgress,
) {
  return new Promise(async (resolve, reject) => {
    const fileToConvert = fullCompress ? await handleFullCompress(file) : file

    const fileReader = new FileReader()

    fileReader[method](fileToConvert)

    fileReader.onload = async (e) => {
      const base64 = e.target.result
      resolve(base64)
    }

    fileReader.addEventListener('progress', (event) => {
      if (event.loaded && event.total) {
        const percent = (event.loaded / event.total) * 100
        const progress = Math.round(percent)
        getProgress(progress)
      }
    })

    fileReader.onerror = (error) => {
      fileReader.abort()
      reject(error)
    }
  })
}

const handleFullCompress = (file) =>
  new Promise(async (resolve) => {
    const resize = await import('../../images/Image/utils/resize/index')
    const fileResized = await resize.default(file, 100)
    const compress = await import('../../images/Image/utils/compress/index')
    const fileCompressed = await compress.default(fileResized, 0.1)
    const blobToFile = new File([fileCompressed], fileCompressed.name, {
      type: fileCompressed.type,
      lastModified: Date.now(),
    })

    resolve(blobToFile)
  })
