import styled from 'styled-components'

export default styled.div`
  .MuiTreeItem-root .MuiTreeItem-content {
    display: grid;
    grid-auto-flow: column;
    width: 100%;
    justify-content: start;
    .MuiTreeItem-label {
      font-size: 14px;
      padding-left: 0;
    }
  }
`
