import React from 'react'

import ClickToComponent from '../../packages/navigation/ClickToComponent/src/ClickToComponent'

import UsewebTheme from './theme/usewebTheme'

const isProd = process.env.NODE_ENV === 'production'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: isProd ? -1 : 1 },
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
