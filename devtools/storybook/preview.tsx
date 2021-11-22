import { create } from '@storybook/theming/create'

import StorybookTheme from './theme'

const theme = create({
  base: 'light',
  brandUrl: 'https://github.com/jeremytenjo/useweb',
})

export const decorators = [
  (Story) => {
    return (
      <StorybookTheme>
        <Story />
      </StorybookTheme>
    )
  },
]

export const parameters = {
  docs: {
    theme,
  },
}
