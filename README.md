# @ubermanu/prettier-config

This is my personal prettier config.

## Features

- No semicolons
- Single quotes
- 2 spaces
- 80 characters per line
- Trailing commas

### Plugins

- Svelte format
- Tailwind classes sorting
- CSS property sorting
- Import sorting
- Package.json sorting
- JSDoc formatting

## Install

```bash
pnpm i @ubermanu/prettier-config prettier -D
```

#### With Svelte

```bash
pnpm i prettier-plugin-svelte -D
```

#### With Tailwind

```bash
pnpm i prettier-plugin-tailwind -D
```

## Usage

In your `package.json`:

```json
{
  "prettier": "@ubermanu/prettier-config"
}
```
