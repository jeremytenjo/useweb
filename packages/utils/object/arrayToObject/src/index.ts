export default function arrayToObject(array: any[]) {
  const object = {}

  array.map((item) => {
    const key = Object.keys(item)[0]
    const value = Object.values(item)[0]
    object[key] = value
  })

  return object
}
