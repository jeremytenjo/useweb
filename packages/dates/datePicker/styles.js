import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 5px;

  select {
    font-size: 19px;
    background: transparent;
    text-align-last: center;
    width: 100px;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -ms-appearance: none;

    &:focus {
      outline: none;
    }
  }
`
