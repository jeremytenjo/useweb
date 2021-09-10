import useAuth from '../../../authentication/useAuth'
import Route from '../Route'
import useNavigate from '../useNavigate'
import Navigate from '../Navigate'

const AuthRoute = ({ component, redirectUrl = '/account/login', children, ...rest }) => {
  const navigate = useNavigate()
  const { user } = useAuth()
  const components = component ? component() : children
  const redirectProps = { to: { pathname: redirectUrl } }

  useEffect(() => {
    if (!user) navigate(redirectUrl)
  }, [user])

  return (
    <Route
      {...rest}
      render={() => (user ? components : <Navigate {...redirectProps} />)}
    />
  )
}

export default memo(AuthRoute)
