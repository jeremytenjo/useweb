import ImageCompressor from 'image-compressor.js'

export default function imagesFixRotation(file) {
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
