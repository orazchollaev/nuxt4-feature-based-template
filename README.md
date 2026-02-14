# Nuxt 4 Feature-Based Starter

Minimal and scalable Nuxt 4 starter using feature-based architecture with integrated pages and hot reload support.

## Structure

```
app/
├── features/
│   └── [feature-name]/
│       ├── index.ts           # Barrel export
│       ├── components/
│       ├── composables/
│       ├── stores/
│       ├── types/
│       └── pages/            # Auto-registered routes
│           ├── index.vue     # → /feature-name
│           ├── about.vue     # → /feature-name/about
│           └── [id].vue      # → /feature-name/:id
├── components/
├── composables/
├── stores/
└── pages/
```

## Install

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Create Feature

```bash
npm run create:feature blog
```

This creates:

- Feature directory with components, composables, stores, types
- Pages directory inside feature (auto-registered as routes)
- Barrel export file (index.ts)

## Routing

Pages inside `features/[name]/pages/` are automatically registered:

```
features/blog/pages/index.vue      → /blog
features/blog/pages/create.vue     → /blog/create
features/blog/pages/[slug].vue     → /blog/:slug
features/blog/pages/[...all].vue   → /blog/*
```

Hot reload works without restart - just create new pages and they're instantly available.

## Usage

```typescript
import { useBlog, FBlogList, type Blog } from "~/features/blog";
```

## Rules

- One feature = one entry point
- No deep imports between features
- Features are self-contained
- Pages live inside features

## License

MIT
