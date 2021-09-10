import { V, B } from '../../../storybook/ui'

const Variants = ({ Component: Menu }) => {
  const options = ['liberals', 'ndp']

  return (
    <>
      <B title='default'>
        <Menu options={options} onSelect={(e) => console.log(e)} />
      </B>
    </>
  )
}

export default ({ onlyBase }) =>
  V({
    dir: 'input/menu',
    styles: require.context('../styles', true, /index.js$/),
    Variants,
    onlyBase,
    noBase: true,
  })
