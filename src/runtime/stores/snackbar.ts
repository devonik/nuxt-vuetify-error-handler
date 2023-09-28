import { defineStore } from "pinia";
import type { SnackbarPayload } from "../module";

function defaultOptions() {
  return {
    isVisible: false,
    timeout: 8000,
    text: "info",
    color: "notification",
    closeText: "Close",
  };
}
export const state = () => ({
  ...defaultOptions(),
});

export const useSnackbarStore = defineStore("snackbar", {
  state: (): SnackbarPayload => ({
    ...defaultOptions(),
  }),
  actions: {
    async showMessage(payload: SnackbarPayload) {
      if (payload.timeout) this.timeout = payload.timeout;
      else this.timeout = defaultOptions().timeout;
      this.text = payload.text;
      this.color = payload.color;
      this.isVisible = true;
      this.closeText = payload.closeText;
    },
  },
});
