import { node, bool } from 'prop-types'

import Chevron from '../Icon/library/IconChevron1'

export const defaultProps = {
  title: 'title',
  icon: <Chevron plain color='primary' />,
  defaultOpen: false,
}

export const propTypes = {
  title: node.isRequired,
  icon: node,
  defaultOpen: bool,
}
