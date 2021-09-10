import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  word-break: break-word;
  overflow-y: auto;

  div {
    border-radius: 9px;
  }

  /* No src */
  ${({ src, backgroundColor, isLoading }) =>
    (!src || isLoading) &&
    `
    display: flex !important;
    align-items: center;
    justify-content: center;
    background-color: var(--color-${backgroundColor});
    border-radius: 9px;
    padding: var(--spacing-s);
  `}

  /* noAnimation */
  ${({ noAnimation }) =>
    !noAnimation &&
    `    
    transition: 0.2s;
    transition-timing-function: ease-in-out;

    &:active {
      transform: scale(0.6);
    }    
  `}
`
export const InfoContainer = styled.section`
  background: linear-gradient(180deg, rgba(143, 143, 143, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0 0 9px 9px;
  padding: var(--spacing-m);
  color: var(--color-white);
  text-align: center;
  letter-spacing: 1.2px;
  font-family: var(--font-primary);
  font-weight: bold;
`

export const TypographyWrapper = styled.div`
  overflow: auto;
  height: 100%;
  display: flex;
  align-items: center;
`

export const Label = styled.span`
  font-size: 12px;
`
