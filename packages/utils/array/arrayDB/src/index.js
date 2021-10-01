const validate = (item, options = { validate: 'item' }) => {
  if (!item) throw new Error(`${options.validate} prop required`)
}

export default {
  add: (array = [], { data, insertMethod = 'push' }) => {
    validate(data)

    const newData = array.slice()
    newData[insertMethod](data)

    return newData
  },

  update: (array = [], { data, id, idKey = 'id' }) => {
    validate(data)
    validate(id, { validate: 'id' })
    const newData = array.slice()
    const itemInDataIndex = array.findIndex((data) => data[idKey] === id)
    newData[itemInDataIndex] = { id, ...data }

    return newData
  },

  remove: (array = [], { id, idKey = 'id' }) => {
    validate(id, { validate: 'id' })
    let newData = array.slice()
    newData = newData.filter((item) => item[idKey] !== id)

    return newData
  },

  reset: () => {
    return []
  },
}
