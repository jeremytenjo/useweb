import React, { useEffect, useRef, useState } from 'react'

import monthData from '../utils/monthList'
import Icon from '../../dataDisplay/Icon/build'

import { defaultProps, propTypes } from './props'
import { Wrapper } from './styles'

const DatePicker = ({ arrowColor, onSelect, color, type, yearRange, arrowName }) => {
  const selectRef = useRef(null)

  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const currentMonthString = monthData[currentMonth]
  const initData = type === 'month' ? monthData : []
  const initSelectedValue = type === 'month' ? currentMonthString : currentYear

  const [data, setData] = useState(initData)
  const [selectedValue, setselectedValue] = useState(initSelectedValue)

  useEffect(() => {
    type === 'year' && calcYearRange()
  }, [])

  const calcYearRange = () => {
    const years: any[] = []
    for (let i = 0; i < yearRange; i++) {
      years.push(Math.abs(i + 1 - currentYear).toString())
    }
    years.reverse()
    years.push(currentYear.toString())
    for (let i = 0; i < yearRange; i++) {
      years.push(Math.abs(i + 1 + currentYear).toString())
    }
    setData(years)
  }

  const handleOnSelect = ({ target: { value } }) => {
    setselectedValue(value)
    onSelect(value)
  }

  const handlePrev = () => {
    const selectedItem = selectRef.current.value
    const selectedItemIndex = data.findIndex((item) => item === selectedItem) - 1
    const prevItem = data[selectedItemIndex]
    const returnItem = prevItem || data[data.length - 1]

    setselectedValue(returnItem)
    onSelect(returnItem)
  }
  const handleNext = () => {
    const selectedItem = selectRef.current.value
    const selectedItemIndex = data.findIndex((item) => item === selectedItem) + 1
    const nextItem = data[selectedItemIndex]
    const returnItem = nextItem || data[0]

    setselectedValue(returnItem)
    onSelect(returnItem)
  }

  return (
    <Wrapper arrowColor={arrowColor} color={color}>
      <Icon name={arrowName} color={arrowColor} onClick={handlePrev} />

      {data.length > 0 && (
        <select ref={selectRef} onChange={handleOnSelect} value={selectedValue}>
          {data.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      )}

      <Icon
        name={arrowName}
        color={arrowColor}
        onClick={handleNext}
        style={{ transform: 'rotate(180deg)' }}
      />
    </Wrapper>
  )
}

DatePicker.defaultProps = defaultProps
DatePicker.propTypes = propTypes

export default DatePicker
