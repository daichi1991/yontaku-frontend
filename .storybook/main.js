module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/components/**/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app'
  ],
  webpackFinal(config) {
    delete config.resolve.alias['emotion-theming']
    delete config.resolve.alias['@emotion/styled']
    delete config.resolve.alias['@emotion/core']
    return config
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  }
}
