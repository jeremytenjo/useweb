import React, { createContext, useContext } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import {
  ThemeProvider as MuiThemeProvider,
  ThemeOptions as MuiThemeOptions,
} from '@mui/material/styles'

import createThemeFunction from './createTheme'

type ThemeProviderProps = {
  children: any
  theme: MuiThemeOptions
}

type ThemeProviderReturn = {
  theme: MuiThemeOptions
}

export const ThemeContext = createContext<ThemeProviderReturn>({
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
export const ThemeProvider = ({ children, theme: usewebTheme }: ThemeProviderProps) => {
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

const useTheme = () => useContext<ThemeProviderReturn>(ThemeContext)

export default useTheme

// user creates theme and passes it to ThemeProvider
export const createTheme = createThemeFunction
