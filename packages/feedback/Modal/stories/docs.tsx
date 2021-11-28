import {
  Title,
  Description,
  Primary,
  ArgsTable,
  PRIMARY_STORY,
} from '@storybook/addon-docs'

import Modal from '../src'

export default function ModalDocs() {
  // TODO create reusable storybook themes text component with title, description variants
  return (
    <>
      <Title />
      <Description>This is a modal</Description>
      <Primary />
      <ArgsTable story={PRIMARY_STORY} />
    </>
  )
}
