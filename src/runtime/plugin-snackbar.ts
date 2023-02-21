import { defineNuxtPlugin } from '#app'
import { useSnackbarStore } from "./stores/snackbar";

export default defineNuxtPlugin((nuxtApp) => {
  const store = useSnackbarStore();
    return {
      provide: {
        snackbar: {
            showMessage({ timeout = 8000, text = 'notification', color = 'info' }) {
                store.showMessage({ timeout, text, color, isVisible: true })
              },
              showFeatureNotImplemented(){
                store.showMessage({
                    timeout: 8000,
                  text: 'Funktion noch nicht implementiert',
                  color: 'info',
                  isVisible: true
                })
            },
        }
      }
    }
})
