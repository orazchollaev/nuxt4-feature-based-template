export default defineI18nLocale(() => ({
  home: {
    hero: {
      title: "Nuxt 4 Feature-Based Starter",
      subtitle: "Scalable architecture with integrated routing and hot reload",
      description:
        "Scalable Nuxt 4 architecture with feature-based structure and auto routing",
    },

    features: {
      featureBased: {
        title: "Feature-Based",
        desc: "Organize code by business domain, not file type",
      },
      componentPrefix: {
        title: "Component Prefix",
        desc: "Feature components auto-imported with prefix",
      },
      hotReload: {
        title: "Hot Reload",
        desc: "Add pages and components without restart",
      },
      typeSafe: {
        title: "Type-Safe",
        desc: "Full TypeScript support out of the box",
      },
      autoRouting: {
        title: "Auto Routing",
        desc: "Pages inside features become routes automatically",
      },
      autoImports: {
        title: "Auto Imports",
        desc: "Composables, stores and utils available globally",
      },
      i18n: {
        title: "i18n",
        desc: "Per-feature locale files, auto-namespaced by feature name",
      },
    },

    quickStart: {
      title: "Quick Start",
      hint: "Creates feature with components, stores, pages and routes",
    },

    structure: {
      title: "Structure",
    },

    usage: {
      title: "Usage",
      components: "Components — auto-imported with feature prefix",
      composables:
        "Composables & stores — available globally, no import needed",
      i18n: "i18n — feature-namespaced keys, no config needed",
      types: "Types — explicit import for clarity",
    },
  },
  layout: {
    nav: {
      home: "Home",
      todo: "Todo",
    },
    footer: {
      builtWith: "Built with",
      architecture: "Feature-Based Architecture",
    },
  },
}));
