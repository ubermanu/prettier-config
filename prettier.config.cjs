const tryRequire = require('try-require')
const svelte = tryRequire.resolve('prettier-plugin-svelte')
const tailwind = tryRequire.resolve('prettier-plugin-tailwindcss')

/** @type {import('prettier').Options} */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  plugins: [
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('prettier-plugin-organize-imports'),
    require.resolve('prettier-plugin-css-order'),
    require.resolve('prettier-plugin-jsdoc'),
  ],
  overrides: [],
}

if (svelte) {
  config.plugins.push(svelte)
  config.overrides.push({ files: '*.svelte', options: { parser: 'svelte' } })
}

if (tailwind) {
  config.plugins.push(tailwind)
}

module.exports = config
