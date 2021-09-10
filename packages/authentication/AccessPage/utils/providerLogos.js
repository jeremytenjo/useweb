import IconGoogleLogo from '../../../dataDisplay/Icon/library/IconGoogleLogo'
import IconMicrosoftLogo from '../../../dataDisplay/Icon/library/IconMicrosoftLogo'
import IconAppleLogo from '../../../dataDisplay/Icon/library/IconAppleLogo'
import IconFacebookLogo from '../../../dataDisplay/Icon/library/IconFacebookLogo'

const providerLogos = (name) => {
  const logoData = {
    google: IconGoogleLogo,
    microsoft: IconMicrosoftLogo,
    apple: IconAppleLogo,
    facebook: IconFacebookLogo,
  }
  const Icon = logoData[name]

  return Icon
}

export default providerLogos
