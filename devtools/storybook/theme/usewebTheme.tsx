import React from 'react'

import { ThemeProvider, createTheme } from '../../../packages/theme/UsewebTheme/src'

import colors from './tokens/colors'
import { variants as typography } from './tokens/typography/typography'

const ButtonDefaults = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '10px',
        fontWeight: 'bold',
        width: '100%',
        textTransform: 'none' as const,
        fontFamily: 'PoppinsRegular',
        color: 'black.main',
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: 'white',
        },
      },
    },
  },
}

const theme = createTheme({
  palette: colors,
  typography,
  components: {
    ...ButtonDefaults,
  },
})

export default function UsewebTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
