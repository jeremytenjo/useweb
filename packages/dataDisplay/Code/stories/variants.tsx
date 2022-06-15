import React from 'react'

import { B, V } from '../../../storybook/ui'

const Variants = ({ Component: Code }) => {
  return (
    <>
      <B title='javascript'>
        <Code
          code={`import Hello from "react" 

const hello = <Hello />`}
        />
      </B>
      <B title='json'>
        <Code
          language='json'
          code={`[
  {
    id: 'tv-guide',
    name: 'TV Guide',
    logo: 'https://movies-series-guide.web.app/images/public/icon_152x152.png',
    contentTypes: [
      {
        id: 'articles',
        name: 'articles',
      },
    ],
  }]`}
        />
      </B>
    </>
  )
}

export default ({ onlyBase }) =>
  V({
    dir: 'dataDisplay/Code',
    Variants,
    onlyBase,
  })
