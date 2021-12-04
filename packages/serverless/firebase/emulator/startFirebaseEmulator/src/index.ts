import styleEmulatorWarning from './handlers/styleEmulatorWarning'
import startAuthEmulator from './handlers/startAuthEmulator'
import startFirestoreEmulator from './handlers/startFirestoreEmulator'

type Props = {
  enable: boolean
  auth?: any
  db?: any
  authEmulatorPort?: number
  dbEmulatorPort?: number
}

export default function startFirebaseEmulator({
  enable,
  auth,
  db,
  authEmulatorPort = 9005,
  dbEmulatorPort = 9003,
}: Props) {
  const enabled = enable && (!!auth || !!db)
  if (!enabled) return

  auth && startAuthEmulator({ auth, authEmulatorPort })
  db && startFirestoreEmulator({ db, dbEmulatorPort })
  styleEmulatorWarning()
}
