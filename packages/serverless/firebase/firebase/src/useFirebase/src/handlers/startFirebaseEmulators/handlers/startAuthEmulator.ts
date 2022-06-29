import { connectAuthEmulator, signInWithEmailAndPassword } from 'firebase/auth'

declare global {
  interface Window {
    firebase_auth_emulator_connected: boolean
  }
}

export default function startAuthEmulator({
  auth,
  authEmulatorPort = 9005,
  testUserEmail = 'user@example.com',
  testUserPassword = 'secretPassword',
}) {
  if (!auth) {
    throw new Error('Missing `auth` key in `FirebaseProvider`')
  }

  if (!window.firebase_auth_emulator_connected) {
    connectAuthEmulator(auth, `http://localhost:${authEmulatorPort}`)
    window.firebase_auth_emulator_connected = true
  }

  signInWithEmailAndPassword(auth, testUserEmail, testUserPassword)
}
