import {
  featureBasedPagesHook,
  getFeaturePagesWatchPaths,
  getFeatureComponentsWatchPaths,
  getFeatureImportsWatchPaths,
  setupFeatureComponents,
  setupFeatureImports,
} from "./config/hooks/index";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  devServer: {
    port: 1010,
    host: "0.0.0.0",
  },

  modules: [
    "@pinia/nuxt",

    function featureComponentsModule(_options, nuxt) {
      setupFeatureComponents(nuxt);
    },

    function featureImportsModule(_options, nuxt) {
      setupFeatureImports(nuxt);
    },
  ],

  css: ["~/assets/index.css"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  watch: [
    ...getFeaturePagesWatchPaths(),
    ...getFeatureComponentsWatchPaths(),
    ...getFeatureImportsWatchPaths(),
  ],

  hooks: {
    "pages:extend": featureBasedPagesHook,
  },
});
