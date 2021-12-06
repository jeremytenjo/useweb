import B from '../../../storybook/variationBlock/index'
import Countdown from '..'

function addSeconds(days) {
  const result = new Date()
  result.setSeconds(result.getSeconds() + days)
  return result
}

const endDate = addSeconds(5)

export default () => {
  return (
    <>
      <B title={`endDate - 5 seconds from page load`}>
        <Countdown endDate={endDate} onTimeUp={() => console.log('times up')} />
      </B>
      <B title='seperator - :'>
        <Countdown separator=':' endDate={endDate} />
      </B>
      <B title='noText'>
        <Countdown noText separator=':' endDate={endDate} />
      </B>
    </>
  )
}
