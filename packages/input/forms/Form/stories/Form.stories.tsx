//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from "react";

import { Form, type FormProps } from "./component";
import Docs from "./Form.docs";

const defaultArgs: FormProps = {
  name: "Form",
};

export default {
  title: "Form",
  args: defaultArgs,
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
  },
};

const Template = (args) => {
  return (
    <>
      <Form {...args} />
    </>
  );
};

export const Default = {
  render: (args) => {
    return <Template {...args} />;
  },
};

// const variantArgs: FormProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
