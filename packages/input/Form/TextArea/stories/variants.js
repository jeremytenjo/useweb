import { B, V } from '../../../../storybook/ui'

const Variants = ({ Component: TextArea }) => {
  return (
    <>
      <B title='default'>
        <TextArea placeholder='Type here...' name='theTextarea' />
      </B>
      <B title='defaultValue'>
        <TextArea
          placeholder='Type here...'
          name='texteranae'
          defaultValue='hello this isinitial'
        />
      </B>
    </>
  )
}

export default ({ onlyBase }) =>
  V({
    dir: 'input/Form/TextArea',
    styles: require.context('../styles', true, /index.js$/),
    Variants,
    onlyBase,
  })
