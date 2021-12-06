import { B, V } from '../../../../storybook/ui'

const Variants = ({ Component: FormSchema }) => {
  const schema = {
    properties: {
      name: {
        type: 'string',
      },
      age: {
        type: 'number',
      },
      color: {
        enum: ['one', 'two', 'three'],
      },
      done: {
        type: 'boolean',
      },
      file: {
        type: 'string',
        format: 'data-url',
      },
    },
    required: ['name'],
  }

  const uiSchema = {
    'ui:order': ['age', 'name', 'color', 'done', 'file'],
    done: {
      'ui:widget': 'radio',
    },
    file: {
      'ui:options': { accept: '.png' },
    },
  }

  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <B title='default' background>
        <FormSchema schema={schema} uiSchema={uiSchema} onSubmit={handleSubmit} />
      </B>
    </>
  )
}

export default ({ onlyBase }) =>
  V({
    dir: 'input/Form/FormSchema',
    Variants,
    onlyBase,
  })
