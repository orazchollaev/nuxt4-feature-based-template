import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt({
  rules: {
    // ── Vue ───────────────────────────────────────────────────────────────
    "vue/multi-word-component-names": "off", // feature pages are single-word
    "vue/no-multiple-template-root": "off", // Nuxt layouts use multiple roots
    "vue/require-default-prop": "off", // TypeScript handles this
    "vue/no-v-html": "warn", // allow but warn
    "vue/block-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],
    "vue/define-macros-order": [
      "error",
      {
        order: ["defineOptions", "defineProps", "defineEmits", "defineSlots", "defineModel"],
      },
    ],
    "vue/block-lang": [
      "error",
      {
        script: { lang: "ts" }, // enforce TypeScript in all <script> blocks
      },
    ],
    "vue/no-unused-vars": "error",
    "vue/prefer-separate-static-class": "error",
    "vue/no-useless-v-bind": "error",
    "vue/padding-line-between-blocks": ["error", "always"],

    // ── TypeScript ────────────────────────────────────────────────────────
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",

    // ── General ───────────────────────────────────────────────────────────
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    "prefer-const": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-template": "error",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
        },
      },
    ],
  },
})
