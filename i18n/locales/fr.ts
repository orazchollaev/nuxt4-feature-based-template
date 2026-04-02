export default defineI18nLocale(() => ({
  home: {
    hero: {
      title: "Starter Nuxt 4 basé sur les fonctionnalités",
      subtitle:
        "Architecture évolutive avec structure orientée fonctionnalités, routage automatique et i18n par feature.",
      description:
        "Architecture Nuxt 4 évolutive avec structure orientée fonctionnalités et routage automatique",
    },

    features: {
      title: "Fonctionnalités",
      featureBased: {
        title: "Basé sur les fonctionnalités",
        desc: "Organisez le code par domaine métier et non par type de fichier",
      },
      componentPrefix: {
        title: "Préfixe des composants",
        desc: "Composants auto-importés avec préfixe de feature",
      },
      hotReload: {
        title: "Hot Reload",
        desc: "Ajoutez des pages et composants sans redémarrage",
      },
      typeSafe: {
        title: "Typé et sécurisé",
        desc: "Support TypeScript complet prêt à l'emploi",
      },
      autoRouting: {
        title: "Routage automatique",
        desc: "Les pages dans les features deviennent des routes automatiquement",
      },
      autoImports: {
        title: "Imports automatiques",
        desc: "Composables, stores et utils disponibles globalement",
      },
      i18n: {
        title: "i18n",
        desc: "Fichiers de locale par feature, nommés automatiquement",
      },
    },

    quickStart: {
      title: "Démarrage rapide",
      hint: "Crée une feature avec composants, stores, pages et routes.",
    },

    structure: {
      title: "Structure",
      desc: "Toutes les features se trouvent dans app/features/. Chacune est un module autonome.",
    },

    usage: {
      title: "Utilisation",
      components: "Composants — auto-importés avec préfixe de feature",
      composables: "Composables & stores — disponibles globalement sans import",
      i18n: "i18n — clés avec namespace par feature, sans configuration",
      types: "Types — import explicite pour plus de clarté",
    },
  },

  layout: {
    nav: {
      home: "Accueil",
      todo: "Tâches",
    },
    footer: {
      builtWith: "Développé avec",
      architecture: "Architecture basée sur les fonctionnalités",
    },
  },
}))
