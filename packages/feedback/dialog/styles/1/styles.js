import styled from 'styled-components'

export const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 20px;
  background-color: var(--color-secondaryDarker);
  border-radius: 20px;
  color: var(--color-white);
  padding: var(--spacing-s);
  box-shadow: var(--boxShadow-3);
  display: grid;
  grid-gap: var(--spacing-m);
`

export const ConfirmationCon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--spacing-m);
`
