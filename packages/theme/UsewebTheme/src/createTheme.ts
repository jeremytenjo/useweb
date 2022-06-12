import { Object as TSObject } from 'ts-toolbelt'
import {
  createTheme as createMuiTheme,
  ThemeOptions as MuiThemeOptions,
} from '@mui/material/styles'
import { type BoxProps } from '@mui/material/Box'

export type ComponentProps = {
  defaultProps?: any
  styleOverrides?: {
    root?: BoxProps['sx']
  }
  variants?: any[]
}

export type CreateThemeProps = TSObject.P.Update<
  MuiThemeOptions,
  ['components'],
  ComponentsProps
>
/**
 * [API](https://mui.com/material-ui/customization/theme-components/#global-style-overrides)
 */
export default function createTheme(themeData: CreateThemeProps) {
  const components = getComponents({ themeComponents: themeData.components })
  themeData.components = components as any
  const createdTheme = createMuiTheme(themeData as any)
  return createdTheme
}

const getComponents = ({ themeComponents = {} as ComponentsProps }) => {
  // List of component that use @mui/material/* internally
  const componentsWithMuiPrefix = {}
  for (const [key, value] of Object.entries(themeComponents)) {
    const isMuiComponent = muiComponents.includes(key)
    const name = isMuiComponent ? `Mui${key}` : key
    componentsWithMuiPrefix[name] = value
  }
  return componentsWithMuiPrefix
}

// Component list
export type ComponentsProps = {
  CssBaseline?: ComponentProps
  Button?: ComponentProps
  Dialog?: ComponentProps
  Box?: ComponentProps
  IconButton?: ComponentProps
  Alert?: ComponentProps
  LinearProgress?: ComponentProps
  Modal?: ComponentProps
}

// List of component that use @mui/material/* internally
const muiComponents = [
  'CssBaseline',
  'Button',
  'Dialog',
  'Box',
  'IconButton',
  'Alert',
  'LinearProgress',
  'Modal',
]
