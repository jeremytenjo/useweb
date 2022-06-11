import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import useFirebaseFunction from '../../../../../utils/cloud/functions/firebase/useFirebaseFunction'
import Button from '../../../../../input/Button/styles/1'
import useToast from '../../../../../feedback/useToast'
import useOnTrue from '../../../../../utils/hooks/useOnTrue'
import ErrorMessage from '../../../../../dataDisplay/ErrorMessage'

export default function SendNotificationStory({ fcmRegistrationToken }) {
  const toast = useToast()
  const sendPushNotification = useFirebaseFunction('sendPushNotification', {
    cloudFunctionsLocalPort: 5002,
  })

  const send = () => {
    sendPushNotification.exec({
      fcmRegistrationToken,
    })
  }

  useOnTrue(sendPushNotification.result, () => {
    toast.showToast({ message: 'Message sent!' })
  })

  return (
    <div style={{ padding: 10 }}>
      <p>Sending notification to FCM token:</p>
      <br />
      <p>{fcmRegistrationToken}</p>
      <br />

      <Button
        text='Send notification'
        loading={sendPushNotification.loading}
        onClick={send}
      />
      <br />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {sendPushNotification.error && (
            <ErrorMessage error={sendPushNotification.error} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
