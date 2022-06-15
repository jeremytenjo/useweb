import React from 'react'
import styled from 'styled-components'

import { V, B } from '../../../storybook/ui'
import useToast, { ToastProvider } from '..'

const Wrapper = styled.div`
  div {
    position: relative;
  }
`

const Variants = ({ Component: Toast }) => {
  return (
    <Wrapper>
      <B title={`type = success`} noBackground>
        <Toast />
      </B>

      <B title={`type = error`} noBackground>
        <Toast type='error' />
      </B>
    </Wrapper>
  )
}

export default ({ onlyBase }) =>
  V({
    dir: 'feedback/useToast',
    styles: require.context('../styles', true, /index.js$/),
    Variants,
    onlyBase,
    noBase: true,
  })

const Children = () => {
  const { showToast } = useToast()

  return (
    <B title='center'>
      <button
        onClick={() =>
          showToast({
            location: 'center',
            type: 'success',
            message: 'Added to watchlist',
          })
        }
      >
        Show
      </button>
    </B>
  )
}

export const Example = () => (
  <ToastProvider>
    <Children />
  </ToastProvider>
)
