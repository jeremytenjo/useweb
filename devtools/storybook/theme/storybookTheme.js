// https://storybook.js.org/docs/react/configure/theming
import { create } from '@storybook/theming'

import colors from './tokens/colors'

export default function storybookTheme() {
  return create({
    base: 'light',
    brandUrl: 'https://github.com/jeremytenjo/useweb',
    colorSecondary: colors.primary.main,
    brandImage: '/images/banner-sb.svg',
  })
}
