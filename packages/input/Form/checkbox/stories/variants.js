import { V, B } from '../../../../storybook/ui'

const Variants = ({ Component: Checkbox }) => {
  return (
    <>
      <B title='default'>
        <Checkbox />
      </B>
    </>
  )
}

export default ({ onlyBase }) =>
  V({
    dir: 'input/Form/checkbox',
    styles: require.context('../styles', true, /index.js$/),
    Variants,
    onlyBase,
  })
