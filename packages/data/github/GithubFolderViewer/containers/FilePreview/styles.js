import styled from 'styled-components'

export default styled.section`
  height: calc(100vh - 40px);
  overflow: auto;
  background-color: #0a1930;
  padding-top: 10px;

  code {
    font-size: 12px;
    @media screen and (min-width: 768px) {
      font-size: 15px;
    }
  }

  div {
    border-radius: 0;
    background-color: transparent !important;
    border: none !important;

    pre {
      background-color: transparent !important;
      padding: 0 20px !important;
      border: none !important;
    }
  }
`
