export default async ({ state = [], data, location = 'push' }) => {
  const newState = state.slice()
  newState[location](data)
  return newState
}
