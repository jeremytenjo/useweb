import { number, array, string, func } from 'prop-types'

export const defaultProps = {
  data: [],
  arrowColor: 'black',
  arrowName: 'arrow/1',
  yearRange: 5,
  defaultValue: null,
  onSelect: () => null,
}

export const propTypes = {
  data: array,
  arrowColor: string,
  yearRange: number,
  onSelect: func,
}
