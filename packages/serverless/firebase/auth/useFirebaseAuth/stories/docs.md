# useFirebaseAuth

#### Usage

Create `useAuth.js`

```js
import useFirebaseAuth from '@useweb/use-firebase-auth'
import useFirebase from '@useweb/use-firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export default function useAuth() {
  const firebase = useFirebase()

  const signInFetcher = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(firebase.auth, provider)

    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result)

    const token = credential.accessToken
    // The signed-in user info.
    const user = result.user

    return user
  }

  const auth = useFirebaseAuth({
    fetcher: signInFetcher,
  })

  return auth
}
```

Import and use `useAuth`.

```js
import useAuth from 'path_to_useAuth'

...

const auth = useAuth()

// auth.result will return the user returned from the signInFetcher
console.log(auth.result)

...

<button onClick={auth.signIn.exec}>Sign in</button>
```
