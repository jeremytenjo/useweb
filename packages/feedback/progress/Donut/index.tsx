import styled, { keyframes } from 'styled-components'

const Donut = ({ style = {}, color = 'primary' }) => (
  <Wrapper style={style} color={color} />
)

// Style
const donutSpin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`
const Wrapper = styled.div`
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${({ color }) => `var(--color-${color})`};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${donutSpin} 0.7s linear infinite;
`
/**
 * @example
 * <Donut />
 */
export default Donut
