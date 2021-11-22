import { MemoryRouter } from 'react-router-dom'
import { create } from '@storybook/theming/create'

import { FirebaseProvider } from '../../src/firebase/useFirebase'
import GlobalProviders from '../../src/globalState/GlobalProviders'

import StorybookTheme from './theme'

const theme = create({
  base: 'light',
  brandUrl: 'https://github.com/jeremytenjo/my-interval-timer',
})

export const decorators = [
  (Story) => {
    return (
      <FirebaseProvider>
        <StorybookTheme>
          <GlobalProviders>
            <MemoryRouter initialEntries={['/']}>
              <Story />
            </MemoryRouter>
          </GlobalProviders>
        </StorybookTheme>
      </FirebaseProvider>
    )
  },
]

export const parameters = {
  docs: { 
    theme,
  },
}
