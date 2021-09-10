import toBoolean from '../../../utils/string/toBoolean'
import IconCloseMaterial from '../../../dataDisplay/Icon/library/IconCloseMaterial/index'
import Animation from '../../../utils/Animation'
import Text from '../../../dataDisplay/Text'

import { defaultProps } from './props'

export default function TextField({
  Wrapper,
  Input,
  IconLeftCon,
  IconRightCon,
  InputCon,
  CloseIconCon,
  onFocus,
  type,
  name,
  validation,
  font,
  color,
  foregroundColor,
  backgroundColor,
  textColor,
  round,
  IconLeft,
  IconRight,
  placeholder,
  onBlur,
  style,
  width,
  label,
  onLeftIconClick,
  onRightIconClick,
  onInput,
  autocomplete,
  defaultValue,
  clearOnSubmit,
  dataCy,
  setInSessionStorage,
}) {
  // Refs
  const inputRef = useRef(null)
  const closeIconRef = useRef(null)
  const errMessagesRef = useRef(null)

  const hasValidation = validation.length > 0
  const animationType = 'showHide'

  // State
  const [input, setInput] = useState(defaultValue)
  const [errorMessages, seterrorMessages] = useState([])
  // Tracks validilty with react
  const [isValid, setIsValid] = useState(true)
  // Tracks validilty with data attribute for use with Form component
  const [isValidFormCheck, setIsValidFormCheck] = useState(null)
  const [focus, setfocus] = useState(null)

  useEffect(() => {
    initialValidation(input)
    startOnSubmitListener()

    if (setInSessionStorage) {
      const sessionInput = sessionStorage.getItem(name)
      if (sessionInput && sessionInput !== 'null') setInput(sessionInput)
    }

    return () => {
      removeOnSubmitListener()
    }
  }, [])

  useEffect(() => {
    isValidFormCheck !== null && hasValidation && onChangeVaildation(input)
    if (setInSessionStorage) sessionStorage.setItem(name, input)
  }, [input])

  // Functions
  const startOnSubmitListener = () => {
    const parentForm = inputRef.current.parentNode.parentNode.parentNode
    parentForm.addEventListener('submit', handleFormListener, true)
  }

  const removeOnSubmitListener = () => {
    const parentForm = inputRef.current.parentNode.parentNode.parentNode
    parentForm.removeEventListener('submit', handleFormListener)
  }

  const handleFormListener = () => {
    const isInputvalid = toBoolean(inputRef.current.dataset.isvalid)
    isInputvalid && clearOnSubmit && setInput('')

    setIsValid(isInputvalid)
    setIsValidFormCheck(isInputvalid)
  }

  const onClearIconClick = () => {
    inputRef.current.focus()
    setInput('')
    onInput('')
  }

  const initialValidation = async (value) => {
    if (!hasValidation) {
      setIsValid(true)
      setIsValidFormCheck(true)
    } else {
      const errorMessages = await checkValidation(value)
      const hasErrorMessages = errorMessages.includes(undefined)

      errorMessages && seterrorMessages(errorMessages)
      setIsValidFormCheck(hasErrorMessages)
    }
  }

  const onChangeVaildation = async (value) => {
    const errorMessages = await checkValidation(value)
    errorMessages && seterrorMessages(errorMessages)

    const hasErrorMessages = errorMessages.includes(undefined)
    setIsValidFormCheck(hasErrorMessages)
    setIsValid(hasErrorMessages)
  }

  const checkValidation = async (value) => {
    if (hasValidation) {
      const messages = await validation.map(async ({ name, message }) => {
        const mod = await import(`./validation/${name}`)
        const errMessage = mod.default({ value, message })

        if (errMessage) return errMessage
      })

      const allerrorMessages = await Promise.all(messages)
      return allerrorMessages.length > 0 ? allerrorMessages : null
    }
  }

  const handleChange = async ({ target: { value } }) => {
    onInput(value)
    setInput(value)
  }

  const handleFocus = () => {
    onFocus(input)
    setfocus(true)
  }

  const handleBlur = () => {
    onBlur(input)
    setfocus(false)
  }

  return (
    <>
      <Wrapper
        color={color}
        round={round}
        isFocused={focus}
        style={style}
        width={width}
        foregroundColor={foregroundColor}
        backgroundColor={backgroundColor}
        textColor={textColor}
        isValid={isValid}
      >
        <label htmlFor={name}>{name}</label>
        {/* Left Icon */}
        {IconLeft && (
          <IconLeftCon onClick={onLeftIconClick}>
            <IconLeft
              noBackground
              style={{
                height: '100%',
              }}
            />
          </IconLeftCon>
        )}

        {/* Input */}
        <InputCon>
          <Input
            ref={inputRef}
            data-isvalid={isValidFormCheck}
            type={type}
            value={input === null ? undefined : input}
            onChange={handleChange}
            onFocus={handleFocus}
            name={name}
            id={name}
            autoComplete={autocomplete}
            placeholder={placeholder}
            onBlur={handleBlur}
            font={font}
            data-cy={dataCy || name}
          />

          <Animation
            name={animationType}
            show={input !== ''}
            el={closeIconRef}
            displayType='visibility'
          />
          <CloseIconCon
            ref={closeIconRef}
            textColor={textColor}
            style={{ visibility: 'hidden' }}
            data-cy='textfield_closeIcon'
          >
            <IconCloseMaterial onClick={onClearIconClick} size='16px' fill='black' />
          </CloseIconCon>
        </InputCon>

        {/* Right Icon */}
        {IconRight && (
          <IconRightCon onClick={onRightIconClick}>
            <IconRight
              noBackground
              style={{
                height: '100%',
              }}
            />
          </IconRightCon>
        )}
      </Wrapper>

      {/* Error Message */}
      <Animation name={animationType} show={!isValid} el={errMessagesRef} />
      <div
        data-cy='textfield_errorMessages'
        ref={errMessagesRef}
        style={{ marginTop: 'var(--spacing-xs', display: 'none' }}
      >
        {errorMessages.map((message, index) => (
          <Text
            key={`${message}${index}`}
            text={message}
            styles={{ color: 'red' }}
            variant='body2'
          />
        ))}
      </div>
    </>
  )
}

TextField.defaultProps = defaultProps
