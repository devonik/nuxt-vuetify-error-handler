# Nuxt vuetify error handler

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> This project provides a nuxt plugin with error handler that send errors to a vuetify v-snackbar component. 

> You are also able to open the v-snackbar by the exported nuxt plugin.
>
- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- ⛰ &nbsp;Nuxt 3 module
- 🚠 &nbsp;Vuetify 3 is used
- 🌲 &nbsp;Reusable and customizable v-snackbar config

## Quick Setup

1. Add `nuxt-vuetify-error-handler` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-vuetify-error-handler

# Using yarn
yarn add --dev nuxt-vuetify-error-handler

# Using npm
npm install --save-dev nuxt-vuetify-error-handler
```

2. Add `nuxt-vuetify-error-handler` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-vuetify-error-handler'
  ]
})
```

## Control the v-snackbar state
> The snackbar state is controled by a pinia store
1. The v-snackbar will be opened with predefined state when nuxt provides an error
2. You can manual open the v-snackbar via nuxtApp.$snackbar
Examples
```html
<template>
  <Snackbar></Snackbar>
</template>
<script setup lang="ts">
  // alternatively, you can also use it here
  const { $snackbar } = useNuxtApp()
  //color can be vuetify theme color, rgb oder and other hex code. For more see vuetify documentation
  $snackbar.showMessage({ timeout: 8000, text: 'notification', color = 'info' })
</script>
```
```html
<template>
  <Snackbar></Snackbar>
</template>
<script setup lang="ts">
  // alternatively, you can also use it here
  const { $snackbar } = useNuxtApp()
  $snackbar.showFeatureNotImplemented()
</script>
```

That's it! You can now use Nuxt vuetify error handler in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-vuetify-error-handler/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-vuetify-error-handler

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-vuetify-error-handler.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-vuetify-error-handler

[license-src]: https://img.shields.io/npm/l/nuxt-vuetify-error-handler.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-vuetify-error-handler
