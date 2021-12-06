import { useEffect, useState } from 'react'

import CopyToClipboard from '../../../../../../input/CopyToClipboard/index'
import Donut from '../../../../../../feedback/progress/Donut/index'
import Code from '../../../../../../dataDisplay/Code/index'
import Text from '../../../../../../dataDisplay/Text/src/index'
import showNotification from '../../../../../../feedback/notification/showNotification'
import useFirebaseMessaging from '../../src'

export default function ReceiveNotificationStory() {
  const [message, setMessage] = useState(null)

  const { init, fcmRegistrationToken, isSupported, isReadyToUse, initializing, error } =
    useFirebaseMessaging({
      onMessage: (payload) => setMessage(payload),
    })

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
