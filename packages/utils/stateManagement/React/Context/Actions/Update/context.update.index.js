export default async ({ state = [], id, toUpdate }) => {
  const newState = state.slice()
  const itemIndex = newState.findIndex((item) => item.id === id)

  for (const [key, value] of Object.entries(toUpdate)) {
    newState[itemIndex][key] = value
  }

  return newState
}
