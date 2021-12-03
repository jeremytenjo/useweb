import Box from '@useweb/box'

import Text from '../../dataDisplay/Text'
import useTimeout from '../timeout/useTimeout'
import makeTwoDigit from '../../utils/numbers/makeTwoDigit'

import { defaultProps, propTypes } from './props'
import * as styles from './styles'

const Countdown = ({
  endDate,
  wrapperStyles,
  typographyStyles,
  separator,
  onTimeUp,
  noText,
}) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date()
    let newTimeLeft = { days: '00', hours: '00', minutes: '00', seconds: '00' }

    if (difference > 0) {
      newTimeLeft = {
        days: makeTwoDigit(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: makeTwoDigit(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: makeTwoDigit(Math.floor((difference / 1000 / 60) % 60)),
        seconds: makeTwoDigit(Math.floor((difference / 1000) % 60)),
      }
    }

    return newTimeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [timerComponents, setTimerComponents] = useState()
  const timeLeftKeys = Object.keys(timeLeft)
  const seconds = 1000

  const handleTimeLeft = () => {
    const newTimerComponents = getTimerComponents()
    const ended =
      timeLeft.days === '00' &&
      timeLeft.hours === '00' &&
      timeLeft.minutes === '00' &&
      timeLeft.seconds === '00'

    if (!ended) {
      setTimerComponents(newTimerComponents)
      setTimeLeft(calculateTimeLeft())
    } else {
      onTimeUp()
      setTimerComponents(newTimerComponents)
    }
  }

  const getTimerComponents = () => {
    const newTimerComponents = []

    timeLeftKeys.forEach((interval, index) => {
      const timeLeftInterval = timeLeft[interval]
      const key = interval + timeLeftInterval
      const isLastInterval = timeLeftKeys.length === index + 1
      const separatorString = isLastInterval ? '' : separator
      const name = noText ? '' : interval
      const mergedTypographyStyles = {
        ...styles.typographyStyles,
        ...typographyStyles,
      }

      newTimerComponents.push(
        <Fragment key={key}>
          <Text styles={mergedTypographyStyles} text={`${timeLeftInterval} ${name}`} />
          <Text styles={mergedTypographyStyles} text={`${separatorString}`} />
        </Fragment>,
      )
    })

    return newTimerComponents
  }

  useTimeout({ seconds, callback: handleTimeLeft, reseter: timeLeft })

  return (
    <Box styles={{ ...styles.wrapper, ...wrapperStyles }}>
      {timerComponents && timerComponents.length && timerComponents}
    </Box>
  )
}

Countdown.defaultProps = defaultProps
Countdown.propTypes = propTypes

export default memo(Countdown)
