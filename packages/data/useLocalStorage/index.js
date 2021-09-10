/**
 * @example
 * const [item, setItem] = useLocalStorage(itemId)
 */
export default function useLocalStorage(itemId) {
  const getItem = () => {
    let item = localStorage.getItem(itemId)
    item = item !== 'undefined' ? JSON.parse(item) : null

    return item
  }

  const setItem = (data) => {
    localStorage.setItem(itemId, JSON.stringify(data))
  }

  const item = getItem()

  return [item, setItem]
}
