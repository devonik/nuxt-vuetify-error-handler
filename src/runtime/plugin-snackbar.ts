import { defineNuxtPlugin } from "#app";
import { useSnackbarStore } from "./stores/snackbar";

declare module "#app" {
  interface NuxtApp {
    /**
     * This plugin contains functions to trigger vuetify snackbar
     * @param msg The message the snackbar shows
     */
    $snackbar(msg: string): {
      /**
       * This function triggers the snackbar with some options
       * @param timeout Define in milliseconds how long the snackbar is shown. Default is 8000
       * @param text Then text the snackbar shows. Default is "notification"
       * @param color The color style for the snackbar. See vuetify doc v-snackbar for more. The value can be a theme color or anything else. Default is "info"
       * @param closeText Then text for snackbar close action
       */
      showMessage(
        timeout: number,
        text: string,
        color: string,
        closeText: string
      ): SnackbarPayload;
      /**
       * This function triggers the snackbar with predefined options. Timeout = 8000, text = "Funktion noch nicht implementiert", color = "info", isVisible = true
       */
      showFeatureNotImplemented(): void;
    };
  }
}

export interface SnackbarPayload {
  timeout: number;
  text: string;
  color: string;
  isVisible: boolean;
  closeText: string;
}

export default defineNuxtPlugin((nuxtApp) => {
  const store = useSnackbarStore();
  return {
    provide: {
      snackbar: {
        showMessage({
          timeout = 8000,
          text = "notification",
          color = "info",
          closeText = "Close",
        }: SnackbarPayload) {
          store.showMessage({
            timeout,
            text,
            color,
            isVisible: true,
            closeText,
          });
        },
        showFeatureNotImplemented() {
          store.showMessage({
            timeout: 8000,
            text: "Funktion noch nicht implementiert",
            color: "info",
            isVisible: true,
            closeText: "Close",
          });
        },
      },
    },
  };
});
