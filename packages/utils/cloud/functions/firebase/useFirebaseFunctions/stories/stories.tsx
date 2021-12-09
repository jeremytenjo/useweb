import React from 'react'
import { initializeApp } from 'firebase/app'
import { getFunctions } from 'firebase/functions'
import { Meta } from '@storybook/react'
import { FirebaseProvider } from '@useweb/use-firebase'
import useFirebaseFunctions from '../src'

import firebaseConfig from '../../../../../../../firebase/firebase.config'

import Docs from './docs.mdx'

const firebaseApp = initializeApp(firebaseConfig)
const functions = getFunctions()

export default {
  title: 'packages/Serverless/firebase/functions/useFirebaseFunctions',
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
    <FirebaseProvider firebaseApp={firebaseApp} functions={functions}>
      {args.children}
    </FirebaseProvider>
  )
}

const Examp = () => {
  const helloWorld = useFirebaseFunctions({ name: 'helloWorld' })

  return (
    <div>
      <button onClick={() => helloWorld.exec()}>execute</button>
      <p>Result</p>
      <div>{helloWorld?.result?.data?.hello}</div>
    </div>
  )
}

export const Example = Template.bind({})
Example.args = {
  children: <Examp />,
}
