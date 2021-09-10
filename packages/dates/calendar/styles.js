import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 10px;
`

export const WeekDaysTitles = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;

  span {
    font-family: var(--font-primary);
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
  }
`

export const DatePickersCon = styled.div`
  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;
`

export const DayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px 1px;
`
