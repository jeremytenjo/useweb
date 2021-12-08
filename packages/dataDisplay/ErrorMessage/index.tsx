import { useEffect } from 'react'
import Box from '../Box/src'

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
        padding: 's',
        width: '100%',
        maxWidth: '500px',
      }}
    >
      <Box as='h3' styles={{ marginBottom: 's', color: '--#B70000' }}>
        Error
      </Box>
      {error && (
        <Box as='p' styles={{ color: '--#DB0000', fontSize: '16px' }}>
          {JSON.stringify(error)}
        </Box>
      )}
    </Box>
  )
}
