import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    defaultName: 'Documentation'
  },
  webpackFinal: async (config) => {
    config!.resolve!.alias = {
      ...config!.resolve!.alias,
      '@': path.resolve(__dirname, '../src')
    }
    return config
  }
}
export default config
