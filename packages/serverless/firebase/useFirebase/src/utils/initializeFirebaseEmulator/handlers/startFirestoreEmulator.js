import { connectFirestoreEmulator } from 'firebase/firestore'

export default function startFirestoreEmulator({ db, dbEmulatorPort }) {
  connectFirestoreEmulator(db, 'localhost', dbEmulatorPort)
}
