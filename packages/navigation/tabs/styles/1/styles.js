import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: white;
  .MuiTabs-indicator {
    background: ${({ color }) => `var(--color-${color})`};
  }
`
