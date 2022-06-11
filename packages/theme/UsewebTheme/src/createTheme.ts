import {
  createTheme as createMuiTheme,
  ThemeOptions as MuiThemeOptions,
} from '@mui/material/styles'

export default function createTheme(themeData: MuiThemeOptions) {
  const createdTheme = createMuiTheme(themeData)
  return createdTheme
}
