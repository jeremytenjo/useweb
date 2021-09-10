import styled from 'styled-components'

import system from '../../theme/system'

export const BoxWrapper = styled.div`
  ${system}
  box-sizing: border-box;
  ${({ size }) =>
    size &&
    `
  width: ${size};
  height: ${size};
  `}

  ${({ fullscreen }) =>
    fullscreen &&
    `
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  `}
  
  ${({ sticky }) =>
    sticky &&
    `
    top: 0; 
    position: sticky; 
  `}
`
