import React, { createContext, useContext } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import {
  ThemeProvider as MuiThemeProvider,
  ThemeOptions as MuiThemeOptions,
} from '@mui/material/styles'

import createThemeFunction, {
  type ComponentProps,
  type CreateThemeProps as CreateThemePropsD,
  type ComponentsProps as ComponentsPropsD,
} from './createTheme'

export type ComponentDefaultsProps = ComponentProps
export type CreateThemeProps = CreateThemePropsD
export type ComponentsProps = ComponentsPropsD

export type UiThemeProviderProps = {
  children: any
  theme: MuiThemeOptions
}

type UiThemeProviderReturn = {
  theme: MuiThemeOptions
}

export const ThemeContext = createContext<UiThemeProviderReturn>({
  theme: {},
})

/**
 * [API](https://mui.com/customization/theme-components/#global-style-overrides)
 *
 * @example
 * import { ThemeProvider, createTheme } from '@useweb/theme'
 * 
 * const theme = createTheme({
    palette: colors,
    typography,
    components: {
      ...ButtonDefaults,
    },
  })

  export default function UsewebTheme({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }
 */
export const ThemeProvider = ({ children, theme: usewebTheme }: UiThemeProviderProps) => {
  return (
    <ThemeContext.Provider
      value={{
        theme: usewebTheme,
      }}
    >
      <MuiThemeProvider theme={usewebTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

const useTheme = () => useContext<UiThemeProviderReturn>(ThemeContext)

export default useTheme

// user creates theme and passes it to ThemeProvider
export const createTheme = createThemeFunction
