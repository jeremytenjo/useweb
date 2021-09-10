import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--color-white);
  padding: var(--spacing-s);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: var(--spacing-s);
  align-items: center;
  width: 100%;
  box-shadow: 0px -1px 4px rgba(33, 33, 33, 0.25);
`
export const Info = styled.div`
  display: grid;
  grid-gap: var(--spacing-xs);
  user-select: none;
  grid-auto-rows: fit-content(100%);
  align-self: center;
`
export const Name = styled.h4`
  font-size: 16px;
`
export const City = styled.h6`
  color: var(--color-darkGrey);
`

export const AvatarInfoCOn = styled.div`
  display: grid;
  grid-gap: var(--spacing-xs);
  grid-template-columns: fit-content(100%) 140px;
`
export const ButtonCon = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: var(--spacing-m);
  justify-self: stretch;
`
