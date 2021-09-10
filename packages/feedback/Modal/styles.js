import styled from 'styled-components'

export const ModalWrapper = styled.div`
  display: none;
  opacity: 0;
  width: fit-content;
  height: fit-content;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  z-index: 2;
  overscroll-behavior-y: contain;
`
