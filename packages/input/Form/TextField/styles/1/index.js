import styled from 'styled-components'

import TextField from '../../'

const Wrapper = styled.div`
  transition: 0.2s;
  background-color: ${({ backgroundColor }) => `var(--color-${backgroundColor})`};
  color: ${({ textColor }) => `var(--color-${textColor})`};
  border-radius: 10px;
  padding: var(--spacing-xxs) var(--spacing-xs);
  display: flex;
  align-items: center;
  text-align: center;
  width: ${({ width }) => width};
  border: 2px solid var(--color-lightgrey);

  img {
    color: ${({ color }) => `var(--color-${color})`};
    cursor: pointer;
  }

  /* Round */
  ${({ round }) => round && ` border-radius: 100px;`}

  /* Focused */
  ${({ isFocused, foregroundColor }) =>
    isFocused && `border: 2px solid var(--color-${foregroundColor});`}

    svg {
    fill: ${({ foregroundColor }) => `var(--color-${foregroundColor})`};
  }

  /* isValid */
  ${({ isValid }) => !isValid && `border: 2px solid var(--color-red);`}

  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`

const Input = styled.input`
  ::placeholder {
    opacity: 0.5;
    color: ${({ color }) => `var(--color-${color}Darker)`};
  }

  color: ${({ color }) => `var(--color-${color}Darker)`};
  font-family: ${({ font }) => `var(--font-${font})`};
  font-size: 14px;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
`

const IconLeftCon = styled.div`
  margin-right: 5px;
`
const IconRightCon = styled.div`
  margin-left: 10px;
`

const InputCon = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: var(--spacing-xs);
  position: relative;
  grid-template-columns: 1fr fit-content(100%);
  width: 100%;
`

const CloseIconCon = styled.div`
  display: flex;
  align-items: center;
  svg {
    fill: ${({ textColor }) => `var(--color-${textColor})`};
  }
`

const TextField1 = (props) => (
  <TextField
    Wrapper={Wrapper}
    Input={Input}
    IconLeftCon={IconLeftCon}
    IconRightCon={IconRightCon}
    InputCon={InputCon}
    CloseIconCon={CloseIconCon}
    {...props}
  />
)

export default TextField1
