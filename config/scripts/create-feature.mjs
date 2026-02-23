import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const featureName = process.argv[2];

if (!featureName) {
  console.error("Feature name not specified!");
  console.error("Usage: npm run create:feature <featureName>");
  process.exit(1);
}

if (!/^[a-z0-9-]+$/.test(featureName)) {
  console.error(
    "Feature name can only contain lowercase letters, numbers and hyphens (-)!",
  );
  process.exit(1);
}

const featurePath = path.join(
  __dirname,
  "..",
  "..",
  "app",
  "features",
  featureName,
);

if (fs.existsSync(featurePath)) {
  console.error(`Feature folder already exists: ${featurePath}`);
  process.exit(1);
}

function capitalize(str) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

const capitalizedName = capitalize(featureName);

// ---------------------------------------------------------------------------
// File contents
// ---------------------------------------------------------------------------

const files = {};

// Types — always imported explicitly, not auto-imported
files["types/index.ts"] = `// ${capitalizedName} — Types
// Import explicitly: import type { ${capitalizedName} } from '~/features/${featureName}/types'

export interface ${capitalizedName} {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
`;

// Composable — auto-imported globally by nuxt-feature-imports
files[`composables/use${capitalizedName}.ts`] =
  `import type { ${capitalizedName} } from '../types';

// Auto-imported globally — no import needed in .vue files
export const use${capitalizedName} = () => {
  const items = ref<${capitalizedName}[]>([]);
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
`;

// Store — auto-imported globally by nuxt-feature-imports
files[`stores/${featureName}.store.ts`] =
  `import type { ${capitalizedName} } from '../types';

// Auto-imported globally — no import needed in .vue files
export const use${capitalizedName}Store = defineStore('${featureName}', () => {
  const items = ref<${capitalizedName}[]>([]);
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
`;

// Component — auto-imported as <f-[feature]-empty /> by nuxt-feature-imports
files["components/Empty.vue"] = `<script setup lang="ts">
// Auto-imported as <f-${featureName}-empty />
// No import needed — registered automatically by nuxt-feature-imports
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
`;

// Page — uses auto-imports, explicit type import only
files["pages/index.vue"] = `<script setup lang="ts">
import type { ${capitalizedName} } from '~/features/${featureName}/types';

// Composable and store are auto-imported — no import statement needed
const { items, loading, error, fetchItems } = use${capitalizedName}();
const store = use${capitalizedName}Store();

onMounted(() => fetchItems());
</script>

<template>
  <div class="${featureName}-page">
    <h1>${capitalizedName}</h1>

    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>

    <!--
      <f-${featureName}-empty /> is auto-imported from
      features/${featureName}/components/Empty.vue
    -->
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
`;

// ---------------------------------------------------------------------------
// Create directories and files
// ---------------------------------------------------------------------------

const dirs = ["components", "composables", "stores", "types", "pages"];

try {
  for (const dir of dirs) {
    fs.mkdirSync(path.join(featurePath, dir), { recursive: true });
  }

  for (const [filePath, content] of Object.entries(files)) {
    const fullPath = path.join(featurePath, filePath);
    const dirPath = path.dirname(fullPath);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(fullPath, content);
  }

  // ---------------------------------------------------------------------------
  // Success output
  // ---------------------------------------------------------------------------

  console.log(`\n✓ Feature "${featureName}" created\n`);
  console.log("Structure:\n");
  console.log(`  app/features/${featureName}/`);
  console.log(`    components/Empty.vue`);
  console.log(`    composables/use${capitalizedName}.ts`);
  console.log(`    stores/${featureName}.store.ts`);
  console.log(`    types/index.ts`);
  console.log(`    pages/index.vue`);
  console.log("");
  console.log("Routes:");
  console.log(`  /${featureName}  →  pages/index.vue`);
  console.log("");
  console.log("Auto-imports (no import statement needed):");
  console.log(`  use${capitalizedName}()         composable`);
  console.log(`  use${capitalizedName}Store()    store`);
  console.log(`  <f-${featureName}-empty />  component`);
  console.log("");
  console.log("Explicit import required:");
  console.log(
    `  import type { ${capitalizedName} } from '~/features/${featureName}/types'`,
  );
  console.log("");
} catch (err) {
  console.error("Error occurred:", err.message);
  process.exit(1);
}
