import {
  featureBasedPagesHook,
  getFeaturePagesWatchPaths,
} from "./config/hooks/pages.hooks";

import {
  setupFeatureComponents,
  getFeatureComponentsWatchPaths,
} from "./config/hooks/components.hooks";

import {
  setupFeatureImports,
  getFeatureImportsWatchPaths,
} from "./config/hooks/imports.hooks";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  devServer: {
    port: 1010,
    host: "0.0.0.0",
  },

  modules: [
    "@pinia/nuxt",

    // Feature component auto-import: <f-todo-item /> etc.
    function featureComponentsModule(_options, nuxt) {
      setupFeatureComponents(nuxt);
    },

    // Feature value/type auto-import: useTodoStore, Todo, etc.
    function featureImportsModule(_options, nuxt) {
      setupFeatureImports(nuxt);
    },
  ],

  css: ["~/assets/index.css"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  // Tüm feature dosyalarını watch et — rename/create/delete'de HMR tetiklenir
  watch: [
    ...getFeaturePagesWatchPaths(),
    ...getFeatureComponentsWatchPaths(),
    ...getFeatureImportsWatchPaths(),
  ],

  hooks: {
    "pages:extend": featureBasedPagesHook,
  },
});
