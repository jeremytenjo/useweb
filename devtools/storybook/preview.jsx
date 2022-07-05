import React from 'react'

import ClickToComponent from '../../packages/navigation/ClickToComponent/src/ClickToComponent'

import UsewebTheme from './theme/usewebTheme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Introduction', '*'],
    },
  },
}

export const decorators = [
  (Story) => {
    return (
      <>
        <ClickToComponent />

        <UsewebTheme>
          <Story />
        </UsewebTheme>
      </>
    )
  },
]
