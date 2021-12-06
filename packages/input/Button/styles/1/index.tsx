import styled from 'styled-components'

import Button from '../../src'

export const BaseWrapper = styled.div`
  position: relative;
  width: fit-content;
  button {
    border-radius: 0;
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    &:focus {
      outline: none;
    }
    &:active {
      border: 0;
      padding: 0;
    }
    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  }
`

export const BaseButton = styled.div`
  background-color: ${({ color }) => `var(--color-${color}Lighter)`};
  border-radius: 100px;
  cursor: pointer;
  padding: 0 var(--spacing-s);
  display: grid;
  align-items: center;
  justify-content: center;
  grid-auto-flow: column;
  text-align: center;
  transition: 0.2s ease-in-out;
  height: 35px;
  border: 2px solid ${({ color }) => `var(--color-${color}Lighter)`};
  user-select: none;
  box-sizing: content-box;

  &:active,
  &:focus {
    border: 2px solid ${({ color }) => `var(--color-${color}Darker)`};
  }

  /* Active */
  ${({ active, color }) => active && `border: 2px solid var(--color-${color}Darker);`}

  /* Disabled */
  ${({ disabled }) =>
    disabled &&
    `
  background-color: var(--color-disabledLighter);
  border: 2px solid var(--color-disabledLighter);
  &:active {
    border: 2px solid var(--color-disabledLighter);
  }`}

  /* Outlined */
  ${({ outlined }) =>
    outlined &&
    `background-color: transparent;
     border: 2px solid var(--color-white);
     &:active {
       border: 2px solid var(--color-white);
    }`}

  /* with Icon */
  ${({ icon, color }) =>
    icon &&
    `
  svg {
    margin-left: 10px;
    fill: var(--color-${color}Darker);
    }
  `}

  /* size */
  ${({ size }) =>
    size &&
    size === 'small' &&
    `
    height: 25px;
    span {
      font-size: 11px;
    }
  `}
`

export const BaseLoadingCon = styled.div`
  ${({ color }) => `
    position: absolute;
    top:0;
    right:0;
    bottom: 0;
    left: 0;
    background-color: var(--color-${color}Opaque);
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export default function Button1(props) {
  return (
    <Button
      Wrapper={BaseWrapper}
      ButtonInner={BaseButton}
      LoadingCon={BaseLoadingCon}
      {...props}
    />
  )
}
