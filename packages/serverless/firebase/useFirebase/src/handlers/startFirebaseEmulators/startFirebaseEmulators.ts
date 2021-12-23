import styleEmulatorWarning from './handlers/styleEmulatorWarning'
import startAuthEmulator from './handlers/startAuthEmulator'
import startFirestoreEmulator from './handlers/startFirestoreEmulator'

import type { AuthOptions, DBOptions } from '../../'

type Props = {
  enable: boolean
  auth?: any
  authOptions?: AuthOptions
  db?: any
  dbOptions: DBOptions
  functions?: any
  authEmulatorPort?: number
  dbEmulatorPort?: number
}

export default function startFirebaseEmulators({
  enable,
  auth,
  authOptions,
  db,
  dbOptions,
  functions,
}: Props) {
  const enabled = enable && (!!auth || !!db || !!functions)
  if (!enabled) return

  const authEmulatorPort = authOptions.authEmulatorPort || 9005
  const dbEmulatorPort = dbOptions.dbEmulatorPort || 9003

  auth && startAuthEmulator({ auth, authEmulatorPort, ...authOptions })
  db && startFirestoreEmulator({ db, dbEmulatorPort })
  styleEmulatorWarning()
}
