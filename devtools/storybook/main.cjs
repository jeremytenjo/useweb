const stories = require('./storiesList.cjs')

module.exports = {
  stories,
  // https://storybook.js.org/docs/react/configure/images-and-assets#serving-static-files-via-storybook
  staticDirs: ['./public'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
  ],
  features: { emotionAlias: false },
}
