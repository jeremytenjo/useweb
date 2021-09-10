import styled from 'styled-components'

import Base from '../../base/tabs.base'

const Tab = styled.div`
  cursor: pointer;
  user-select: none;
  span {
    transition: var(--transition-main);
    font-style: normal;
    font-weight: bolder;
    font-size: 22px;
    line-height: 27px;
    white-space: nowrap;
    ${({ font }) => `
    font-family: var(--font-${font});
    `}

    ${({ color, isActive }) =>
      isActive
        ? `
    color: var(--color-${color});
    `
        : `
    color: var(--color-${color}Opaque);
    `}
  }
`

export default (props) => <Base Tab={Tab} {...props} />
