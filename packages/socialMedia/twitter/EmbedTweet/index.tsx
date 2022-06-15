import React, { useEffect, useState } from 'react'
// https://github.com/capaj/react-tweet-embed
import TweetEmbed from 'react-tweet-embed'

import getTweetIdFromUrl from './utils/getTweetIdFromUrl'
import Styles from './styles'

export default function EmbedTweet(props) {
  const [tweetId, setTweetId] = useState(props.id)

  useEffect(() => {
    if (props.url && !props.tweetId) {
      const id = getTweetIdFromUrl(props.url)
      id && setTweetId(id)
    }
  }, [props.tweetId, props.url])

  return tweetId ? (
    <Styles>
      <TweetEmbed {...props} id={tweetId} />
    </Styles>
  ) : null
}
