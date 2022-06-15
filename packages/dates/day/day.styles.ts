import styled from 'styled-components'

const DAY_SIZE = '30px'

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
`
export const DayCon = styled.div`
  width: ${DAY_SIZE};
  height: ${DAY_SIZE};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 14px;
  font-weight: 500;
  justify-self: center;
  cursor: pointer;
  user-select: none;
  font-family: var(--font-primary);
  transition: 0.2s;

  &:active {
    background-color: ${({ activeColor }) =>
      activeColor ? `var(--color-${activeColor}Background)` : 'rgba(0, 0, 0, 0.1)'};
  }

  ${({ activeColor, ...props }) =>
    isCurrentDay(
      props,
      `
  background: transparent;
  border: 2px solid ${activeColor};
  color: black;`,
    )}

  ${(props) =>
    isGrey(
      props,
      `
  background: transparent;
  color: grey;`,
    )}

  ${({ activeColor, ...props }) =>
    isActive(
      props,
      `
  background-color: ${activeColor};
  color: white;`,
    )}
`

export const StatusCon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`

// Variants
const isCurrentDay = ({ isCurrentDay }, styles) => isCurrentDay && styles
const isGrey = ({ grey }, styles) => grey && styles
const isActive = ({ isActive }, styles) => isActive && styles
