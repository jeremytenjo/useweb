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
}

export default function startFirebaseEmulators({
  enable,
  auth,
  authOptions = {
    authEmulatorPort: 9005,
    testUserEmail: 'user@example.com',
    testUserPassword: 'secretPassword',
  },
  db,
  dbOptions = {
    dbEmulatorPort: 9003,
  },
  functions,
}: Props) {
  const enabled = enable && (!!auth || !!db || !!functions)
  if (!enabled) return

  const authEmulatorPort = dbOptions?.dbEmulatorPort
  const dbEmulatorPort = dbOptions?.dbEmulatorPort

  auth && startAuthEmulator({ auth, authEmulatorPort, ...authOptions })
  db && startFirestoreEmulator({ db, dbEmulatorPort })
  styleEmulatorWarning()
}
