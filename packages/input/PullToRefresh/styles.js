import styled from 'styled-components'

export const Icon = styled.svg`
  ${({ color }) => `
fill: var(--color-${color});
`}
`
export const Wrapper = {
  position: 'absolute',
  left: 0,
  right: 0,
  margin: '0 auto',
}
