import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const featureName = process.argv[2];

if (!featureName) {
  console.error("❌ Feature name not specified!");
  console.error("Usage: npm run create:feature <featureName>");
  process.exit(1);
}

if (!/^[a-z0-9-]+$/.test(featureName)) {
  console.error(
    "❌ Feature name can only contain lowercase letters, numbers and hyphens (-)!",
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
  console.error(`❌ Feature folder already exists: ${featurePath}`);
  process.exit(1);
}

function capitalize(str) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

function snakeCase(str) {
  return str.replace(/-/g, "_");
}

const capitalizedName = capitalize(featureName);
const snakeCaseName = snakeCase(featureName).toUpperCase();

const structure = {
  components: [],
  composables: [],
  stores: [],
  types: [],
};

const files = {};

files["types/index.ts"] = `// ${capitalizedName} - Types
export interface ${capitalizedName} {

}
`;

files[`composables/use${capitalizedName}.ts`] =
  `export const use${capitalizedName} = () => {
  
  return {};
};
`;

files[`stores/${featureName}.ts`] = `
export const use${capitalizedName}Store = defineStore('${featureName}', () => {

  return {
  };
});
`;

files["components/Empty.vue"] = `<template>
  <div>
    <p>No ${featureName} found</p>
  </div>
</template>

<script setup lang="ts">
// ${capitalizedName} Empty State Component
</script>
`;

try {
  const pagePath = path.join(
    __dirname,
    "..",
    "..",
    "app",
    "pages",
    featureName,
  );

  if (!fs.existsSync(pagePath)) {
    fs.mkdirSync(pagePath, { recursive: true });
  }

  const pageFilePath = path.join(pagePath, "index.vue");

  fs.writeFileSync(
    pageFilePath,
    `<template>
  <div>
    <h1>${capitalizedName} Page</h1>
  </div>
</template>

<script setup lang="ts">
// Page for ${capitalizedName}
</script>
`,
  );

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

  console.log("\n✔ Feature created\n");

  console.log("app/pages:");
  console.log(`  ${featureName}/`);
  console.log("    index.vue\n");

  console.log("app/features:");
  console.log(`  ${featureName}/`);
  console.log("    components/");
  console.log("      Empty.vue");
  console.log("    composables/");
  console.log(`      use${capitalizedName}.ts`);
  console.log("    stores/");
  console.log(`      ${featureName}.ts`);
  console.log("    types/");
  console.log("      index.ts\n");
} catch (error) {
  console.error("❌ Error occurred:", error.message);
  process.exit(1);
}
