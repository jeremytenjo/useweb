import LottieReact from 'lottie-react'

import { defaultProps } from './props'

/**
 * {@link https://gamote.github.io/lottie-react/components/Lottie#props|Docs}
 */
export default function Lottie(props) {
  return <LottieReact {...props} />
}

Lottie.defaultProps = defaultProps
