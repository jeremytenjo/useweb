import { create } from '@storybook/theming'

import colors from './colors'
// Add theme to <head>
import headCss from './head'
document.write(headCss)

export default function storybookTheme() {
  const { primary, storybook } = colors

  return create({
    base: 'light',
    brandUrl: 'https://github.com/jeremytenjo/useweb',
    colorSecondary: primary,
    brandImage: 'https://useweb-lib.web.app/banner-sb.svg',
    ...storybook,
  })
}
