import React from 'react'
import { initializeApp } from 'firebase/app'
import { getMessaging } from 'firebase/messaging'
import { Meta } from '@storybook/react'
import { FirebaseProvider } from '../../../useFirebase/src/index'

import firebaseConfig from '../../../../../../firebase/firebase.config'

import ReceiveNotificationStory from './examples/ReceiveNotificationStory'

import Docs from './docs.mdx'

const firebaseApp = initializeApp(firebaseConfig)
const messaging = getMessaging()

export default {
  title: 'packages/Serverless/Firebase/Messaging/useFirebaseMessaging',
  args: {},
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
  },
} as Meta

const Template = (args) => {
  const vapidKey =
    'BN00LZftcTdyP4TYvFRnfWe_jjfTOSc-9rUFEOf2VxnxGlf_IP6bbPvFJLbBB9QZzixT4MHQK5QFM_1NTt_frsE'

  return (
    <FirebaseProvider
      firebaseConfig={firebaseConfig}
      firebaseApp={firebaseApp}
      messaging={messaging}
      messagingOptions={{ vapidKey }}
      envIsDev
    >
      {args.children}
    </FirebaseProvider>
  )
}

export const ReceiveNotification = Template.bind({})
ReceiveNotification.args = {
  children: <ReceiveNotificationStory />,
}
