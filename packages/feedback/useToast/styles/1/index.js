import styled from 'styled-components'

import IconCheckmark1 from '../../../../dataDisplay/Icon/library/IconCheckmark1/index'
import IconClose1 from '../../../../dataDisplay/Icon/library/IconClose1/index'

export const Wrapper = styled.div`
  background: ${({ background }) => `var(--color-${background})`};
  color: ${({ foreground }) => `var(--color-${foreground})`};
  z-index: 999;
  border-radius: 100px;
  width: fit-content;
  min-width: 150px;
  max-width: 300px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: start;
  padding: var(--spacing-s) var(--spacing-m);
  grid-gap: var(--spacing-s);
  user-select: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  word-break: break-word;

  /* location */
  ${({ location }) =>
    location === 'center'
      ? `
  margin: 0 auto;  
  `
      : ``}

  * {
    cursor: auto;
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    font-family: ${({ font }) => `var(--font-${font})`};
    text-align: left;
    font-weight: 100;
    font-size: 14px;
    line-height: 20px;
  }
`

export default function Toast1({
  type = 'success',
  background = 'black',
  foreground = 'white',
  message = 'message a mejfalsd ',
  display = 'none',
  font = 'primary',
  location = 'center',
}) {
  const Icon = type === 'success' ? IconCheckmark1 : IconClose1
  const iconColor = type === 'success' ? 'success' : 'error'

  return (
    <Wrapper
      background={background}
      foreground={foreground}
      display={display}
      font={font}
      location={location}
      data-name='toast_wrapper'
    >
      <Icon color={iconColor} plain />
      <span> {message}</span>
    </Wrapper>
  )
}
