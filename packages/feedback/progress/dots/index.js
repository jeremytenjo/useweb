import styled from 'styled-components'

const Dots = ({ style, color = 'white' }) => (
  <Wrapper style={style} color={color}>
    <div className='spinner-dots1'>
      <div />
      <div />
      <div />
      <div />
    </div>
  </Wrapper>
)

// Style
const Wrapper = styled.div`
  .spinner-dots1 {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 11px;
  }
  .spinner-dots1 div {
    position: absolute;
    top: 0;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${({ color }) => `var(--color-${color})`};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .spinner-dots1 div:nth-child(1) {
    left: 6px;
    animation: spinner-dots11 0.6s infinite;
  }
  .spinner-dots1 div:nth-child(2) {
    left: 6px;
    animation: spinner-dots12 0.6s infinite;
  }
  .spinner-dots1 div:nth-child(3) {
    left: 26px;
    animation: spinner-dots12 0.6s infinite;
  }
  .spinner-dots1 div:nth-child(4) {
    left: 45px;
    animation: spinner-dots13 0.6s infinite;
  }
  @keyframes spinner-dots11 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes spinner-dots13 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes spinner-dots12 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
`

export default memo(Dots)
