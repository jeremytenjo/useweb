export default ({ id, email, password, photoURL: iconURL, name }) =>
  new Promise(async (resolve) => {
    const isSupported =
      window.PublicKeyCredential ||
      window.PasswordCredential ||
      window.FederatedCredential

    if (isSupported) {
      try {
        const cred = new window.PasswordCredential({
          id,
          email,
          password,
          name,
          iconURL,
        })

        await navigator.credentials.store(cred)
        resolve(true)
      } catch (e) {
        resolve({ error: `Failed to store credential: ${e}` })
      }
    } else {
      resolve(false)
    }
  })
