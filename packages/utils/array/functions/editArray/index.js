export default function editArray() {
  const add = (data = [], item, insertMethod = 'push') => {
    validate(item)
    const newData = data.slice()
    newData[insertMethod.insert](item)

    return newData
  }

  const update = (data = [], item, id, idKey = 'id') => {
    validate(item)
    validate(id, { validate: 'id' })
    const newData = data.slice()
    const itemInDataIndex = data.findIndex((item) => item[idKey] === id)
    newData[itemInDataIndex] = item

    return newData
  }

  const remove = (data = [], id, idKey = 'id') => {
    validate(id, { validate: 'id' })
    let newData = data.slice()
    newData = newData.filter((item) => item[idKey] === id)

    return newData
  }

  const reset = () => {
    return []
  }

  const validate = (item, options = { validate: 'item' }) => {
    if (!item) throw new Error(`${options.validate} prop required`)
  }

  return {
    add,
    update,
    remove,
    reset,
  }
}
