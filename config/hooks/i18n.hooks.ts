import { resolve } from "pathe"
import { readdirSync, existsSync, statSync } from "node:fs"
import type { Nuxt } from "nuxt/schema"

const FEATURES_DIR = "./app/features"

interface FeatureLocale {
  featureName: string
  lang: string
  fileName: string
  localesDir: string
}

/**
 * Scans all feature locale directories and returns locale metadata.
 * Locale files inside features/[name]/locales/ will be namespaced as:
 *   features/todo/locales/tr.ts  → t('todo.*')
 *   features/blog/locales/en.ts  → t('blog.*')
 */
function scanFeatureLocales(): FeatureLocale[] {
  const featuresDir = resolve(FEATURES_DIR)
  const locales: FeatureLocale[] = []

  if (!existsSync(featuresDir)) {
    return locales
  }

  try {
    const features = readdirSync(featuresDir)

    for (const feature of features) {
      const featureDir = resolve(featuresDir, feature)
      if (!statSync(featureDir).isDirectory()) continue

      const localesDir = resolve(featureDir, "locales")
      if (!existsSync(localesDir)) continue

      for (const fileName of readdirSync(localesDir)) {
        if (!fileName.endsWith(".ts")) continue

        locales.push({
          featureName: feature,
          lang: fileName.replace(".ts", ""),
          fileName,
          localesDir,
        })
      }
    }
  } catch (error) {
    console.error("[feature-i18n] Failed to scan:", error)
  }

  return locales
}

/**
 * Returns watch paths for all feature locale directories.
 * Enables HMR when new locale files are added/removed.
 */
export function getFeatureI18nWatchPaths(): string[] {
  const featuresDir = resolve(FEATURES_DIR)
  const watchPaths: string[] = []

  if (!existsSync(featuresDir)) return watchPaths

  try {
    const features = readdirSync(featuresDir)

    for (const feature of features) {
      const featureDir = resolve(featuresDir, feature)
      if (!statSync(featureDir).isDirectory()) continue

      const localesDir = resolve(featureDir, "locales")
      if (!existsSync(localesDir)) continue

      watchPaths.push(`${localesDir}/**/*.ts`)
    }

    watchPaths.push(`${featuresDir}/*/locales/**/*.ts`)
  } catch (error) {
    console.error("[feature-i18n] Failed to get watch paths:", error)
  }

  return watchPaths
}

/**
 * Registers feature-based i18n locales into @nuxtjs/i18n.
 *
 * Each feature locale file must export a namespaced object:
 *   // features/todo/locales/tr.ts
 *   export default {
 *     todo: {
 *       name: 'Görevler',   // → t('todo.name')
 *       addItem: 'Ekle',    // → t('todo.addItem')
 *     }
 *   }
 *
 * Each feature's locales/ directory is registered as its own langDir.
 * This ensures Vite resolves file paths correctly for HMR — no wrapper
 * files are generated, no .nuxt/ pollution.
 *
 * IMPORTANT: Call this before @nuxtjs/i18n in nuxt.config.ts modules[]:
 *
 *   modules: [
 *     function featureI18nModule(_options, nuxt) {
 *       setupFeatureI18n(nuxt);   // ← before
 *     },
 *     "@nuxtjs/i18n",             // ← after
 *   ]
 */
export function setupFeatureI18n(nuxt: Nuxt): void {
  nuxt.hook("i18n:registerModule", (register) => {
    const featureLocales = scanFeatureLocales()

    if (featureLocales.length === 0) return

    // Group by feature — each feature gets its own register() call
    // with langDir pointing directly to features/[name]/locales/.
    const byFeature = featureLocales.reduce(
      (acc, item) => {
        ;(acc[item.featureName] ??= []).push(item)
        return acc
      },
      {} as Record<string, FeatureLocale[]>
    )

    for (const [featureName, locales] of Object.entries(byFeature)) {
      const { localesDir } = locales[0]

      const seen = new Set<string>()
      const localeEntries: { code: string; file: string }[] = []

      for (const { lang, fileName } of locales) {
        if (seen.has(lang)) {
          console.warn(`[feature-i18n] Duplicate locale "${featureName}/${lang}" — skipping`)
          continue
        }
        seen.add(lang)

        localeEntries.push({ code: lang, file: fileName })
      }

      register({
        langDir: localesDir,
        locales: localeEntries,
      })
    }
  })
}
