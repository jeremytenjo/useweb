//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from "react";

import { Modal, type ModalProps } from "./component";
import Docs from "./Modal.docs";

const defaultArgs: ModalProps = {
  open: true,
};

export default {
  title: "Modal",
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
      <Modal {...args} />
    </>
  );
};

export const Default = {
  render: (args) => {
    return <Template {...args} />;
  },
};

// const variantArgs: ModalProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
