const stories = require('./storiesList.cjs')

module.exports = {
  stories,
  framework: '@storybook/react',
  features: { emotionAlias: false, storyStoreV7: true },
  // https://storybook.js.org/docs/react/configure/images-and-assets#serving-static-files-via-storybook
  staticDirs: ['./public'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-interactions',
  ],
}
