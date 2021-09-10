//Vendors

import { Wrapper, Time, Name, Address } from './appointment.styles'

const Appointment = () => {
  //Template
  return (
    <Wrapper className='hoverBackground'>
      <Time>2:00pm</Time>
      <Name>Hayle Whitehead</Name>
      <Address>500 W 12th Ave</Address>
    </Wrapper>
  )
}

export default memo(Appointment)
