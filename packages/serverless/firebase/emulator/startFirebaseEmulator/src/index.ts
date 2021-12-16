import styleEmulatorWarning from './handlers/styleEmulatorWarning'
import startAuthEmulator from './handlers/startAuthEmulator'
import startFirestoreEmulator from './handlers/startFirestoreEmulator'
import startFunctionsEmulator from './handlers/startFunctionsEmulator'

type Props = {
  enable: boolean
  auth?: any
  db?: any
  functions?: any
  authEmulatorPort?: number
  dbEmulatorPort?: number
  functionsEmulatorPort?: number
}

export default function startFirebaseEmulator({
  enable,
  auth,
  db,
  functions,
  authEmulatorPort = 9005,
  dbEmulatorPort = 9003,
  functionsEmulatorPort = 5002,
}: Props) {
  const enabled = enable && (!!auth || !!db || !!functions)
  if (!enabled) return

  auth && startAuthEmulator({ auth, authEmulatorPort })
  db && startFirestoreEmulator({ db, dbEmulatorPort })
  functions && startFunctionsEmulator({ functions, functionsEmulatorPort })
  styleEmulatorWarning()
}
