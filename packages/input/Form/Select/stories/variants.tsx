import { V, B } from '../../../../storybook/ui'
import Icon from '../../../../dataDisplay/Icon/library/IconAppleLogo/index'
import Button from '../../../Button/styles/1'
import Text from '../../../../dataDisplay/Text/build/types'
import Select3 from '../styles/3'

const data = [
  { value: 1, label: 'option 1' },
  { value: 2, label: 'option 2' },
]

const data2 = [
  { value: 'option 1 value', label: '1' },
  { value: 'option 2 value', label: '2' },
]

const data3 = { valueKey: 'index', labelKey: 'index', initialValue: 1 }

const commonProps = {
  onSelect: (value) => console.log(value),
}

function Variants({ Component: Select }) {
  return (
    <>
      <B title='default'>
        <Select data={data} {...commonProps} />
      </B>
      <B title={`with title`}>
        <Select data={data} {...commonProps} title={<Text text='season' />} />
      </B>
      <B title={`with label`}>
        <Select data={data} {...commonProps} label={<Text text='select season' />} />
      </B>
      <B title={`with initialSelected`}>
        <Select
          data={data}
          {...commonProps}
          initialValue={2}
          label={<Text text='select season' />}
        />
      </B>
      <B title={`with labelKey === index`}>
        <Select
          data={data}
          {...commonProps}
          title={<Text text='season' />}
          labelKey='index'
          label={<Text text='select season' />}
        />
      </B>
      <B title={`with children`}>
        <Select data={data2} {...commonProps}>
          <Button text='Select Season' />
        </Select>
      </B>
      <B title={`elTop`}>
        <Select
          data={data}
          elTop={<Icon plain />}
          {...commonProps}
          label={<Text styles={{ color: 'white', textAlign: 'center' }} />}
        />
      </B>
      <B title={`size`}>
        <Select
          data={data}
          {...commonProps}
          label={<Text text='select season' />}
          size='49.77px'
        />
      </B>
      <B title={`empty array`}>
        <Select
          data={data}
          {...commonProps}
          label={<Text text='select season' />}
          size='49.77px'
          {...data3}
        />
      </B>
    </>
  )
}

export default ({ onlyBase }) =>
  V({
    dir: 'input/Form/Select',
    styles: require.context('../styles', true, /index.js$/),
    Variants,
    onlyBase,
  })

export function Style3() {
  return <Select3 data={data} {...commonProps} label={<Text text='Corruption' />} />
}
