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
const componentPrefix = `F${capitalizedName}`;

const structure = {
  components: [],
  composables: [],
  stores: [],
  types: [],
  pages: [],
};

const files = {};

files["index.ts"] = `// ${capitalizedName} Feature - Barrel Exports

// Composables
export * from "./composables/use${capitalizedName}";

// Stores
export * from "./stores/${featureName}";

// Types
export * from "./types";

// Components
export { default as ${componentPrefix}Empty } from "./components/Empty.vue";
`;

files["types/index.ts"] = `// ${capitalizedName} - Types

export interface ${capitalizedName} {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ${capitalizedName}State {
  items: ${capitalizedName}[];
  loading: boolean;
  error: string | null;
}
`;

files[`composables/use${capitalizedName}.ts`] =
  `import type { ${capitalizedName} } from '../types';

export const use${capitalizedName} = () => {
  const items = ref<${capitalizedName}[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchItems = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      // TODO: Implement fetch logic
      // const data = await $fetch('/api/${featureName}');
      // items.value = data;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred';
    } finally {
      loading.value = false;
    }
  };

  return {
    items,
    loading,
    error,
    fetchItems,
  };
};
`;

files[`stores/${featureName}.ts`] =
  `import type { ${capitalizedName}, ${capitalizedName}State } from '../types';

export const use${capitalizedName}Store = defineStore('${featureName}', () => {
  const state = reactive<${capitalizedName}State>({
    items: [],
    loading: false,
    error: null,
  });

  const fetchItems = async () => {
    state.loading = true;
    state.error = null;

    try {
      // TODO: Implement fetch logic
      // const data = await $fetch('/api/${featureName}');
      // state.items = data;
    } catch (err) {
      state.error = err instanceof Error ? err.message : 'An error occurred';
    } finally {
      state.loading = false;
    }
  };

  return {
    ...toRefs(state),
    fetchItems,
  };
});
`;

files["components/Empty.vue"] = `<template>
  <div class="${featureName}-empty">
    <p>No ${featureName} items found</p>
  </div>
</template>

<script setup lang="ts">
// ${capitalizedName} Empty State Component
</script>

<style scoped>
.${featureName}-empty {
  padding: 2rem;
  text-align: center;
  color: #6b7280;
}
</style>
`;

files["pages/index.vue"] = `<template>
  <div class="${featureName}-page">
    <h1>${capitalizedName} Page</h1>
    <${componentPrefix}Empty />
  </div>
</template>

<script setup lang="ts">
import { 
  use${capitalizedName}, 
  use${capitalizedName}Store,
  ${componentPrefix}Empty,
  type ${capitalizedName}
} from '~/features/${featureName}';

// Use composable or store
const { items, loading, error, fetchItems } = use${capitalizedName}();
// OR
// const store = use${capitalizedName}Store();
</script>

<style scoped>
.${featureName}-page {
  padding: 2rem;
}
</style>
`;

try {
  Object.keys(structure).forEach((dir) => {
    const dirPath = path.join(featurePath, dir);
    fs.mkdirSync(dirPath, { recursive: true });
  });

  Object.entries(files).forEach(([filePath, content]) => {
    const fullPath = path.join(featurePath, filePath);
    const dirPath = path.dirname(fullPath);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(fullPath, content);
  });

  console.log("\nFeature created successfully!\n");
  console.log("Generated structure:\n");
  console.log("app/features/");
  console.log(`  ${featureName}/`);
  console.log("    index.ts");
  console.log("    components/");
  console.log("      Empty.vue");
  console.log("    composables/");
  console.log(`      use${capitalizedName}.ts`);
  console.log("    stores/");
  console.log(`      ${featureName}.ts`);
  console.log("    types/");
  console.log("      index.ts");
  console.log("    pages/");
  console.log("      index.vue\n");
  console.log("Routes:");
  console.log(`  /${featureName} → features/${featureName}/pages/index.vue\n`);
  console.log("Usage:");
  console.log(
    `import { use${capitalizedName}, ${componentPrefix}Empty } from '~/features/${featureName}';\n`,
  );
} catch (error) {
  console.error("Error occurred:", error.message);
  process.exit(1);
}
