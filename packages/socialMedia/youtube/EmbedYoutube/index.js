import React, { useEffect, useState } from 'react'

// https://developers.google.com/youtube/player_parameters
// https://www.npmjs.com/package/react-youtube
import YouTube from 'react-youtube'

import getVideoIdFromUrl from './utils/getVideoIdFromUrl'

/**
 * @param  {} videoId
 * @param  {} url
 */
export default function EmbedYoutube(props) {
  const [videoId, setVideoId] = useState(props.videoId)

  useEffect(() => {
    if (props.url && !props.videoId) {
      const vidId = getVideoIdFromUrl(props.url)
      vidId && setVideoId(vidId)
    }
  }, [props.videoId, props.url])

  return <YouTube {...props} videoId={videoId} />
}
