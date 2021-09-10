import styled from 'styled-components'

export default {
  Wrapper: styled.div`
    position: relative;
    cursor: pointer;
  `,
  SelectWrapper: styled.div``,
  Select: styled.select`
    cursor: pointer;
    ${({ hasChildren }) =>
      hasChildren &&
      `
  position: absolute;
  opacity: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 1;
`}
  `,
  ElTopWrapper: styled.div`
    margin: 0 auto;
    width: fit-content;
    width: -moz-fit-content;
    margin-bottom: var(--spacing-xs);
  `,
  TitleWrapper: styled.div``,
  LabelWrapper: styled.div``,
  Option: styled.option``,
  Chevron: styled.div`
    display: none;
  `,
}
