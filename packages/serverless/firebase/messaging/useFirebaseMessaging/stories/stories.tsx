import React from 'react'
import { initializeApp } from 'firebase/app'

import { Meta } from '@storybook/react'
import { FirebaseProvider } from '@useweb/use-firebase'

import firebaseConfig from '../../../../../../firebase/firebase.config'

import Docs from './docs'

const firebaseApp = initializeApp(firebaseConfig)

export default {
  title: 'packages/serverless/firebase/messaging/useFirebaseMessaging',
  args: {
    show: null,
  },
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: () => <Docs />,
    },
  },
} as Meta

const Template = (args) => {
  return <FirebaseProvider firebaseApp={firebaseApp}>Hello</FirebaseProvider>
}

export const Example = Template.bind({})
