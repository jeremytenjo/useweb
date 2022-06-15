import React from 'react'

import IconShare1 from '../../Icon/library/IconShare1'
import share, { shareIsSupported } from '../../../engagement/share'
import type { Props as ShareProps } from '../../../engagement/share'

type Props = {
  data?: ShareProps
  children?: any
  onShare?: (result: boolean) => boolean
  onError?: (error: any) => void
}

export default function ShareButton({
  data,
  onShare = () => false,
  onError = () => null,
  children,
  ...rest
}: Props) {
  const handleShare = async () => {
    const { error, success } = await share(data as any)

    if (success) onShare(true)
    if (error) onError(error)
  }

  return !!shareIsSupported ? (
    children ? (
      <div onClick={handleShare}>{children}</div>
    ) : (
      <IconShare1 onClick={handleShare} {...rest} />
    )
  ) : null
}
