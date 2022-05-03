const validate = (item, options = { validate: 'item' }) => {
  if (!item) throw new Error(`${options.validate} prop required`)
}

export type AddTypes = {
  data: any
  insertMethod?: 'push' | 'unshift'
  ifExists?: 'add' | 'replace' | 'remove'
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
  add: (
    array: object[] = [],
    { data, insertMethod = 'push', ifExists = 'replace' }: AddTypes,
  ) => {
    validate(data)
    let newData = array.slice() as any
    const exists = newData.some((cItem) => cItem.id === data.id)

    if (!exists) {
      newData[insertMethod](data)
    } else {
      if (ifExists === 'replace') {
        newData = newData.map((item) => (item.id === data.id ? data : item))
      }

      if (ifExists === 'remove') {
        newData = newData.filter((item) => item.id !== data.id)
      }

      if (ifExists === 'add') {
        newData[insertMethod](data)
      }
    }

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
