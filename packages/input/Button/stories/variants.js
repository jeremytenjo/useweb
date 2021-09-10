import { B, V } from '../../../storybook/ui'
import Dots from '../../../feedback/progress/dots'
import IconX from '../../../dataDisplay/Icon/library/IconAppleLogo/index'
import RefreshButtonComp from '../special/RefreshButton'
import CopyButtonComp from '../special/CopyButton'

const Variants = ({ Component: Button }) => {
  const [loading, setLoading] = useState(null)

  return (
    <>
      <B title='color - primary'>
        <Button color='primary' text='Hello' />
      </B>
      <B title='alternative color'>
        <Button color='secondary' />
      </B>
      <B title='active'>
        <Button active />
      </B>
      <B title='disabled'>
        <Button disabled />
      </B>
      <B title='outlined' color='black'>
        <Button outlined />
      </B>
      <B title='matchesUrl' color='black'>
        <Button url='/iframe.html' />
      </B>
      <B title='loading'>
        <button onClick={() => setLoading(!loading)}>toggle</button>
        <br />
        <br />
        <Button loading={loading} ProgressComponent={<Dots />} />
      </B>
      <B title='beforeIcon and afterIcon'>
        <Button beforeIcon={<IconX plain />} afterIcon={<IconX plain />} />
      </B>
      <B title='beforeIcon'>
        <Button beforeIcon={<IconX plain />} />
      </B>
      <B title='afterIcon'>
        <Button afterIcon={<IconX plain />} />
      </B>
    </>
  )
}

export default () =>
  V({
    dir: 'input/Button',
    styles: require.context('../styles', true, /index.js$/),
    Variants,
  })

export const RefreshButton = () => {
  const onRefresh = () => {
    console.log('onRefresh')
  }

  return <RefreshButtonComp onRefresh={onRefresh} />
}

export const CopyButton = () => {
  const onCopy = () => {
    console.log('onCopy')
  }

  return <CopyButtonComp onCopy={onCopy} text='hello this is copied' />
}
