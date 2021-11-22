import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'

import './storybookTheme.css'
import { materialTheme } from '../../../src/theme/materialui/MaterialUiThemeProvider'
import AppTheme from '../../../src/theme/theme'

export default function StorybookTheme({ children }) {
  return (
    // temporary fix for theme in storybook https://github.com/mui-org/material-ui/issues/24282#issuecomment-859393395
    <EmotionThemeProvider theme={materialTheme}>
      <AppTheme>{children}</AppTheme>
    </EmotionThemeProvider>
  )
}
