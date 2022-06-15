import { number, func, bool, string } from 'prop-types'

export const defaultProps = {
  rating: 0,
  edit: true,
  count: 5,
  isSelectable: null,
  starDimension: '25px',
  starSpacing: '2px',
  onChange: () => null,
}

export const propTypes = {
  rating: number,
  edit: bool,
  count: number,
  starDimension: string,
  starSpacing: string,
  isSelectable: bool,
  onChange: func,
}
