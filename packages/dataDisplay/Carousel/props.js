import { object, string, bool, func, number } from 'prop-types'

export const defaultProps = {
  index: 0,
  setIndex: null,
  wrapperStyles: {},
  iconColor: 'white',
  infinite: null,
}

export const propTypes = {
  index: number,
  setIndex: func.isRequired,
  wrapperStyles: object,
  iconColor: string,
  infinite: bool,
}
