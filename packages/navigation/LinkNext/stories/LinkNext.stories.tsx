//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from "react";

import { LinkNext, type LinkNextProps } from "./component";
import Docs from "./LinkNext.docs";

const defaultArgs: LinkNextProps = {
  name: "LinkNext",
};

export default {
  title: "LinkNext",
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
      <LinkNext {...args} />
    </>
  );
};

export const Default = {
  render: (args) => {
    return <Template {...args} />;
  },
};

// const variantArgs: LinkNextProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
