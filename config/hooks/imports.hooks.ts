import { resolve } from "pathe";
import { readdirSync, existsSync, statSync } from "node:fs";
import { addImportsDir } from "@nuxt/kit";
import type { Nuxt } from "nuxt/schema";

const FEATURES_DIR = "./app/features";

// ---------------------------------------------------------------------------
// Scanner
// ---------------------------------------------------------------------------

function getFeatureDirs(featuresDir: string): string[] {
  if (!existsSync(featuresDir)) return [];
  try {
    return readdirSync(featuresDir).filter((f) =>
      statSync(resolve(featuresDir, f)).isDirectory(),
    );
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------------------
// Watch paths (for new file/feature detection)
// ---------------------------------------------------------------------------

export function getFeatureImportsWatchPaths(): string[] {
  const featuresDir = resolve(FEATURES_DIR);
  const paths: string[] = [];
  if (!existsSync(featuresDir)) return paths;

  const layers = ["composables", "stores", "utils"];

  try {
    for (const feature of getFeatureDirs(featuresDir)) {
      const featureDir = resolve(featuresDir, feature);
      for (const layer of layers) {
        const layerDir = resolve(featureDir, layer);
        if (existsSync(layerDir)) paths.push(`${layerDir}/**/*.{ts,js}`);
      }
    }
    // Catch newly created features
    for (const layer of layers) {
      paths.push(`${featuresDir}/*/${layer}/**/*.{ts,js}`);
    }
  } catch {
    // ignore
  }

  return paths;
}

// ---------------------------------------------------------------------------
// Setup
// ---------------------------------------------------------------------------

/**
 * Registers feature composables, stores and utils as Nuxt auto-imports.
 *
 * Uses addImportsDir instead of imports:extend so that Nuxt's HMR pipeline
 * watches the directories natively. This means:
 *
 *   - Export renamed inside existing file → picked up immediately, no restart
 *   - New file added                      → picked up immediately, no restart
 *   - File deleted                        → removed from import map on next HMR
 *
 * Convention:
 *   features/todo/composables/useTodo.ts   → useTodo()
 *   features/todo/stores/todo.store.ts     → useTodoStore()
 *   features/todo/utils/format.ts          → formatDate() etc.
 *
 * Types are intentionally excluded — import them explicitly:
 *   import type { Todo } from "~/features/todo/types/todo.types"
 */
export function setupFeatureImports(nuxt: Nuxt): void {
  const featuresDir = resolve(nuxt.options.rootDir, FEATURES_DIR);
  const layers = ["composables", "stores", "utils"];

  if (!existsSync(featuresDir)) {
    console.warn(`[feature-imports] Directory not found: ${featuresDir}`);
    return;
  }

  const features = getFeatureDirs(featuresDir);
  let registeredDirs = 0;

  for (const feature of features) {
    const featureDir = resolve(featuresDir, feature);

    for (const layer of layers) {
      const layerDir = resolve(featureDir, layer);
      if (!existsSync(layerDir)) continue;

      // addImportsDir registers the directory with Nuxt's unimport instance.
      // Nuxt watches these dirs natively — any export change (rename, add,
      // delete) is reflected in .nuxt/imports.d.ts on the next HMR cycle
      // without a server restart.
      addImportsDir(layerDir);
      registeredDirs++;
    }
  }

  // Also register future features via a hook — new features created with
  // create:feature are picked up after a restart (unavoidable since the
  // directory didn't exist when setup ran).
  nuxt.hook("builder:watch", (event, relativePath) => {
    if (event !== "addDir") return;
    const absolutePath = resolve(nuxt.options.rootDir, relativePath);
    if (!absolutePath.startsWith(featuresDir)) return;

    const isLayerDir = layers.some((l) => absolutePath.endsWith(`/${l}`));
    if (!isLayerDir) return;

    addImportsDir(absolutePath);
    // console.info(
    //   `[feature-imports] New layer directory registered: ${relativePath}`,
    // );
  });

  // console.info(
  //   `[feature-imports] Watching ${registeredDirs} director${registeredDirs === 1 ? "y" : "ies"} across ${features.length} feature(s)`,
  // );
}
