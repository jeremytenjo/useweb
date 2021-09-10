import IconShare1 from '../../library/IconShare1'
import share, { shareIsSupported } from '../../../../engagement/share'

export default function ShareButton({
  data,
  onShare = () => null,
  onError = () => null,
  ...rest
}) {
  const handleShare = async () => {
    const { error, success } = await share(data)

    if (success) onShare(true)
    if (error) onError(error)
  }

  return shareIsSupported ? <IconShare1 onClick={handleShare} {...rest} /> : null
}
