//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from "react";

import { Dialog, type DialogProps } from "./component";
import Docs from "./Dialog.docs";

const defaultArgs: DialogProps = {
  open: false
};

export default {
  title: "Feedback/Dialog",
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
      <Dialog {...args} />
    </>
  );
};

export const Default = {
  render: (args) => {
    return <Template {...args} />;
  },
};

// const variantArgs: DialogProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
