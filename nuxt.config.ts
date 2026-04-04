import {
  featureBasedPagesHook,
  getFeaturePagesWatchPaths,
  getFeatureComponentsWatchPaths,
  getFeatureImportsWatchPaths,
  setupFeatureComponents,
  setupFeatureImports,
  setupFeatureI18n,
  getFeatureI18nWatchPaths,
} from "./config/hooks/index"

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  devServer: {
    port: 1010,
    host: "0.0.0.0",
  },

  modules: [
    function featureI18nModule(_options, nuxt) {
      setupFeatureI18n(nuxt)
    },

    function featureComponentsModule(_options, nuxt) {
      setupFeatureComponents(nuxt)
    },

    function featureImportsModule(_options, nuxt) {
      setupFeatureImports(nuxt)
    },

    "@nuxtjs/i18n",
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@vercel/analytics",
  ],

  i18n: {
    defaultLocale: "en",
    strategy: "no_prefix",

    locales: [
      { file: "en.ts", code: "en", language: "en-US", name: "English" },
      { file: "fr.ts", code: "fr", language: "fr-FR", name: "French" },
    ],

    langDir: "locales",

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_locale",
      redirectOn: "root",
      fallbackLocale: "en",
    },

    vueI18n: "./i18n/i18n.config.ts",
  },

  css: ["~/assets/index.css"],

  watch: [
    ...getFeaturePagesWatchPaths(),
    ...getFeatureComponentsWatchPaths(),
    ...getFeatureImportsWatchPaths(),
    ...getFeatureI18nWatchPaths(),
  ],

  hooks: {
    "pages:extend": featureBasedPagesHook,
  },

  vite: {
    optimizeDeps: {
      include: ["vue-shortcut-manager"],
    },
  },
})
