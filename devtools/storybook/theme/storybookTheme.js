// https://storybook.js.org/docs/react/configure/theming
import { create } from '@storybook/theming'

import colors from './storybookColors'

export default function storybookTheme() {
  const { primary } = colors

  return create({
    base: 'light',
    brandUrl: 'https://github.com/jeremytenjo/useweb',
    colorSecondary: primary,
    brandImage: '/images/banner-sb.svg',
  })
}
