import React from 'react'

import { B, V } from '../../../../sb/ui'

const Variants = ({ Component: EmbedYoutube }) => {
  return (
    <>
      <B title='videoId'>
        <EmbedYoutube videoId='0CQlarQ0VhU' />
      </B>

      <B title='url'>
        <EmbedYoutube url='https://www.youtube.com/watch?v=cEFuQHrMBe8&ab_channel=GeniusProduction' />
      </B>

      <B title='url - youtu.be'>
        <EmbedYoutube url='https://youtu.be/crZK0N_Boqs' />
      </B>

      <B title='url - m.youtube'>
        <EmbedYoutube url='https://m.youtube.com/watch?v=4STwwbRRURI' />
      </B>
    </>
  )
}

export default ({ onlyBase }) =>
  V({
    dir: 'socialMedia/youtube/EmbedYoutube',
    // styles: require.context('../styles', true, /index.js$/),
    Variants,
    onlyBase,
  })
