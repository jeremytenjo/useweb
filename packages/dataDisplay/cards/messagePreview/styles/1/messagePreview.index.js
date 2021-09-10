import styled from 'styled-components'

const Item = ({ ...props }) =>
  props.skeleton ? (
    <WrapperSkeleton className='skeletonAnimation'>
      <ProfilePicSkeleton />
      <Name>name</Name>
      <Message>name</Message>
      <Time>name</Time>
    </WrapperSkeleton>
  ) : (
    <Wrapper onClick={props.onClick} className='hoverBackground'>
      <ProfilePic src={props.profilePic} alt={props.name} />
      <Name>{props.name}</Name>
      <Message>{props.message}</Message>
      <Time>{props.time}</Time>
    </Wrapper>
  )

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'ProfilePic Name Time'
    'ProfilePic Message Time';
  grid-template-columns: 54px 1fr 50px;
  grid-column-gap: 10px;
  width: 100%;
  cursor: pointer;
  user-select: none;
  padding: var(--spacing-s);
  box-sizing: border-box;
  border-radius: 2px;
`
const WrapperSkeleton = styled(Wrapper)`
  grid-gap: var(--spacing-xs);
  > span {
    color: #eeeeee;
    background: #eeeeee;
  }
`

const ProfilePic = styled.img`
  grid-area: ProfilePic;
  border-radius: 100px;
  width: 54px;
`

const ProfilePicSkeleton = styled(ProfilePic)`
  height: 54px;
  background: #eeeeee;
`

const Name = styled.span`
  grid-area: Name;
  align-self: end;
  font-size: 16px;
  padding-bottom: 3px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
const Message = styled.span`
  grid-area: Message;
  align-self: start;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
  padding-top: 3px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
const Time = styled.span`
  grid-area: Time;
  font-size: 13px;
  align-self: center;
  justify-self: end;
`

export default Item
