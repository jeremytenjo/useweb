import styled from 'styled-components'

import system from '../../../theme/system'

export const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;

  ${(p) => p.letterColor && `background-color: var(--color-${p.letterColor})`};

  img[data-base64='true'] {
    filter: blur(10px);
  }

  ${system}
`

export const InnerImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1);
`
