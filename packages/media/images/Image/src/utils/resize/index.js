import ImageCompressor from 'image-compressor.js'

export default function resizeImage(file, width = 300) {
  return new Promise((resolve, reject) => {
    new ImageCompressor(file, {
      width,
      success(result) {
        resolve(result)
      },
      error(e) {
        reject(`Resize Failed ${e.message}`)
      },
    })
  })
}
