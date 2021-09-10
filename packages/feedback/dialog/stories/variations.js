import B from '../../../storybook/variationBlock/index'
import Text from '../../../dataDisplay/Text'

const Variations = ({ Dialog, name }) => {
  return (
    <div>
      <Text text={name} variant='h6' color='white' fontWeight='bold' paddingLeft='20px' />

      <B title=' title & message'>
        <Dialog title='title' message='Message' />
      </B>

      <B title='only message'>
        <Dialog message='Message'>Hello</Dialog>
      </B>

      <B title='only title'>
        <Dialog title='title'>Hello</Dialog>
      </B>
    </div>
  )
}

export default Variations
