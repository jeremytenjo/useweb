// Vendros
import styled from 'styled-components'

// Styles
export const ChatWrapper = styled.form`
  position: relative;
  height: 300px;
  overflow: hidden;
`
export const ChatList = styled.div`
  height: 100%;
  overflow: scroll;
  padding-bottom: 50px;
  box-sizing: border-box;
`
export const CurrentUserCompWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const OtherUserCompWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const InputCompWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
`
