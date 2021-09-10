import analytics from '../../analytics/index'

import getValues from './functions/getValues'
import checkInvalidValues from './functions/checkInvalidValues'
import { defaultProps, propTypes } from './props'

const Form = ({ children, onSubmitSuccess, onSubmitFail, emptyFormMessage, style }) => {
  const formRef = useRef(null)
  const { isEmptyForm, setisEmptyForm } = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const formEl = formRef.current

    // Handle Invalid Inputs
    const hasInvalid = checkInvalidValues(formEl)
    if (hasInvalid) {
      onSubmitFail()
      return null
    }

    // Handle Values
    const formValues = getValues(formEl)

    if (formValues === null) return null
    if (formValues === 'empty') {
      setisEmptyForm(true)
      onSubmitFail()
      return null
    }
    // handle honeypot
    const { a_password } = formValues
    if (a_password) {
      analytics().logEvent('spam_attempt', {
        type: 'form_bot',
      })
      return null
    }
    delete formValues.a_password

    onSubmitSuccess(formValues)
  }

  return (
    <form onSubmit={onSubmit} ref={formRef} style={style}>
      {children}
      {isEmptyForm && <p>{emptyFormMessage}</p>}
      {/* honeypot input */}
      <input
        type='checkbox'
        name='a_password'
        style={{ display: 'none' }}
        tabIndex='-1'
        autoComplete='off'
      />
    </form>
  )
}

Form.defaultProps = defaultProps
Form.propTypes = propTypes

export default memo(Form)
