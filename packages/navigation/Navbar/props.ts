import { func, object, shape } from 'prop-types'

export const defaultProps = {
  styles: {
    color: 'primary',
    backgroundColor: 'whiteOpaque',
    boxShadow: 2,
  },
  label: { variant: 'body2', styles: { color: 'primary' } },
  onClick: () => null,
  onSearchSubmit: () => null,
}

export const propTypes = {
  onClick: func,
  onSearchSubmit: func,
  router: shape({ history: object.isRequired, location: object.isRequired }),
}
