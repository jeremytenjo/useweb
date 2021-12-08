import IconShare1 from '../../Icon/library/IconShare1'
import share, { shareIsSupported } from '../../../engagement/share'

type Props = {
  data?: any
  children?: any
  onShare?: (result: boolean) => boolean
  onError?: (error: any) => void
}

export default function ShareButton({
  data,
  onShare = () => null,
  onError = () => null,
  children,
  ...rest
}: Props) {
  const handleShare = async () => {
    const { error, success } = await share(data)

    if (success) onShare(true)
    if (error) onError(error)
  }

  return shareIsSupported
    ? <div onClick={handleShare}> {children}</div> || (
        <IconShare1 onClick={handleShare} {...rest} />
      )
    : null
}
