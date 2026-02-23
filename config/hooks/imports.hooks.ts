import { resolve } from "pathe";
import { readdirSync, existsSync, statSync, readFileSync } from "node:fs";
import type { Nuxt } from "nuxt/schema";
import type { Import } from "unimport";

const FEATURES_DIR = "./app/features";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type ImportLayer = "composables" | "stores" | "utils";

interface FeatureImport {
  name: string;
  filePath: string;
  layer: ImportLayer;
  featureName: string;
}

// ---------------------------------------------------------------------------
// Parser
// ---------------------------------------------------------------------------

/**
 * Extracts runtime named exports from a .ts/.js file via regex.
 *
 * Handles:
 *   export const useFoo = ...
 *   export function useFoo() ...
 *   export async function useFoo() ...
 *   export class FooService ...
 *   export { useFoo, useBar }
 *
 * Deliberately skips:
 *   export type { ... }
 *   export interface ...
 *   export default
 */
function extractNamedExports(filePath: string): string[] {
  let src: string;
  try {
    src = readFileSync(filePath, "utf-8");
  } catch {
    return [];
  }

  const names = new Set<string>();

  // export const|let|var|function|async function|function*|class name
  const declRe =
    /^export\s+(?:async\s+)?(?:const|let|var|function\*?|class)\s+([A-Za-z_$][A-Za-z0-9_$]*)/gm;
  for (const m of src.matchAll(declRe) as any) names.add(m[1]);

  // export { foo, bar as baz } — but NOT export type { ... }
  const namedRe = /^export\s+(?!type[\s{])\{([^}]+)\}/gm;
  for (const m of src.matchAll(namedRe)) {
    for (const part of m[1]!.split(",")) {
      const alias = part
        .trim()
        .split(/\s+as\s+/)
        .pop()
        ?.trim();
      if (alias && alias !== "default") names.add(alias);
    }
  }

  return [...names];
}

// ---------------------------------------------------------------------------
// Scanner
// ---------------------------------------------------------------------------

function scanLayerDir(
  dir: string,
  featureName: string,
  layer: ImportLayer,
  acc: FeatureImport[],
): void {
  let entries: string[];
  try {
    entries = readdirSync(dir);
  } catch {
    return;
  }

  for (const entry of entries) {
    const fullPath = resolve(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursive — supports nested composables/stores/utils
      scanLayerDir(fullPath, featureName, layer, acc);
      continue;
    }

    if (!/\.(ts|js)$/.test(entry) || entry.endsWith(".d.ts")) continue;

    for (const name of extractNamedExports(fullPath)) {
      acc.push({ name, filePath: fullPath, layer, featureName });
    }
  }
}

function scanFeatureImports(): FeatureImport[] {
  const featuresDir = resolve(FEATURES_DIR);
  const imports: FeatureImport[] = [];

  if (!existsSync(featuresDir)) return imports;

  let features: string[];
  try {
    features = readdirSync(featuresDir);
  } catch {
    return imports;
  }

  for (const feature of features) {
    const featureDir = resolve(featuresDir, feature);
    if (!statSync(featureDir).isDirectory()) continue;

    for (const layer of ["composables", "stores", "utils"] as ImportLayer[]) {
      const layerDir = resolve(featureDir, layer);
      if (existsSync(layerDir)) scanLayerDir(layerDir, feature, layer, imports);
    }
  }

  return imports;
}

// ---------------------------------------------------------------------------
// Watch paths
// ---------------------------------------------------------------------------

export function getFeatureImportsWatchPaths(): string[] {
  const featuresDir = resolve(FEATURES_DIR);
  const paths: string[] = [];

  if (!existsSync(featuresDir)) return paths;

  const layers = ["composables", "stores", "utils"];

  try {
    const features = readdirSync(featuresDir);

    for (const feature of features) {
      const featureDir = resolve(featuresDir, feature);
      if (!statSync(featureDir).isDirectory()) continue;

      for (const layer of layers) {
        const layerDir = resolve(featureDir, layer);
        if (existsSync(layerDir)) paths.push(`${layerDir}/**/*.{ts,js}`);
      }
    }

    // Wildcard — picks up newly created features without restart
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
 * Convention:
 *   features/todo/composables/useTodo.ts   → useTodo()
 *   features/todo/stores/todo.store.ts     → useTodoStore()
 *   features/todo/utils/format.ts          → formatDate() etc.
 *
 * Types are intentionally excluded — import them explicitly:
 *   import type { Todo } from "~/features/todo/types/todo.types"
 *
 * Rename-safe: every dev server restart or file change triggers a full
 * re-scan, so stale names never linger in .nuxt/imports.d.ts.
 */
export function setupFeatureImports(nuxt: Nuxt): void {
  nuxt.hook("imports:extend", (imports) => {
    const featureImports = scanFeatureImports();
    const seenNames = new Map<string, string>();

    for (const fi of featureImports) {
      if (seenNames.has(fi.name)) {
        console.warn(
          `[feature-imports] Duplicate export "${fi.name}".\n` +
            `  Registered: ${seenNames.get(fi.name)}\n` +
            `  Skipping:   ${fi.filePath}`,
        );
        continue;
      }

      seenNames.set(fi.name, fi.filePath);
      imports.push({ name: fi.name, from: fi.filePath } as Import);
    }

    console.info(
      `[feature-imports] ${featureImports.length} export(s) registered ` +
        `(composables, stores, utils)`,
    );
  });
}
