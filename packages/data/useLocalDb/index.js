export default function useLocalDb(initialData = []) {
  const [data, setData] = useState(initialData)

  const add = (newItem, options = { ifExists: 'replace' }) => {
    let cData = data.slice()
    const exists = cData.some((cItem) => cItem.id === newItem.id)

    if (!exists) {
      cData.push(newItem)
    } else {
      if (options.ifExists === 'replace') {
        cData = cData.map((item) => (item.id === newItem.id ? newItem : item))
      }
      if (options.ifExists === 'remove') {
        cData = cData.filter((item) => item.id !== newItem.id)
      }
    }

    setData(cData)
  }

  const remove = (condition) => {
    const cData = data.slice()
    const [key] = Object.keys(condition)
    const [value] = Object.values(condition)
    const dataRemoved = cData.filter((item) => item[key] !== value)
    setData(dataRemoved)
  }

  const update = (id, callback) => {
    console.log(id, callback)
  }

  const reset = () => setData([])

  return { data, add, remove, update, reset }
}
