const validate = (item, options = { validate: 'item' }) => {
  if (!item) throw new Error(`${options.validate} prop required`)
}

export type AddTypes = {
  data: object
  insertMethod?: 'push' | 'unshift'
}

export type UpdateTypes = {
  data: object
  id: string | number
  idKey?: string
}

export type RemoveTypes = {
  id: string | number
  idKey?: string
}

export default {
  add: (array: object[] = [], { data, insertMethod = 'push' }: AddTypes) => {
    validate(data)
    const newData = array.slice()
    newData[insertMethod](data)

    return newData
  },

  update: (array: object[] = [], { data, id, idKey = 'id' }: UpdateTypes) => {
    validate(data)
    validate(id, { validate: 'id' })
    const newData = array.slice()
    const itemInDataIndex = array.findIndex((data) => data[idKey] === id)
    newData[itemInDataIndex] = { id, ...data }

    return newData
  },

  remove: (array: object[] = [], { id, idKey = 'id' }: RemoveTypes) => {
    validate(id, { validate: 'id' })
    let newData = array.slice()
    newData = newData.filter((item) => item[idKey] !== id)

    return newData
  },

  reset: () => {
    return []
  },
}
