import {
  Title,
  Description,
  Primary,
  ArgsTable,
  PRIMARY_STORY,
} from '@storybook/addon-docs'

export default function ModalDocs() {
  return (
    <>
      <Title />
      <Description>This is a modal</Description>
      <Primary />
      <ArgsTable story={PRIMARY_STORY} />
    </>
  )
}
