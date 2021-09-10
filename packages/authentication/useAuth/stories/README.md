# useAuth

Look at as example router.stories.js

Add to provider

```js
import { AuthProvider } from '../../UseAuth/useAuth.index'

const providers = [<AuthProvider key={1} service='firebase' />]
```

Then use in any file

```js
import useAuth from '../../UseAuth/useAuth.index'


const Example = () => {
  const { signIn, signOut, signingIn, user } = useAuth()

  return (
    <>
      <button
        onClick={() =>
          signIn({
            credentials: { email: 'tenjojeremy@gmail.com', password: 'testpass' },
          })
        }
      >Sign In </Button>
  </>
```
