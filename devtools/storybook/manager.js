// https://storybook.js.org/docs/react/configure/features-and-behavior
import { addons } from '@storybook/addons'

import theme from './theme/storybookTheme'

const isProd = process.env.NODE_ENV === 'production'

addons.setConfig({
  theme: theme(),
  previewTabs: {
    'storybook/docs/panel': { index: isProd ? -1 : 0 },
  },
})
