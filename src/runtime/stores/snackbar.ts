import { defineStore } from 'pinia'

function defaultOptions() {
    return {
        isVisible: false,
        timeout: 8000,
        text: 'info',
        color: 'notification',
    }
}
export const state = () => ({
    ...defaultOptions(),
})

interface State {
    isVisible: boolean | null,
    timeout: number,
    text: string,
    color: string,
}

export const useSnackbarStore = defineStore('snackbar', {
    state: (): State => ({
        ...defaultOptions(),
    }),
    actions: {
        async showMessage(payload: State) {
            if (payload.timeout) this.timeout = payload.timeout
            else this.timeout = defaultOptions().timeout
            this.text = payload.text
            this.color = payload.color
            this.isVisible = true
        }
    }
})
  