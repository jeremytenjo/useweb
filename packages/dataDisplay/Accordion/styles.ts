import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  cursor: pointer;
  display: grid;
  grid-gap: var(--spacing-xs);
`

export const TopBar = styled.div`
  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: var(--spacing-m);
`

export const IconWrapper = styled.div`
  transition: 0.2s;
  ${({ open }) => (open ? `transform: rotate(180deg);` : `transform: rotate(0);`)}
`

export const Content = styled.div`
  transition: 0.2s;
  overflow: hidden;
`
