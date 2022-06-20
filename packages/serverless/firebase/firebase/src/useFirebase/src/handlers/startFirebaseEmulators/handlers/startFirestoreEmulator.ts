import { connectFirestoreEmulator } from 'firebase/firestore'

declare global {
  interface Window {
    firebase_firestore_emulator_connected: boolean
  }
}

export default function startFirestoreEmulator({ db, dbEmulatorPort }) {
  if (!db) {
    throw new Error('Missing `db` key in `FirebaseProvider`')
  }

  if (!window.firebase_firestore_emulator_connected) {
    connectFirestoreEmulator(db, 'localhost', dbEmulatorPort)
    window.firebase_firestore_emulator_connected = true
  }
}
