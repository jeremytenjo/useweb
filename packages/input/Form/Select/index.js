import IconArrow1 from '../../../dataDisplay/Icon/library/IconArrow1'

import { defaultProps, propTypes } from './props'

const Select = (props) => {
  const S = { ...props.BS, ...props.CS }
  const {
    data,
    initialValue,
    valueKey,
    labelKey,
    onSelect,
    children,
    elTop,
    title,
    label,
    backgroundColor,
  } = props
  const selectRef = useRef(null)
  const [selectIsFocused, setSelectIsFocused] = useState(null)
  const [selectedValueText, setSelectedValueText] = useState(null)
  const defaultValue = initialValue ? { defaultValue: initialValue } : {}

  useEffect(() => {
    setLabelValue()
  }, [data])

  const setLabelValue = () => {
    const selectedValueDefault = initialValue
      ? data.find((d, index) => {
          return valueKey === 'index'
            ? index === initialValue
            : d[valueKey] === initialValue
        })?.[labelKey] ||
        (valueKey === 'index' ? initialValue : data[initialValue][labelKey])
      : valueKey === 'index'
      ? 0
      : data.length > 0
      ? data[0][labelKey]
      : ''

    setSelectedValueText(selectedValueDefault)
  }

  const handleChange = () => {
    const {
      current: { value },
    } = selectRef
    const label = selectRef.current.options[selectRef.current.selectedIndex].innerHTML
    onSelect({ value, label })
    setSelectedValueText(label)
  }

  const onFocus = () => {
    setSelectIsFocused(true)
  }

  const onBlur = () => {
    setSelectIsFocused(false)
  }

  if (data.length === 0) return null

  return (
    <S.Wrapper {...props} selectIsFocused={selectIsFocused}>
      {elTop && <S.ElTopWrapper>{elTop}</S.ElTopWrapper>}
      <S.SelectWrapper {...props}>
        <S.Select
          {...props}
          hasChildren={children}
          ref={selectRef}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          {...defaultValue}
        >
          {data.map((item, index) => {
            const value = valueKey === 'index' ? index + 1 : item[valueKey]
            const label = labelKey === 'index' ? index + 1 : item[labelKey]

            return (
              <S.Option key={index} value={value}>
                {label}
              </S.Option>
            )
          })}
        </S.Select>
        {label && (
          <S.LabelWrapper {...props}>
            {cloneElement(label, { text: selectedValueText })}
            <S.Chevron {...props}>
              <IconArrow1 color={backgroundColor} size='10px' plain />
            </S.Chevron>
          </S.LabelWrapper>
        )}
      </S.SelectWrapper>
      {children}
      {title && <S.TitleWrapper>{title}</S.TitleWrapper>}
    </S.Wrapper>
  )
}

Select.defaultProps = defaultProps
Select.propTypes = propTypes

export default memo(Select)
