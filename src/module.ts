import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addComponent,
} from "@nuxt/kit";

// Module options TypeScript inteface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-vuetify-error-handler",
    configKey: "vuetifyErrorHandler",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup() {
    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin-snackbar"));
    addPlugin(resolver.resolve("./runtime/plugin-error-handler"));
    addComponent({
      name: "Snackbar",
      filePath: resolver.resolve("./runtime/components/Snackbar"),
    });
  },
});
