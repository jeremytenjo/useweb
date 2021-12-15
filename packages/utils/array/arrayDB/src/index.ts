const validate = (item, options = { validate: 'item' }) => {
  if (!item) throw new Error(`${options.validate} prop required`)
}

export default {
  add: (
    array: object[] = [],
    {
      data,
      insertMethod = 'push',
    }: {
      data: any[]
      insertMethod?: 'push' | 'unshift'
    },
  ) => {
    validate(data)

    const newData = array.slice()
    newData[insertMethod](data)

    return newData
  },

  update: (
    array: object[] = [],
    {
      data,
      id,
      idKey = 'id',
    }: {
      data: object
      id: string | number
      idKey?: string
    },
  ) => {
    validate(data)
    validate(id, { validate: 'id' })
    const newData = array.slice()
    const itemInDataIndex = array.findIndex((data) => data[idKey] === id)
    newData[itemInDataIndex] = { id, ...data }

    return newData
  },

  remove: (
    array: object[] = [],
    {
      id,
      idKey = 'id',
    }: {
      id: string | number
      idKey?: string
    },
  ) => {
    validate(id, { validate: 'id' })
    let newData = array.slice()
    newData = newData.filter((item) => item[idKey] !== id)

    return newData
  },

  reset: () => {
    return []
  },
}
