import React from 'react'
import {
  Title,
  Description,
  Primary,
  ArgsTable,
  PRIMARY_STORY,
} from '@storybook/addon-docs'

// https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
export default function Docs() {
  return (
    <>
      <Title />
      <Description>This is a Textfield</Description>
      <Primary />
      <ArgsTable story={PRIMARY_STORY} />
    </>
  )
}
