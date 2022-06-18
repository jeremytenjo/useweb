//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from "react";

import {
  FirebaseFunctionTester,
  type FirebaseFunctionTesterProps,
} from "./component";
import Docs from "./FirebaseFunctionTester.docs";

const defaultArgs: FirebaseFunctionTesterProps = {
  name: "FirebaseFunctionTester",
};

export default {
  title: "FirebaseFunctionTester",
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
      <FirebaseFunctionTester {...args} />
    </>
  );
};

export const Default = {
  render: (args) => {
    return <Template {...args} />;
  },
};

// const variantArgs: FirebaseFunctionTesterProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
