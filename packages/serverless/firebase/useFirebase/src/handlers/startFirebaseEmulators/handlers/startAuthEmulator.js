import { connectAuthEmulator } from 'firebase/auth'

export default function startAuthEmulator({ auth, authEmulatorPort }) {
  connectAuthEmulator(auth, `http://localhost:${authEmulatorPort}`)
}
