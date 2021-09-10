import styled from 'styled-components'

import system from '..'

const Wrapper = styled.div`
  ${system}
`

export default () => (
  <>
    <Wrapper
      styles={{
        color: ['primary', 'secondary'],
        margin: 'xl',
        ':hover': {
          backgroundColor: ['white', 'red'],
        },
      }}
    >
      Theme system
    </Wrapper>

    <Wrapper
      styles={{
        color: ['primary', 'secondary', ['primaryLighter', 'error']],
        fontSize: ['20px', '33px'],
        margin: 'xl',
        transition: '.2s',
      }}
    >
      Theme system
    </Wrapper>

    <Wrapper
      styles={{
        backgroundColor: ['primary', 'secondary', ['primaryLighter', 'error']],
        fontSize: ['20px', '33px'],
        margin: 'xl',
        transition: '.2s',
        height: ['100px', '500px'],
        borderRadius: '5px',
      }}
    >
      Theme system
    </Wrapper>

    <Wrapper
      styles={{
        backgroundColor: 'primary',
        raw: `color: darkblue;
        span {
          color: pink;
        }
        `,
      }}
    >
      raw
      <span>hello</span>
    </Wrapper>

    <br />
    <br />

    <Wrapper
      styles={{
        backgroundColor: '--lime',
        gridGap: ['m', '--200px'],
        fontWeight: 900,
      }}
    >
      <div>no theme style</div>
      <div>no theme style</div>
    </Wrapper>
  </>
)
