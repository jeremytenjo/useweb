import getDaysInMonth from 'date-fns/getDaysInMonth'
import isSameDay from 'date-fns/isSameDay'

import daysList from '../utils/daysList'
import monthList from '../utils/monthList'
import Day from '../day/day.index'
import DatePicker from '../datePicker'

import { defaultProps, propTypes } from './props'
import { Wrapper, WeekDaysTitles, DayGrid, DatePickersCon } from './styles'

const Calendar = ({ onDateSelect, yearRange, events }) => {
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const currentDay = new Date().getDate()
  const currentMonthString = monthList[currentMonth]

  const [currentMonthDaysArray, setcurrentMonthDaysArray] = useState([])
  const [selectedDay, setSelectedDay] = useState(currentDay)
  const [selectedMonth, setSelectedMonth] = useState(currentMonthString)
  const [selectedYear, setSelecteYear] = useState(currentYear)

  useEffect(() => {
    setMonthDays()
  }, [])

  useEffect(() => {
    currentMonthDaysArray.length > 0 && setMonthDays()
  }, [selectedMonth, selectedYear])

  const calcCurrentMonthDays = (date, daystoSkip) => {
    const monthDaysAmount = getDaysInMonth(date)
    const newMonths = []

    for (let i = 0; i < daystoSkip; i++) {
      newMonths.push(null)
    }

    for (let i = 0; i < monthDaysAmount; i++) {
      newMonths.push(i + 1)
    }
    setcurrentMonthDaysArray(newMonths)
  }

  const handleDaySelect = ({ day, events }) => {
    const date = new Date(`${selectedMonth} ${day}, ${selectedYear}`)

    setSelectedDay(day)
    onDateSelect({
      date,
      events,
    })
  }

  const handleMonthSelect = (month) => {
    setSelectedMonth(month)
    onDateSelect({ day: selectedDay, month, year: selectedYear })
  }

  const handleYearSelect = (year) => {
    setSelecteYear(year)
    onDateSelect({ day: selectedDay, month: selectedMonth, year })
  }

  const setMonthDays = () => {
    const currentDate = new Date(`${selectedMonth}, ${selectedYear}`)
    const daystoSkip = currentDate.getDay()
    calcCurrentMonthDays(currentDate, daystoSkip)
  }

  const defineIsCurrentDate = (day) => {
    const isCurrentYear = currentYear.toString() === selectedYear.toString()
    const isCurrentMonth = currentMonthString === selectedMonth
    const isCurrentDay = day === currentDay
    return isCurrentYear && isCurrentMonth && isCurrentDay
  }

  return (
    <Wrapper>
      <DatePickersCon>
        <DatePicker type='month' onSelect={handleMonthSelect} />
        <DatePicker type='year' onSelect={handleYearSelect} yearRange={yearRange} />
      </DatePickersCon>
      <WeekDaysTitles>
        {daysList.map((title) => (
          <span key={title}>{title}</span>
        ))}
      </WeekDaysTitles>
      <DayGrid>
        {currentMonthDaysArray.map((day) => {
          const isCurrentDay = defineIsCurrentDate(day)
          const active = day === selectedDay
          const dayDate = new Date(`${selectedMonth} ${day}, ${selectedYear}`)
          const filterDate = events.filter(({ date }) => isSameDay(date, dayDate))
          const statuses = [...new Set(filterDate.map(({ status }) => status))]

          return day ? (
            <Day
              key={day}
              number={day}
              onClick={handleDaySelect}
              isCurrentDay={isCurrentDay}
              isActive={active}
              statuses={statuses}
              events={filterDate}
            />
          ) : (
            <div key={Math.random()} />
          )
        })}
      </DayGrid>
    </Wrapper>
  )
}

Calendar.defaultProps = defaultProps
Calendar.propTypes = propTypes

export default memo(Calendar)
