import EmbedTweet from '../../twitter/EmbedTweet'
import EmbedYoutube from '../../youtube/EmbedYoutube'

export default function Ui({ props, socialApp }) {
  return socialApp.name === 'twitter' ? (
    <EmbedTweet {...props} />
  ) : socialApp.name === 'youtube' ? (
    <EmbedYoutube {...props} />
  ) : null
}
