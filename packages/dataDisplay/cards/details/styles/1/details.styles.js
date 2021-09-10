import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--color-white);
  display: grid;
  grid-template-columns: auto 1fr;
  padding: var(--spacing-s);
  max-width: 600px;
  grid-gap: var(--spacing-s);
`

export const Rating = styled.div``

export const InfoCon = styled.div`
  display: grid;
`

export const Location = styled.div`
  font-family: var(--font-secondary);
  font-size: 14px;
  line-height: 24px;
  color: rgba(31, 32, 65, 0.5);
  align-self: flex-end;
`

export const LocationIcons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
`

export const ContactIcons = styled.div`
  display: grid;
  grid-gap: var(--spacing-s);
  grid-template-columns: auto auto;
  transform: translateY(-9px);
`

export const NumReview = styled.div`
  font-family: var(--font-secondary);
  font-size: 14px;
  line-height: 24px;
  color: rgba(31, 32, 65, 0.5);

  span {
    font-weight: bold;
  }
`
