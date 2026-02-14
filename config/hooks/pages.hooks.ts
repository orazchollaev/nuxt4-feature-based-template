import { resolve } from "pathe";
import { readdirSync, existsSync, statSync } from "node:fs";
import type { NuxtPage } from "nuxt/schema";

const FEATURES_DIR = "./app/features";

function scanFeaturePages(): NuxtPage[] {
  const featuresDir = resolve(FEATURES_DIR);
  const pages: NuxtPage[] = [];

  if (!existsSync(featuresDir)) {
    return pages;
  }

  try {
    const features = readdirSync(featuresDir);

    for (const feature of features) {
      const featureDir = resolve(featuresDir, feature);

      if (!statSync(featureDir).isDirectory()) continue;

      const pagesDir = resolve(featureDir, "pages");
      if (!existsSync(pagesDir)) continue;

      const files = readdirSync(pagesDir);

      for (const file of files) {
        const fullPath = resolve(pagesDir, file);

        if (!file.endsWith(".vue")) continue;
        if (statSync(fullPath).isDirectory()) continue;

        const pageName = file.replace(".vue", "");

        const routeSegment =
          pageName === "index"
            ? ""
            : "/" +
              pageName.replace(/\[(.+?)\]/g, ":$1").replace(/\.\.\./g, "*");

        pages.push({
          name: `${feature}-${pageName}`,
          path: `/${feature}${routeSegment}`,
          file: fullPath,
        });
      }
    }
  } catch (error) {
    console.error("Failed to scan feature pages:", error);
  }

  return pages;
}

export const featureBasedPagesHook = async (pages: NuxtPage[]) => {
  const featurePages = scanFeaturePages();
  pages.push(...featurePages);
};

export function getFeaturePagesWatchPaths(): string[] {
  const featuresDir = resolve(FEATURES_DIR);
  const watchPaths: string[] = [];

  if (!existsSync(featuresDir)) {
    console.warn("Features directory not found:", featuresDir);
    return watchPaths;
  }

  try {
    const features = readdirSync(featuresDir);

    for (const feature of features) {
      const featureDir = resolve(featuresDir, feature);
      if (!statSync(featureDir).isDirectory()) continue;

      const pagesDir = resolve(featureDir, "pages");
      if (!existsSync(pagesDir)) continue;

      watchPaths.push(`${pagesDir}/**/*.vue`);
    }

    watchPaths.push(`${featuresDir}/*/pages/**/*.vue`);
  } catch (error) {
    console.error("Failed to get feature pages watch paths:", error);
  }

  return watchPaths;
}
