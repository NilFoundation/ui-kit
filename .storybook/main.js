module.exports = {
  stories: [
    '../src/**/*.stories.tsx'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  // download bootstrap 3 css
  previewHead: (head) => (`
    ${head}
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.0/dist/css/bootstrap.min.css"
    />
  `)
}
