import React from 'react'

import { B, V } from '../../../storybook/ui'
import TestDataHookDashboard from '..'

import schema, { schemaFail } from './schema'

const successFunc = async () => {
  let result = await fetch('https://launchlibrary.net/1.2/launch/next/1')
  result = await result.json()
  return result
}

const errorFunc = async () => {
  let result = await fetch('http://swapi.co/api/people/1')
  result = await result.json()
  return result
}

export const SuccessValidation = () => {
  return <TestDataHookDashboard fetcher={successFunc} schema={schema} />
}

export const FailValidation = () => {
  return <TestDataHookDashboard fetcher={successFunc} schema={schemaFail} />
}

export const Success = () => {
  return <TestDataHookDashboard fetcher={successFunc} />
}

export const ErrorEx = () => {
  return <TestDataHookDashboard fetcher={errorFunc} />
}

const Variants = () => {
  return (
    <>
      <B title='successs - valid' style={{ width: '95vw' }}>
        <SuccessValidation />
      </B>
      <B title='successs - invalid' style={{ width: '95vw' }}>
        <FailValidation />
      </B>
      <B title='successs' style={{ width: '95vw' }}>
        <Success />
      </B>
      <B title='error' style={{ width: '95vw' }}>
        <ErrorEx />
      </B>
    </>
  )
}

export default ({ onlyBase }) =>
  V({
    dir: 'dataDisplay/TestDataHookDashboard',
    Variants,
    onlyBase,
  })
