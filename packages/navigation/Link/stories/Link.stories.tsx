//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from "react";

import { Link, type LinkProps } from "./component";

import Docs from "./Link.docs";

const defaultArgs: LinkProps = {
  name: "Link",
};

export default {
  title: "lib/components/Link",
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
      <Link {...args} />
    </>
  );
};

export const Default = {
  render: (args) => {
    return <Template {...args} />;
  },
};

// const variantArgs: LinkProps = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
