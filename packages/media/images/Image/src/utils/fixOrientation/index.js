import ImageCompressor from 'image-compressor.js'

const imagesFixRotation = (file) => {
  return new Promise((resolve, reject) => {
    new ImageCompressor(file, {
      checkOrientation: true,
      success(result) {
        resolve(result)
      },
      error(e) {
        reject(`Fix orientaition Failed ${e.message}`)
      },
    })
  })
}

export default imagesFixRotation
