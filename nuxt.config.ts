// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  devServer: {
    port: 1010,
    host: "0.0.0.0",
  },

  modules: ["@pinia/nuxt"],
});
