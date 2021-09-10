import { array, func, object } from 'prop-types'

import IconOptions from '../../dataDisplay/Icon/library/IconOptionsMaterial'

export const defaultProps = {
  options: [],
  iconWrapperStyles: null,
  Icon: IconOptions,
  itemProps: {},
  onSelect: () => null,
}

export const propTypes = {
  type: array,
  itemProps: object,
  onClick: func,
}
