import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    nuxtApp.$snackbar.showMessage({ timeout: 10000, text: error, color: 'error' })
  }
})