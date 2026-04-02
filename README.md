# Nuxt Feature Starter

A Nuxt 4 template organized by **feature** instead of file type. Each feature owns its components, composables, stores, pages, types, and translations — keeping large projects clean and maintainable.

→ **[Live Demo](https://nuxt-feature-starter.vercel.app)**

---

## Structure

All features live under `app/features/`. Each one is a self-contained module with its own folders:

| Folder         | Description                                       |
| -------------- | ------------------------------------------------- |
| `components/`  | Vue components, auto-imported with feature prefix |
| `composables/` | Composables, auto-imported globally               |
| `stores/`      | Pinia stores, auto-imported globally              |
| `types/`       | TypeScript types, manual import only              |
| `pages/`       | File-based routing per feature                    |
| `locales/`     | i18n translation files, auto-namespaced           |

---

## Setup

```bash
pnpm install
pnpm dev
pnpm build
```

Scaffold a new feature:

```bash
npm run create:feature <name>
```

---

## License

MIT
