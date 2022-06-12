//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from "react";

import { LinearProgress, type LinearProgressProps } from "./component";
import Docs from "./LinearProgress.docs";

const defaultArgs: LinearProgressProps = {
  sx: { width: '100%', mb: 2 },

};

export default {
  title: "LinearProgress",
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
      <LinearProgress {...args} />
    </>
  );
};

export const Default = {
  render: (args) => {
    return <Template {...args} />;
  },
};

// const variantArgs: LinearProgressProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
