const tryRequire = require('try-require')
const svelte = tryRequire.resolve('prettier-plugin-svelte')

const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  plugins: [],
  pluginSearchDirs: ['.'],
  overrides: [],
}

if (svelte) {
  config.plugins.push(svelte)
  config.overrides.push({ files: '*.svelte', options: { parser: 'svelte' } })
}

module.exports = config
