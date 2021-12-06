import React from 'react'
import { initializeApp } from 'firebase/app'
import { getMessaging } from 'firebase/messaging'
import { Meta } from '@storybook/react'
import { FirebaseProvider } from '@useweb/use-firebase'

import firebaseConfig from '../../../../../../firebase/firebase.config'

import ReceiveNotificationStory from './examples/ReceiveNotificationStory'

import Docs from './docs.mdx'

const firebaseApp = initializeApp(firebaseConfig)
const messaging = getMessaging()

export default {
  title: 'packages/serverless/firebase/messaging/useFirebaseMessaging',
  args: {},
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
  },
} as Meta

const Template = (args) => {
  return (
    <FirebaseProvider firebaseApp={firebaseApp} messaging={messaging}>
      Hello
    </FirebaseProvider>
  )
}

export const Example = Template.bind({
  children: ReceiveNotificationStory,
})
