import React from 'react'

import useSnackbar, { SnackbarProvider } from '../src'

export default {
  title: 'Feedback/Snackbar',
  args: {},
}

const Provider = ({ children }) => {
  return <SnackbarProvider>{children}</SnackbarProvider>
}

const Child = () => {
  const snackbar = useSnackbar()

  const trigger = () => {
    snackbar.show({
      message: `This is a snackbar`,
    })
  }

  return (
    <div>
      <button onClick={trigger}>Show</button>
    </div>
  )
}

export const Example = {
  render: () => {
    return (
      <Provider>
        <Child />
      </Provider>
    )
  },
}
// const variantArgs: SnackbarProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
