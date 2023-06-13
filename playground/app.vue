<template>
  <div id="#app">
    Nuxt module playground!
    <Snackbar />
    <v-btn
      @click="$snackbar.showMessage({
        timeout: 8000,
        text: 'info notification',
        color: 'info',
      })"
    >
      Show info snackbar
    </v-btn>
    <v-btn
      @click="$snackbar.showMessage({
        timeout: 8000,
        text: 'warning notification',
        color: 'warning',
      })"
    >
      Show warn snackbar
    </v-btn>
    <v-btn
      @click="$snackbar.showMessage({
        timeout: 8000,
        text: 'error notification',
        color: 'error',
      })"
    >
      Show error snackbar
    </v-btn>
  </div>
</template>

<script setup>
//Auto imports not available here so we import the util manually. See https://nuxt.com/docs/guide/concepts/auto-imports
import { createError } from '#imports'
throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
</script>
