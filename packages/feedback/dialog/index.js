import Button from '../../input/Button/index'
import Text from '../../dataDisplay/Text/index'

import { defaultProps, propTypes } from './props'

const Dialog = ({
  Wrapper,
  ConfirmationCon,
  title,
  message,
  fullscreen,
  confirmationCancelText,
  confirmationAcceptText,
  onCancel,
  onAccept,
}) => {
  const dialogRef = useRef(null)

  return (
    <Wrapper ref={dialogRef} fullscreen={fullscreen}>
      <Text variant='h5' text={title} textAlign='left' color='white' />
      <Text variant='body1' text={message} textAlign='left' color='white' />

      <ConfirmationCon>
        <Button outlined text={confirmationCancelText} onClick={onCancel} />
        <Button text={confirmationAcceptText} onClick={onAccept} />
      </ConfirmationCon>
    </Wrapper>
  )
}

Dialog.defaultProps = defaultProps
Dialog.propTypes = propTypes

export default memo(Dialog)
