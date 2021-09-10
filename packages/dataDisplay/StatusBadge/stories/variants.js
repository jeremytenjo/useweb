import { B, V } from '../../../storybook/ui'

const Variants = ({ Component: StatusBadge }) => {
  const [state, setState] = useState('loading')

  const updateState = () => {
    let nextState = ''

    switch (state) {
      case 'loading':
        nextState = 'success'
        break
      case 'success':
        nextState = 'error'
        break
      case 'error':
        nextState = 'disabled'
        break
      case 'disabled':
        nextState = 'loading'
        break
      default:
        nextState = 'success'
        break
    }

    setState(nextState)
  }
  return (
    <>
      <StatusBadge state={state} />
      <br />
      <br />
      <button onClick={() => updateState()}>update dynamic state</button>
      <br />
      <br />

      <B title='loading'>
        <StatusBadge state='loading' />
      </B>
      <B title='success'>
        <StatusBadge state='success' />
      </B>
      <B title='error'>
        <StatusBadge state='error' />
      </B>
      <B title='disabled'>
        <StatusBadge state='disabled' />
      </B>
    </>
  )
}

export default ({ onlyBase }) =>
  V({
    dir: 'dataDisplay/StatusBadge',
    Variants,
    onlyBase,
  })
