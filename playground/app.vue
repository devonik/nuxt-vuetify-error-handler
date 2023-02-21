<template>
  <div id="#app">
    Nuxt module playground!
    <Snackbar />
  </div>
</template>

<script setup>
//Auto imports not available here so we import the util manually. See https://nuxt.com/docs/guide/concepts/auto-imports
import { createError } from '#imports'
throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
</script>
