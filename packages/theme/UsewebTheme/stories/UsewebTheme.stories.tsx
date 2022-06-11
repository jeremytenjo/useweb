//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from "react";

import { UsewebTheme, type UsewebThemeProps } from "./component";
import Docs from "./UsewebTheme.docs";

const defaultArgs: UsewebThemeProps = {
  name: "UsewebTheme",
};

export default {
  title: "UsewebTheme",
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
    UsewebTheme
      {/* <UsewebTheme {...args} /> */}
    </>
  );
};

export const Default = {
  render: (args) => {
    return <Template {...args} />;
  },
};

// const variantArgs: UsewebThemeProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
