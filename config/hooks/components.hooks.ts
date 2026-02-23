import { resolve } from "pathe";
import { readdirSync, existsSync, statSync } from "node:fs";
import type { Nuxt } from "nuxt/schema";

const FEATURES_DIR = "./app/features";

interface FeatureComponent {
  featureName: string;
  componentName: string;
  pascalName: string;
  filePath: string;
}

/**
 * Converts a filename to PascalCase component name.
 * e.g. "todo-item.vue" → "TodoItem"
 *      "MyComponent.vue" → "MyComponent"
 */
function toPascalCase(str: string): string {
  return str
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

/**
 * Scans all feature component directories and returns component metadata.
 * Components inside features/[name]/components/ will be registered as:
 *   FTodoItem → <f-todo-item />
 *   FBlogCard → <f-blog-card />
 */
function scanFeatureComponents(): FeatureComponent[] {
  const featuresDir = resolve(FEATURES_DIR);
  const components: FeatureComponent[] = [];

  if (!existsSync(featuresDir)) {
    return components;
  }

  try {
    const features = readdirSync(featuresDir);

    for (const feature of features) {
      const featureDir = resolve(featuresDir, feature);

      if (!statSync(featureDir).isDirectory()) continue;

      const componentsDir = resolve(featureDir, "components");
      if (!existsSync(componentsDir)) continue;

      scanComponentsRecursive(componentsDir, feature, components);
    }
  } catch (error) {
    console.error("[feature-components] Failed to scan:", error);
  }

  return components;
}

/**
 * Recursively scans a components directory to support nested components.
 * e.g. components/ui/Button.vue → FTodoUiButton
 */
function scanComponentsRecursive(
  dir: string,
  featureName: string,
  components: FeatureComponent[],
  prefix: string = "",
): void {
  const entries = readdirSync(dir);

  for (const entry of entries) {
    const fullPath = resolve(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      const nestedPrefix = prefix ? `${prefix}-${entry}` : entry;
      scanComponentsRecursive(fullPath, featureName, components, nestedPrefix);
      continue;
    }

    if (!entry.endsWith(".vue")) continue;

    const rawName = entry.replace(".vue", "");
    const nameWithPrefix = prefix ? `${prefix}-${rawName}` : rawName;
    const featurePascal = toPascalCase(featureName);
    const componentPascal = toPascalCase(nameWithPrefix);

    // Final registered name: F + FeatureName + ComponentName
    // e.g. FTodoItem, FBlogCard, FUserProfileAvatar
    const pascalName = `F${featurePascal}${componentPascal}`;

    components.push({
      featureName,
      componentName: nameWithPrefix,
      pascalName,
      filePath: fullPath,
    });
  }
}

/**
 * Returns glob watch paths for all feature component directories.
 * Enables HMR when new components are added/removed.
 */
export function getFeatureComponentsWatchPaths(): string[] {
  const featuresDir = resolve(FEATURES_DIR);
  const watchPaths: string[] = [];

  if (!existsSync(featuresDir)) {
    return watchPaths;
  }

  try {
    const features = readdirSync(featuresDir);

    for (const feature of features) {
      const featureDir = resolve(featuresDir, feature);
      if (!statSync(featureDir).isDirectory()) continue;

      const componentsDir = resolve(featureDir, "components");
      if (!existsSync(componentsDir)) continue;

      watchPaths.push(`${componentsDir}/**/*.vue`);
    }

    // Also watch for new features being created
    watchPaths.push(`${featuresDir}/*/components/**/*.vue`);
  } catch (error) {
    console.error("[feature-components] Failed to get watch paths:", error);
  }

  return watchPaths;
}

/**
 * Registers the feature-based component auto-import hook into Nuxt.
 *
 * Components in features/[name]/components/ are registered with the prefix F:
 *   features/todo/components/Item.vue       → <f-todo-item />
 *   features/todo/components/ui/Button.vue  → <f-todo-ui-button />
 *   features/blog/components/Card.vue       → <f-blog-card />
 *
 * Usage in nuxt.config.ts:
 *   import { setupFeatureComponents } from "./config/hooks/components.hooks"
 *   export default defineNuxtConfig({
 *     hooks: {
 *       "components:extend": (components) => { ... } // don't use this
 *     }
 *   })
 *   // Instead call setupFeatureComponents(nuxt) inside a module or use the
 *   // nuxt hooks approach below.
 */
export function setupFeatureComponents(nuxt: Nuxt): void {
  nuxt.hook("components:extend", (components) => {
    const featureComponents = scanFeatureComponents();

    for (const fc of featureComponents) {
      // Check for duplicate pascal names to warn early
      const existing = components.find((c) => c.pascalName === fc.pascalName);
      if (existing) {
        console.warn(
          `[feature-components] Duplicate component name "${fc.pascalName}" detected.\n` +
            `  Existing: ${existing.filePath}\n` +
            `  Skipping: ${fc.filePath}`,
        );
        continue;
      }

      components.push({
        pascalName: fc.pascalName,
        // kebab-case for template usage: FTodoItem → f-todo-item
        kebabName: fc.pascalName
          .replace(
            /([A-Z])/g,
            (m, l, o) => (o > 0 ? "-" : "") + l.toLowerCase(),
          )
          .replace(/^-/, ""),
        export: "default",
        filePath: fc.filePath,
        shortPath: fc.filePath,
        chunkName: `components/${fc.pascalName}`,
        prefetch: false,
        preload: false,
        mode: "all",
        global: false,
      } as any);
    }

    if (featureComponents.length > 0) {
      // console.info(
      //   `[feature-components] Registered ${featureComponents.length}`,
      // );
    }
  });
}
