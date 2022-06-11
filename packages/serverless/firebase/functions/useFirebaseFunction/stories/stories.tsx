import React from 'react'
import { initializeApp } from 'firebase/app'
import { getFunctions } from 'firebase/functions'
import { Meta } from '@storybook/react'
import { FirebaseProvider } from '@useweb/use-firebase'

import useFirebaseFunction from '../src'
import ErrorMessage from '../../../../../dataDisplay/ErrorMessage'
import Donut from '../../../../../feedback/progress/Donut'
import TestFirebaseFunction from '../../TestFirebaseFunction'
import firebaseConfig from '../../../../../../firebase/firebase.config'

import Docs from './docs.mdx'

const firebaseApp = initializeApp(firebaseConfig)
const functions = getFunctions()

export default {
  title: 'packages/Serverless/Firebase/Functions/useFirebaseFunction',
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
    <FirebaseProvider
      firebaseConfig={firebaseConfig}
      firebaseApp={firebaseApp}
      envIsDev={process.env.NODE_ENV === 'development'}
      functions={functions}
    >
      {args.children}
    </FirebaseProvider>
  )
}

const Examp = () => {
  const helloWorld = useFirebaseFunction({ name: 'helloWorld' })

  return (
    <div>
      <button
        onClick={() =>
          helloWorld.exec({
            data: {
              name: 'jeremy',
            },
          })
        }
      >
        Execute
      </button>
      <br />
      <br />
      <p>Result:</p>
      <br />

      {helloWorld.loading && <Donut />}
      {helloWorld.result && <div>{helloWorld?.result?.hello}</div>}
      {helloWorld.error && <ErrorMessage error={helloWorld.error} />}
    </div>
  )
}

export const Example = Template.bind({})
Example.args = {
  children: <Examp />,
}
