
        import React from 'react'
        import { Meta } from '@storybook/react'

        import Docs from './docs'
        import { UseFirebase } from './component'

        export default {
          title: 'packages/namethisfolder/UseFirebase',
          component: UseFirebase,
          // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
          parameters: {
            docs: {
              page: () => <Docs />,
            },
          },
        } as Meta

        const Template = (args) => {
          return (
            <UseFirebase {...args} />
          )
        }

        export const Example = Template.bind({})
        Example.args = {}