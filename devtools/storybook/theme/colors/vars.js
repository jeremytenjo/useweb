import colors from './index'

const {
  primary,
  primaryDarker,
  primaryLighter,
  primaryOpaque,
  secondary,
  secondaryDarker,
  secondaryLighter,
  disabledForeground,
  disabledBackground,
  lightgrey,
  darkgrey,
  grey,
  yellow,
  red,
  white,
  whiteOpaque,
  black,
  blackBackground,
  blackOpaque,
  success,
  successForeground,
  error,
  errorForeground,
} = colors

export default `
:root {
  --color-primary: ${primary};
  --color-primaryDarker: ${primaryDarker};
  --color-primaryLighter: ${primaryLighter};
  --color-primaryOpaque: ${primaryOpaque};

  --color-secondary: ${secondary};
  --color-secondaryDarker: ${secondaryDarker};
  --color-secondaryLighter: ${secondaryLighter};

  --color-disabledDarker: ${disabledForeground};
  --color-disabledBackground: ${disabledBackground};

  --color-darkgrey: ${darkgrey};
  --color-lightgrey: ${lightgrey};  
  --color-grey: ${grey};

  --color-yellow: ${yellow};

  --color-red: ${red};

  --color-white: ${white};
  --color-whiteOpaque: ${whiteOpaque};

  --color-black: ${black};
  --color-blackBackground: ${blackBackground};
  --color-blackOpaque: ${blackOpaque};

  --color-success: ${success};
  --color-successForeground: ${successForeground};

  --color-error: ${error};
  --color-errorforeground: ${errorForeground};
}
`
