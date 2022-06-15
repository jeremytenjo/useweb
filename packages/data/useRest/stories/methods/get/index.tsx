import React, { useEffect } from 'react'
import firebase from 'firebase/app'

import { B } from '../../../../../storybook/ui'
import TestDataHookDashboard from '../../../../../dataDisplay/TestDataHookDashboard'
import useRest from '../../..'

export default function Get() {
  const all = useRest(`user/get`)
  const single = useRest(`user/get/2`)

  useEffect(() => {
    console.log('adfasdf')
    firebase.functions().useFunctionsEmulator(`http://localhost:5000`)
    const addMessage = firebase.functions().httpsCallable('addMessage')

    addMessage({ text: 'messageText' }).then((result) => {
      console.log(result)
    })
  }, [])

  return (
    <B title='Get'>
      <B title='all'>
        <TestDataHookDashboard dataHook={all} />
      </B>
      <B title='single'>
        <TestDataHookDashboard dataHook={single} />
      </B>
    </B>
  )
}
