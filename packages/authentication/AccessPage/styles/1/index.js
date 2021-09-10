import Text from '../../../../dataDisplay/Text'
import Drawer from '../../../../feedback/drawer'
import Box from '../../../../dataDisplay/Box'
import { defaultProps, propTypes } from '../../props'
import Animation from '../../../../utils/Animation'
import providerLogos from '../../utils/providerLogos'

const AccessPage1 = ({
  user,
  onSuccess,
  onError,
  providers,
  onClose,
  service,
  typographyVariant,
}) => {
  const userIsSignedin = user === null ? null : !user
  const [error, seterror] = useState(null)
  const [loading, setLoading] = useState(null)

  const handleLogin = async (provider) => {
    try {
      setLoading(true)
      seterror(false)
      const { default: func } = await import(`../../../functions/${service}/auth.social`)
      const { error, accessToken, user } = await func({ provider })
      if (user) onSuccess({ accessToken, user })
      else seterror(error.errorMessage)
    } catch (error) {
      onError(error)
      seterror(error.errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Drawer open={userIsSignedin} position='bottom' onClose={onClose}>
      <Box styles={{ padding: 'm', justifyContent: 'center', gridGap: 's' }}>
        <Text
          text='Sign In'
          variant={typographyVariant}
          styles={{ textAlign: 'center', fontWeight: 'bold' }}
        />
        <Box
          styles={{
            padding: 'none',
            gridAutoFlow: 'column',
            justifyContent: 'center',
            gridGap: 'm',
          }}
        >
          {providers.map((prov) => {
            const Icon = providerLogos(prov)
            return (
              <Fragment key={prov}>
                <Icon
                  onClick={() => handleLogin(prov)}
                  size='20px'
                  style={{
                    boxShadow: ' 0px 1px 4px rgba(0, 0, 0, 0.25)',
                    padding: '17px',
                  }}
                />
              </Fragment>
            )
          })}
        </Box>
        {error && (
          <Text
            text={error}
            variant='body2'
            styles={{ color: 'red', textAlign: 'center' }}
          />
        )}
        <Animation show={loading}>
          <Text
            text='Loading...'
            variant='body2'
            styles={{ color: 'green', textAlign: 'center' }}
          />
        </Animation>
      </Box>
    </Drawer>
  )
}

AccessPage1.defaultProps = defaultProps
AccessPage1.propTypes = propTypes

export default memo(AccessPage1)
