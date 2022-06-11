// import { storiesOf } from '@storybook/react'
import React from 'react'

import BrowserRouter from '../../BrowserRouter'
import useAuth from '../../../../authentication/useAuth'
import Routes from '../../Routes'
import useNavigate from '../../useNavigate'
import AuthRoute from '..'

import Store from './store'

export default {}
const PublicPage = () => <div data-cy='page-public'>Public Page</div>
const PrivatePage1 = () => <div data-cy='page-private1'>Private Page 1</div>
const PrivatePage2 = () => <div data-cy='page-private2'>Private Page 2</div>
const LoginPage = () => <div data-cy='page-login'>Login Page</div>

const Example = () => {
  const navigate = useNavigate()
  const { signIn, signOut, signingIn, user, error } = useAuth()

  return (
    <>
      <button data-cy='button-public' onClick={() => navigate('/')}>
        Public Page
      </button>
      <button data-cy='button-private1' onClick={() => navigate('/privatePage1')}>
        Private Page 1
      </button>
      <button data-cy='button-private2' onClick={() => navigate('/privatePage2')}>
        Private Page 2
      </button>
      <button data-cy='button-login' onClick={() => navigate('/account/login')}>
        Login Page
      </button>
      <br />
      <br />

      <Routes>
        <AuthRoute element={PublicPage} exact path='/' />

        <AuthRoute element={PrivatePage1} path='/privatePage1' isPrivate />

        <AuthRoute element={PrivatePage2} path='/privatePage2' isPrivate />

        <AuthRoute element={LoginPage} path='/account/login' />
      </Routes>

      <br />
      <button
        data-cy='button-signin'
        onClick={() =>
          signIn({
            credentials: {
              email: 'tenjojeremy@gmail.com',
              password: 'testpass',
            },
          })
        }
      >
        Sign in
      </button>

      <button data-cy='button-signout' onClick={() => signOut()}>
        Sign Out
      </button>
      <br />
      <br />
      <br />
      {signingIn && 'signing In...'}
      <span data-cy='signinStatus' style={{ color: user ? 'green' : 'orange' }}>
        ({user ? 'Signed In' : 'Signed Out'})
      </span>

      <br />
      <br />
      <br />
      {error && <span style={{ color: '#b71c1c' }}>{error}</span>}
    </>
  )
}

const Story = () => (
  <BrowserRouter>
    <Store>
      <Example />
    </Store>
  </BrowserRouter>
)

// storiesOf('Lib/Navigation/Routing/Route', module).add('AuthRoute', () => <Story />)
