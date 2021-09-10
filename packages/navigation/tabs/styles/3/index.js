import styled from 'styled-components'

import Base from '../../base/tabs.base'

const Tab = styled.div`
  cursor: pointer;
  user-select: none;
  border-radius: 100px;
  padding: 8px;
  width: 150px;
  text-align: center;

  ${({ active }) =>
    active &&
    `
    background-color: var(--color-white);
    `}
  span {
    transition: var(--transition-main);
    font-style: normal;
    font-weight: bold;
    font-size: 11px;
    white-space: nowrap;
    color: var(--color-white);

    ${({ font }) => `
    font-family: var(--font-${font});
    `}

    ${({ active }) =>
      active &&
      `
    color: var(--color-black);
    `}
  }
`

const WrapperStyles = {
  backgroundColor: 'rgba(255,255,255,0.6)',
  borderRadius: '100px',
  width: 'fit-content',
  margin: '0 auto',
  gridGap: 0,
}

export default (props) => <Base Tab={Tab} {...props} style={WrapperStyles} />
