import styled from 'styled-components'

export default styled.div`
  display: grid;
  grid-gap: 6px;
  grid-auto-flow: column;
  width: fit-content;
  align-items: center;
  background: var(--color-white);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
  padding: var(--spacing-xs);
  cursor: pointer;
  transition: 0.2s;

  :active {
    transform: translateY(1px);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0);
  }

  .text {
    color: var(--color-black);
    font-family: Roboto;
    user-select: none;
  }
`
