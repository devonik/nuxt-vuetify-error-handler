import { defineNuxtPlugin } from "#app";
import { useSnackbarStore } from "./stores/snackbar";

declare module "#app" {
  interface NuxtApp {
    /**
     * This plugin contains functions to trigger vuetify snackbar
     * @param msg The message the snackbar shows
     */
    $snackbar: {
      /**
       * This function triggers the snackbar with some options
       * @param payload Object to control snackbar options {@link SnackbarPayload}
       */
      showMessage(payload: SnackbarPayload): void;
      /**
       * This function triggers the snackbar with predefined options. Timeout = 8000, text = "Funktion noch nicht implementiert", color = "info", isVisible = true
       */
      showFeatureNotImplemented(): void;
    };
  }
}

export interface SnackbarPayload {
  //Then text the snackbar shows. Default is "notification"
  text: string;
  //Optional. Define in milliseconds how long the snackbar is shown. Default is 8000
  timeout?: number;
  //Optional. The color style for the snackbar. See vuetify doc v-snackbar for more. The value can be a theme color or anything else. Default is "info"
  color?: string;
  isVisible?: boolean;
  //Optional. Then text for snackbar close action
  closeText?: string;
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
