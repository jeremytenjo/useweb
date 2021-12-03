import {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'

export default function startAuthEmulator({ auth, authEmulatorPort }) {
  const testUser = {
    username: 'test@gmail.com',
    password: 'testpassword',
  }

  connectAuthEmulator(auth, `http://localhost:${authEmulatorPort}`)

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      createUserWithEmailAndPassword(auth, testUser.username, testUser.password)
        .then(() => {
          signInWithEmailAndPassword(auth, testUser.username, testUser.password)
        })
        .catch(() => {
          signInWithEmailAndPassword(auth, testUser.username, testUser.password)
        })
    }
  })
}
