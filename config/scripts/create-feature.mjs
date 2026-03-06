import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ---------------------------------------------------------------------------
// Args & flags
// ---------------------------------------------------------------------------

const args = process.argv.slice(2)
const featureName = args.find((a) => !a.startsWith("--"))

const flags = {
  withStore: args.includes("--with-store"),
  withI18n: args.includes("--with-i18n"),
  withPage: !args.includes("--no-page"),
  withComponent: !args.includes("--no-component"),
  all: args.includes("--all"),
}

// --all enables everything
if (flags.all) {
  flags.withStore = true
  flags.withI18n = true
}

if (!featureName) {
  console.error("Feature name not specified!")
  console.error("Usage: npm run create:feature <featureName> [flags]\n")
  console.error("Flags:")
  console.error("  --with-store      Include Pinia store")
  console.error("  --with-i18n       Include locale files (tr / en)")
  console.error("  --no-page         Skip pages/index.vue")
  console.error("  --no-component    Skip components/Empty.vue")
  console.error("  --all             Enable all optional flags")
  process.exit(1)
}

if (!/^[a-z0-9-]+$/.test(featureName)) {
  console.error("Feature name can only contain lowercase letters, numbers and hyphens (-)!")
  process.exit(1)
}

const featurePath = path.join(__dirname, "..", "..", "app", "features", featureName)

if (fs.existsSync(featurePath)) {
  console.error(`Feature folder already exists: ${featurePath}`)
  process.exit(1)
}

function capitalize(str) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")
}

const C = capitalize(featureName) // e.g. "TodoItem"

// ---------------------------------------------------------------------------
// File contents
// ---------------------------------------------------------------------------

const files = {}

// ── Types (always) ──────────────────────────────────────────────────────────
files["types/index.ts"] = `// ${C} — Types
// Import explicitly: import type { ${C} } from '~/features/${featureName}/types'

export interface ${C} {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
`

// ── Composable (always) ─────────────────────────────────────────────────────
files[`composables/use${C}.ts`] = `import type { ${C} } from '../types';

// Auto-imported globally — no import needed in .vue files
export const use${C} = () => {
  const items = ref<${C}[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchItems = async () => {
    loading.value = true;
    error.value = null;

    try {
      // TODO: Implement fetch logic
      // items.value = await $fetch('/api/${featureName}');
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred';
    } finally {
      loading.value = false;
    }
  };

  return { items, loading, error, fetchItems };
};
`

// ── Store (--with-store) ─────────────────────────────────────────────────────
if (flags.withStore) {
  files[`stores/${featureName}.store.ts`] = `import type { ${C} } from '../types';

// Auto-imported globally — no import needed in .vue files
export const use${C}Store = defineStore('${featureName}', () => {
  const items = ref<${C}[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchItems = async () => {
    loading.value = true;
    error.value = null;

    try {
      // TODO: Implement fetch logic
      // items.value = await $fetch('/api/${featureName}');
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred';
    } finally {
      loading.value = false;
    }
  };

  return { items, loading, error, fetchItems };
});
`
}

// ── Component (--no-component to skip) ──────────────────────────────────────
if (flags.withComponent) {
  files["components/Empty.vue"] = `<script setup lang="ts">
// Auto-imported as <f-${featureName}-empty />
</script>

<template>
  <div class="${featureName}-empty">
    <slot>No ${featureName} items found.</slot>
  </div>
</template>

<style scoped>
.${featureName}-empty {
  padding: 2rem;
  text-align: center;
  color: #6b7280;
  font-size: 0.95rem;
}
</style>
`
}

// ── i18n locale files (--with-i18n) ─────────────────────────────────────────
if (flags.withI18n) {
  files["locales/tr.ts"] = `// Auto-namespaced as t('${featureName}.*') by feature-i18n hook
export default {
  ${featureName}: {
    name: '${C}',
  },
};
`

  files["locales/en.ts"] = `// Auto-namespaced as t('${featureName}.*') by feature-i18n hook
export default {
  ${featureName}: {
    name: '${C}',
  },
};
`
}

// ── Page (--no-page to skip) ─────────────────────────────────────────────────
if (flags.withPage) {
  const storeImport = flags.withStore ? `\nconst store = use${C}Store();` : ""

  const i18nSetup = flags.withI18n ? `\nconst { t } = useI18n();` : ""

  const titleLine = flags.withI18n ? `t('${featureName}.name')` : `'${C}'`

  files["pages/index.vue"] = `<script setup lang="ts">
import type { ${C} } from '~/features/${featureName}/types';

const { items, loading, error, fetchItems } = use${C}();${storeImport}${i18nSetup}

onMounted(() => fetchItems());
</script>

<template>
  <div class="${featureName}-page">
    <h1>{{ ${titleLine} }}</h1>

    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <f-${featureName}-empty v-else-if="!items.length" />

    <div v-else class="list">
      <!-- TODO: render items -->
    </div>
  </div>
</template>

<style scoped>
.${featureName}-page {
  padding: 2rem;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
`
}

// ---------------------------------------------------------------------------
// Create directories and files
// ---------------------------------------------------------------------------

const dirs = ["components", "composables", "types", "pages"]
if (flags.withStore) dirs.push("stores")
if (flags.withI18n) dirs.push("locales")

try {
  for (const dir of dirs) {
    fs.mkdirSync(path.join(featurePath, dir), { recursive: true })
  }

  for (const [filePath, content] of Object.entries(files)) {
    const fullPath = path.join(featurePath, filePath)
    fs.mkdirSync(path.dirname(fullPath), { recursive: true })
    fs.writeFileSync(fullPath, content)
  }

  // ---------------------------------------------------------------------------
  // Success output
  // ---------------------------------------------------------------------------

  const created = Object.keys(files)

  console.info(`\n✓ Feature "${featureName}" created\n`)
  console.info("Structure:\n")
  console.info(`  app/features/${featureName}/`)
  created.forEach((f) => console.info(`    ${f}`))

  console.info("\nRoutes:")
  if (flags.withPage) {
    console.info(`  /${featureName}  →  pages/index.vue`)
  } else {
    console.info("  (no pages created)")
  }

  console.info("\nAuto-imports (no import statement needed):")
  console.info(`  use${C}()         composable`)
  if (flags.withStore) console.info(`  use${C}Store()    store`)
  if (flags.withComponent) console.info(`  <f-${featureName}-empty />  component`)
  if (flags.withI18n) console.info(`  t('${featureName}.*')       i18n keys`)

  console.info("\nExplicit import required:")
  console.info(`  import type { ${C} } from '~/features/${featureName}/types'`)
  console.info("")
} catch (err) {
  console.error("Error occurred:", err.message)
  process.exit(1)
}
