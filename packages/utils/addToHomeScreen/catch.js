const catchAddToHomeScreenPrompt = () => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    window.addToHomeScreen = e
  })
}

export default catchAddToHomeScreenPrompt
