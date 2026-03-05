# Nuxt 4 Feature-Based Starter

This project is a **Nuxt 4 feature-based template** designed to help you
build scalable applications.

Instead of organizing code by technical type (components, stores, etc.),
this template organizes everything by **feature**. Each feature contains
its own components, composables, pages, stores, and other related files.

This makes large projects easier to maintain and scale.

---

# Project Structure

All features live inside:

    app/features/

Example structure:

    app/
    └── features/
        └── todo/
            ├── components/
            ├── composables/
            ├── stores/
            ├── types/
            ├── pages/
            └── locales/

Each feature manages its own logic and files.

---

# Features

Each feature can contain the following folders:

Folder Description

---

`components` Vue components for the feature
`composables` Feature composables (auto-imported)
`stores` Pinia stores (auto-imported)
`types` TypeScript types (manual import)
`pages` Route pages for the feature
`locales` i18n translation files

---

# Component Auto Import

Components inside a feature are automatically imported with a **feature
prefix**.

Example file:

    app/features/todo/components/Item.vue

Can be used anywhere like this:

```vue
<FTodoItem />
```

This prevents component name conflicts between features.

---

# Composables & Stores

Everything inside these folders is **auto-imported globally**:

    composables/
    stores/

Example:

```ts
const store = useTodoStore();
const { todos } = useTodo();
```

No manual imports are required.

---

# Types

Types are **not auto-imported**.

You must import them manually:

```ts
import type { Todo } from "~/features/todo/types/todo";
```

---

# Pages and Routing

Pages inside a feature automatically create routes.

Example:

    app/features/todo/pages/index.vue

Route:

    /todo

Example:

    app/features/todo/pages/active.vue

Route:

    /todo/active

---

# Locales (i18n)

Each feature can contain its own translation files.

Example:

    app/features/todo/locales/en.ts

Usage:

```ts
t("todo.add");
```

Locales work the same as standard Nuxt i18n files.

---

# Setup

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

---

# License

MIT
