export default async ({ type, ...params }) => {
  let func = null

  switch (type) {
    case 'filter':
      func = 'func'
      break
    case 'some':
      func = 'func'
      break
    case 'indexOf':
      func = 'func'
      break

    default:
      break
  }
  const arrayFunc = await import(`./functions/${func}`)
  return arrayFunc.default(params)
}
