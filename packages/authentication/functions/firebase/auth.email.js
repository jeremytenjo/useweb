import firebase from 'firebase/app'
import 'firebase/auth'

const actions = {
  login: async (email, password) =>
    await firebase.auth().signInWithEmailAndPassword(email, password),
  register: async (email, password) =>
    await firebase.auth().createUserWithEmailAndPassword(email, password),
}

export default async function authEmail({
  action = 'login',
  credentials: { email = '', password = '' },
}) {
  return new Promise(async (resolve, reject) => {
    if (email !== '' && password !== '') {
      try {
        const user = await actions[action](email, password)
        const credentialManagerData = {
          id: user.user.email,
          email: user.user.email,
          password,
        }

        resolve({ user, credentialManagerData })
      } catch (err) {
        resolve({ error: err.message })
      }
    } else {
      reject('Please include an email and pasword')
    }
  })
}
