// https://github.com/Vibrant-Colors/node-vibrant
import Vibrant from 'node-vibrant'

export default (imageExample, ops) => {
  const v = new Vibrant(imageExample, ops)
  return v.getPalette()
}
