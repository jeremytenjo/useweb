import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
export const InnerWrapper = styled.div`
  display: inline-grid;
  grid-gap: 30px;
  text-align: center;
  justify-items: center;
  max-width: 400px;
  height: fit-content;
`

export const Title = styled.span`
  font-family: var(--font-secondary);
  font-weight: bolder;
  font-size: 16px;
`
