import { useEffect } from 'react'

import Box from '../Box/src'
import Link from '../../navigation/Link/src'
import GoogleIcon from '../Icon/library/IconGoogleLogo'

export default function ErrorMessage({ error }) {
  useEffect(() => {
    error && console.error(error)
  }, [error])

  return (
    <Box
      name='Error Message'
      styles={{
        border: '7px solid #DA0000',
        borderRadius: '10px',
        backgroundColor: '--#EADDDD',
        padding: 'l',
        width: '100%',
        maxWidth: '500px',
        position: 'relative',
      }}
    >
      <Box as='h3' styles={{ marginBottom: 's', color: '--#B70000' }}>
        Error
      </Box>

      {error && (
        <>
          <Box as='p' styles={{ color: '--#DB0000', fontSize: '16px' }}>
            {error.toString()}
          </Box>

          <Link
            href={`https://www.google.com/search?q=${error.toString()}`}
            styles={{ position: 'absolute', right: '--0', top: '--0' }}
          >
            <GoogleIcon />
          </Link>
        </>
      )}
    </Box>
  )
}
