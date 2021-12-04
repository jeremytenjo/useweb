import styleEmulatorWarning from './handlers/styleEmulatorWarning'
import startAuthEmulator from './handlers/startAuthEmulator'
import startFirestoreEmulator from './handlers/startFirestoreEmulator'

type Props = {
  auth?: any
  db?: any
  authEmulatorPort?: number
  dbEmulatorPort?: number
}

export default function startFirebaseEmulator({
  auth,
  db,
  authEmulatorPort = 9005,
  dbEmulatorPort = 9003,
}: Props) {
  const enabled = !!auth || !!db
  if (process.env.NODE_ENV !== 'development' && enabled) return

  auth && startAuthEmulator({ auth, authEmulatorPort })
  db && startFirestoreEmulator({ db, dbEmulatorPort })
  styleEmulatorWarning()
}
