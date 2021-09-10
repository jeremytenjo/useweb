import { string, func, array, oneOfType, number, element } from 'prop-types'

import BS from './styles'

export const defaultProps = {
  BS,
  CS: {},
  data: [
    { value: 'option 1 value', label: 'option 1' },
    { value: 'option 2 value', label: 'option 2' },
  ],
  valueKey: 'value',
  labelKey: 'label',
  initialValue: null,
  icon: null,
  backgroundColor: 'primary',
  title: null,
  label: null,
  size: '40px',
  onSelect: () => null,
}

export const propTypes = {
  data: array,
  valueKey: string,
  labelKey: string,
  initialValue: oneOfType([string, number]),
  size: oneOfType([string, number]),
  backgroundColor: string,
  icon: element,
  title: element,
  label: element,
  onSelect: func,
}
