import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@useweb/button'

import useFirebaseFunction from '../../../../functions/useFirebaseFunction/src/index'
import useToast from '../../../../../../feedback/useToast'
import ErrorMessage from '../../../../../../dataDisplay/ErrorMessage'

export default function SendNotificationStory({ fcmRegistrationToken }) {
  const toast = useToast()
  const sendPushNotification = useFirebaseFunction({
    name: 'sendPushNotification',
    onResult: () => {
      toast.showToast({ message: 'Message sent!' })
    },
  })

  const send = () => {
    sendPushNotification.exec({
      data: fcmRegistrationToken,
    })
  }

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
