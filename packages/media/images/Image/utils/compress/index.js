import ImageCompressor from 'image-compressor.js'

const CompressImage = (file, quality = 0.5) => {
  return new Promise((resolve, reject) => {
    new ImageCompressor(file, {
      quality,
      success(result) {
        resolve(result)
      },
      error(e) {
        reject(`Compression Failed: ${e.message}`)
      },
    })
  })
}

export default CompressImage
