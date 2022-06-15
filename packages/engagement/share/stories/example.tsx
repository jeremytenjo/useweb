import React, { Fragment, useState } from 'react'

import share from '../src'

const ShareMockData = {
  title: 'My awesome post!',
  text: 'This post may or may not contain the answer to the universe',
  url: window.location.href,
}

const ShareExample = () => {
  const [resMsg, setresMsg] = useState('')

  const useShareFun = async () => {
    const { error, success } = await share(ShareMockData)

    if (success) setresMsg('Share Successful')
    if (error) setresMsg(error)
  }

  return (
    <Fragment>
      <button onClick={useShareFun}>Share this</button>
      <br />
      <br />
      {resMsg}
    </Fragment>
  )
}

export default ShareExample
