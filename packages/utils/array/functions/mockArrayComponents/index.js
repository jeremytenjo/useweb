// returns multple components. helps not to have to add multiple children eg poster/stories.in grid variant
const mockArrayComponents = (Component, amount = 3) => {
  const length = Array.from(Array(amount).keys())
  const arrayOfCompnents = length.map((item, index) => (
    <Fragment key={index}>{Component}</Fragment>
  ))
  return arrayOfCompnents
}

export default mockArrayComponents
