import setupComponentNaming from "./config/hooks/components";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  devServer: {
    port: 1010,
    host: "0.0.0.0",
  },

  modules: ["@pinia/nuxt"],

  components: [
    { path: "~/components" },
    {
      path: "~/features",
      pattern: "*/components/**/*.vue",
      pathPrefix: false,
    },
  ],

  hooks: {
    "components:extend": setupComponentNaming,
  },

  imports: {
    dirs: [
      "composables/**",
      "stores/**",
      "utils/**",
      "features/*/composables/**",
      "features/*/stores/**",
      "features/*/utils/**",
      "features/*/types/**",
    ],
  },

  css: ["~/assets/index.css"],
});
