import styleEmulatorWarning from './handlers/styleEmulatorWarning'
import startAuthEmulator from './handlers/startAuthEmulator'
import startFirestoreEmulator from './handlers/startFirestoreEmulator'

export default function initializeFirebaseEmulator({
  auth,
  db,
  authEmulatorPort = 9005,
  dbEmulatorPort = 9003,
}) {
  if (process.env.NODE_ENV !== 'development') return

  auth && startAuthEmulator({ auth, authEmulatorPort })
  db && startFirestoreEmulator({ db, dbEmulatorPort })
  styleEmulatorWarning()
}
