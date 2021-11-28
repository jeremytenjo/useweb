import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  PRIMARY_STORY,
} from '@storybook/addon-docs'

export default function ModalDocs() {
  // TODO create reusable storybook themes text component with title, description variants
  return (
    <>
      <Title />
      <Description>This is a modal</Description>
      <ArgsTable />
    </>
  )
}
