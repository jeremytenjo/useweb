const Window = () => {
  if (typeof window !== 'undefined') return window

  return {
    addEventListener: () => null,
    removeEventListener: () => null,
  }
}

export default Window
