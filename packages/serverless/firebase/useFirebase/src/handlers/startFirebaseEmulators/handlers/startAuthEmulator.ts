import {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'

export default function startAuthEmulator({
  auth,
  authEmulatorPort,
  testUserEmail,
  testUserPassword,
}) {
  connectAuthEmulator(auth, `http://localhost:${authEmulatorPort}`)

  if (!testUserEmail || !testUserPassword) {
    console.log(
      'Missing testUserEmail and testUserPassword in Firebase provider authOptions',
    )
    return
  }

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      createUserWithEmailAndPassword(auth, testUserEmail, testUserPassword)
        .then(() => {
          signInWithEmailAndPassword(auth, testUserEmail, testUserPassword)
        })
        .catch(() => {
          signInWithEmailAndPassword(auth, testUserEmail, testUserPassword)
        })
    }
  })
}
