export default async ({ state = [], id }) => {
  let newState = state.slice()
  newState = newState.filter((item) => item.id !== id)
  return newState
}
