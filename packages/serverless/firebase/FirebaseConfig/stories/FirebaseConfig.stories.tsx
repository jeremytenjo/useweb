//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from "react";

import { FirebaseConfig, type FirebaseConfigProps } from "./component";
import Docs from "./FirebaseConfig.docs";

const defaultArgs: FirebaseConfigProps = {
  name: "FirebaseConfig",
};

export default {
  title: "FirebaseConfig",
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
      <FirebaseConfig {...args} />
    </>
  );
};

export const Default = {
  render: (args) => {
    return <Template {...args} />;
  },
};

// const variantArgs: FirebaseConfigProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
