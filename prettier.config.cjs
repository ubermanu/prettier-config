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
    'prettier-plugin-packagejson',
    'prettier-plugin-organize-imports',
    'prettier-plugin-css-order',
    'prettier-plugin-jsdoc',
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
