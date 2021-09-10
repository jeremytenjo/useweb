import styled from 'styled-components'

//Style
export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    '. Name'
    'Time .'
    '. Address';
  grid-template-columns: 80px 1fr;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  box-sizing: border-box;
  padding: var(--spacing-s);
  padding-left: 0;
  border-radius: 2px;
  margin-bottom: 10px;
`

export const Time = styled.span`
  grid-area: Time;
  font-weight: bold;
  line-height: 12px;
  font-size: 13px;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
  transition: 0.2s;
`
export const Name = styled.span`
  grid-area: Name;
  font-weight: normal;
  line-height: 12px;
  font-size: 15px;
  letter-spacing: 0.03em;
  color: #424242;
  transition: 0.2s;
`
export const Address = styled.span`
  grid-area: Address;
  font-weight: normal;
  line-height: 12px;
  font-size: 12px;
  letter-spacing: 0.03em;
  color: #a3a3a3;
  cursor: pointer;
  transition: 0.2s;
`
