import { connectAuthEmulator, signInWithEmailAndPassword } from 'firebase/auth'

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

  signInWithEmailAndPassword(auth, testUserEmail, testUserPassword)
}
