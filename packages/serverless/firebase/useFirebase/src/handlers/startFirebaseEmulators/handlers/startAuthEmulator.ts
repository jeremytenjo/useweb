import { connectAuthEmulator, signInWithEmailAndPassword } from 'firebase/auth'

export default function startAuthEmulator({
  auth,
  authEmulatorPort = 9005,
  testUserEmail = 'user@example.com',
  testUserPassword = 'secretPassword',
}) {
  if (!auth) {
    throw new Error('Missing `auth` key in `FirebaseProvider`')
  }

  connectAuthEmulator(auth, `http://localhost:${authEmulatorPort}`)
  signInWithEmailAndPassword(auth, testUserEmail, testUserPassword)
}
