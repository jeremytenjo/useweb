import { useEffect, useState } from 'react'

import CopyToClipboard from '../../../../../../input/CopyToClipboard/index'
import Donut from '../../../../../../feedback/progress/Donut/index'
import Code from '../../../../../../dataDisplay/Code/index'
import Text from '../../../../../../dataDisplay/Text/src/index'
import showNotification from '../../../../../../feedback/notification/showNotification'
import ErrorMessage from '../../../../../../dataDisplay/ErrorMessage'
import useFirebaseMessaging from '../../src'

export default function ReceiveNotificationStory() {
  const [message, setMessage] = useState(null)

  const messaging = useFirebaseMessaging({
    onMessage: (payload) => setMessage(payload),
  })

  useEffect(() => {
    if (message) {
      showNotification(message.notification)
    }
  }, [message])

  return (
    <div style={{ padding: 10 }}>
      <CopyToClipboard style={{ width: '100%', overflow: 'auto' }} text='hello copy this'>
        <p>hello copy this</p>
      </CopyToClipboard>

      {!messaging.isSupported() && (
        <Text
          text='Push notifications are not supported in the current device'
          styles={{ color: 'red' }}
        />
      )}

      {messaging.error && <ErrorMessage error={messaging.error} />}

      {messaging.isSupported() &&
        !messaging.error &&
        !messaging.isReadyToUse &&
        !messaging.initializing && (
          <button onClick={() => messaging.init()}>Initialize</button>
        )}

      {messaging.initializing && <Donut />}

      {messaging.isReadyToUse && (
        <>
          <p>Your FCM Registration Token:</p>
          <br />
          <CopyToClipboard
            text={messaging.fcmRegistrationToken}
            style={{ width: '100%', overflow: 'auto' }}
          >
            <p>{messaging.fcmRegistrationToken}</p>
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
