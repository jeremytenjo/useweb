import { connectFunctionsEmulator } from 'firebase/functions'

export default function startFunctionsEmulator({ functions, functionsEmulatorPort }) {
  connectFunctionsEmulator(functions, 'localhost', functionsEmulatorPort)
}
