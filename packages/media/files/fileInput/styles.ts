import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  overflow: hidden;
`

export const Input = styled.input`
  cursor: pointer;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  width: fit-content;
  height: 100%;
  z-index: 1;
`
export const ChildrenWrap = styled.div`
  z-index: 0;
`
