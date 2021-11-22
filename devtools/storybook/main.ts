import webpack from './webpack'

export default {
  stories: ['../../packages/**/*.stories.@(js|jsx|ts|tsx|mdx))'],
  addons: ['@storybook/addon-docs', '@storybook/addon-controls'],
  webpackFinal: async (defaultConfig) => {
    return webpack(defaultConfig)
  },
}
