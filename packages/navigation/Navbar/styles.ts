import styled from 'styled-components'

import Position from '../../utils/position/position.index'
import system from '../../theme/styleSystem/src'

export const Wrapper = styled.div`
  ${system}
  ${({ position }) => position && Position({ position })}
`

export const ItemWrapper = styled.div`
  padding: 0 10px;
  cursor: pointer;
  ${({ hasLabel }) =>
    hasLabel &&
    `
  display: grid;
  justify-items: center;
  grid-gap: 5px;
  `}
`
