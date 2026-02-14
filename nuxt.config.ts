import {
  featureBasedPagesHook,
  getFeaturePagesWatchPaths,
} from "./config/hooks/pages.hooks";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  devServer: {
    port: 1010,
    host: "0.0.0.0",
  },

  modules: ["@pinia/nuxt"],
  css: ["~/assets/index.css"],

  watch: [...getFeaturePagesWatchPaths()],

  hooks: {
    "pages:extend": featureBasedPagesHook,
  },
});
