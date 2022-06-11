import React from 'react'

import useUploads from './Data/uploads.state'

export default () => {
  const { uploads } = useUploads()

  return uploads.map(({ id, name, country }) => (
    <p key={id}>
      {name} - {country}
    </p>
  ))
}
