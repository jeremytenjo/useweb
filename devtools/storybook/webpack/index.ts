import getPlugins from './plugins'

export default function StorybookWebpack(config) {
  config.plugins = getPlugins(config.plugins)

  return config
}
