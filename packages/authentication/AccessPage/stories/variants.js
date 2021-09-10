import { V, B } from '../../../storybook/ui'

const Variants = ({ Component: AccessPage }) => {
  const [user, setShow] = useState(false)

  const handleSuccess = (userInfo) => {
    console.log({ userInfo })
    setShow(false)
  }

  return (
    <>
      <B title='default'>
        <button onClick={() => setShow(!user)}>Show</button>
        <AccessPage
          user={user}
          onClose={() => setShow(false)}
          variation={1}
          type='login'
          onSuccess={handleSuccess}
          // logo={Logo}
          desc='Example auth page'
          service='firebase'
          providers={['apple', 'google', 'facebook']}
        />
      </B>
    </>
  )
}

export default ({ onlyBase }) =>
  V({
    dir: 'authentication/AccessPage',
    styles: require.context('../styles', true, /index.js$/),
    Variants,
    onlyBase,
    noBase: true,
  })
