import styled from 'styled-components'

export const Wrapper = styled.div`
  width: ${({ width }) => `${width}px`};
  grid-gap: var(--spacing-xxs);
  display: grid;
`

export const StylistName = styled.span`
  font-family: Quicksand;
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
`
