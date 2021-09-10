import usePushNotifications, { PushNotificationsProvider } from '..'
import CopyToClipboard from '../../../../../input/CopyToClipboard'
import Donut from '../../../../../feedback/progress/Donut'
import Code from '../../../../../dataDisplay/Code'
import Text from '../../../../../dataDisplay/Text'
import showNotification from '../../../../../feedback/notification/showNotification'

const Child = () => {
  const {
    init,
    fcmRegistrationToken,
    message,
    isSupported,
    isReadyToUse,
    initializing,
    error,
  } = usePushNotifications()

  useEffect(() => {
    if (message) {
      showNotification(message.notification)
    }
  }, [message])

  return (
    <div style={{ padding: 10 }}>
      {!isSupported() && (
        <Text
          text='Push notifications are not supported on the current device'
          styles={{ color: 'red' }}
        />
      )}

      {error && <Code code={error} stringify />}

      {isSupported() && !isReadyToUse && !initializing && (
        <button onClick={() => init()}>Initialize</button>
      )}

      {initializing && <Donut />}

      {isReadyToUse && (
        <>
          <p>Your FCM Registration Token:</p>
          <br />
          <CopyToClipboard text={fcmRegistrationToken}>
            <p>{fcmRegistrationToken}</p>
          </CopyToClipboard>
          <br />
          <p>Setup complete. Waiting for notifications...</p>

          {message && (
            <>
              <br />
              <p>Notification Received</p>
              <br />
              <Code code={message} stringify />
            </>
          )}
        </>
      )}
    </div>
  )
}

export default () => (
  <PushNotificationsProvider forceSupport={true}>
    <Child />
  </PushNotificationsProvider>
)
