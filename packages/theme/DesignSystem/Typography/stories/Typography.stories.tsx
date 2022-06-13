//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from "react";

import { Typography, type TypographyProps } from "./component";
import Docs from "./Typography.docs";

const defaultArgs: TypographyProps = {
  name: "Typography",
};

export default {
  title: "Typography",
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
      <Typography {...args} />
    </>
  );
};

export const Default = {
  render: (args) => {
    return <Template {...args} />;
  },
};

// const variantArgs: TypographyProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
