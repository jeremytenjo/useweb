export default () =>
  new Promise(async (resolve) => {
    const credentailApiSupported = window.PasswordCredential || window.FederatedCredential
    let user

    if (credentailApiSupported) {
      try {
        user = await navigator.credentials.get({
          password: true,
        })

        resolve({ user })
      } catch (e) {
        resolve({ error: e })
      }
    } else {
      resolve({ error: 'credential manager not supported' })
    }
  })
