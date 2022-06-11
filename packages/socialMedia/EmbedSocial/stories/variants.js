import React from 'react'

import { B, V } from '../../../storybook/ui'

const Variants = ({ Component: EmbedSocial }) => {
  return (
    <>
      <B title='twitter'>
        <EmbedSocial url='https://twitter.com/cenkuygur/status/1314221575986577408' />
      </B>

      <B title='youtube'>
        <EmbedSocial url='https://www.youtube.com/watch?v=0CQlarQ0VhU&ab_channel=NowThisNews' />
      </B>

      <B title='youtu.be'>
        <EmbedSocial url='https://youtu.be/crZK0N_Boqs' />
      </B>

      <B title='m.youtube'>
        <EmbedSocial url='https://m.youtube.com/watch?v=4STwwbRRURI' />
      </B>
    </>
  )
}

export default ({ onlyBase }) =>
  V({
    dir: 'socialMedia/EmbedSocial',
    // styles: require.context('../styles', true, /index.js$/),
    Variants,
    onlyBase,
  })
