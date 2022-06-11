import React from 'react'
// import { storiesOf } from '@storybook/react'

import B from '../../../../storybook/variationBlock/index'
import useFetch from '../src/index'

export default {}
const GET = () => {
  const url = 'http://dummy.restapiexample.com/api/v1/employees'
  const { request, response, fetching, error } = useFetch({
    url,
    method: 'get',
  })
  const req = () => request()

  return (
    <B title='GET'>
      <button onClick={req}>fetch</button>
      {fetching && 'fetching...'}
      {response && ' got response'}
      {error && ' got error'}
    </B>
  )
}

const Aborted = () => {
  const url = 'http://dummy.restapiexample.com/api/v1/employees'
  const { request, response, fetching, error, abort } = useFetch({
    url,
    method: 'get',
  })

  const req = () => request()
  const abortFetch = () => abort()

  console.log({ response, fetching, error })

  return (
    <B title='Aborted'>
      <button onClick={req}>fetch</button>
      <button onClick={abortFetch}>abort</button>
      {fetching && 'fetching...'}
      {response && ' got response'}
      {error && ' got error'}
    </B>
  )
}

const Dynamic = () => {
  const { request, response, fetching, error } = useFetch({ method: 'get' })
  const req = () => request({ url: 'http://dummy.restapiexample.com/api/v1/employees' })

  console.log(response)

  return (
    <B title='Dynamic url'>
      <button onClick={req}>fetch</button>
      {fetching && 'fetching...'}
      {response && ' got response'}
      {error && ' got error'}
    </B>
  )
}

const POST = () => {
  // Working but have to replace url
  const url = 'http://dummy.restapiexample.com/api/v1/create '
  const body = { name: 'test', salary: '123', age: '23' }
  const { request, response, fetching, error } = useFetch({
    url,
    method: 'post',
  })
  const req = () => request({ body })

  return (
    <B title='POST'>
      <button onClick={req}>fetch</button>
      {fetching && ' posting...'}
      {response && ' posted'}
      {error && ` got error`}
    </B>
  )
}

const Variations = () => (
  <>
    <GET />
    <Aborted />
    <Dynamic />
    <POST />
  </>
)

// storiesOf('Lib/utils/Fetching/useFetch', module).add('variations', () => <Variations />)
