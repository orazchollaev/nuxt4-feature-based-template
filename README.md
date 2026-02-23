# Nuxt 4 Feature-Based Starter

Minimal Nuxt 4 starter with feature-based architecture and full HMR support.

## Structure

```
app/
├── features/
│   └── [feature-name]/
│       ├── components/     # <f-[feature]-[name] />
│       ├── composables/    # auto-imported
│       ├── stores/         # auto-imported
│       ├── utils/          # auto-imported
│       ├── types/          # explicit import only
│       └── pages/          # auto-registered routes
└── ...
```

## Setup

```bash
npm install
npm run dev
npm run build
```

## Create a Feature

```bash
npm run create:feature blog
```

## Routing

```
features/blog/pages/index.vue    → /blog
features/blog/pages/[slug].vue   → /blog/:slug
```

## Component Auto-Import

Components are prefixed with `f-[feature]-` to avoid conflicts:

```
features/todo/components/Item.vue   → <f-todo-item />
features/blog/components/Card.vue   → <f-blog-card />
```

## Composable & Store Auto-Import

Everything in `composables/`, `stores/`, and `utils/` is available globally — no imports needed:

```vue
<script setup lang="ts">
const store = useTodoStore();
const { items } = useTodo();
</script>
```

## Types

Import types explicitly:

```ts
import type { Todo } from "~/features/todo/types/todo.types";
```

## Rules

- Each feature has one entry point — there are no barrel exports (`index.ts`)
- No cross-feature deep imports
- Pages live inside the feature directory

## License

MIT
