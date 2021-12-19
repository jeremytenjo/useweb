import styleEmulatorWarning from './handlers/styleEmulatorWarning'
import startAuthEmulator from './handlers/startAuthEmulator'
import startFirestoreEmulator from './handlers/startFirestoreEmulator'

import type { AuthOptions } from '../../'

type Props = {
  enable: boolean
  auth?: any
  authOptions?: AuthOptions
  db?: any
  functions?: any
  authEmulatorPort?: number
  dbEmulatorPort?: number
}

export default function startFirebaseEmulators({
  enable,
  auth,
  authOptions,
  db,
  functions,
  authEmulatorPort = 9005,
  dbEmulatorPort = 9003,
}: Props) {
  const enabled = enable && (!!auth || !!db || !!functions)
  if (!enabled) return

  auth && startAuthEmulator({ auth, authEmulatorPort, ...authOptions })
  db && startFirestoreEmulator({ db, dbEmulatorPort })
  styleEmulatorWarning()
}
