//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from "react";

import { IconButton, type IconButtonProps } from "./component";
import Docs from "./IconButton.docs";

const defaultArgs: IconButtonProps = {
  name: "IconButton",
  children: <>IconButton</>
};

export default {
  title: "Input/IconButton",
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
      <IconButton {...args} />
    </>
  );
};

export const Default = {
  render: (args) => {
    return <Template {...args} />;
  },
};

// const variantArgs: IconButtonProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
