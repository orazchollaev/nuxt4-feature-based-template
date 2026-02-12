# Nuxt 4 Feature-Based Template

[![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt.js)](https://nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Production-ready Nuxt 4 starter with feature-based architecture, auto-imports, and smart component naming.

## 📁 Structure

```
app/
├── features/              # Feature modules
│   ├── todo/
│   │   ├── components/    # f-todo-* prefix
│   │   ├── composables/   # useTodo
│   │   ├── stores/        # useTodoStore
│   │   └── types/
│   └── blog/
├── pages/                 # Routes (NOT in features)
├── components/            # Shared components
├── composables/           # Shared composables
├── stores/                # Global Pinia stores
└── ...                    # Other Nuxt directories

config/
└── hooks/                 # Nuxt lifecycle
```

## 🚀 Getting Started

```bash
# Install
npm install

# Start dev server
npm run dev

# Create feature
npm run create:feature blog

# Build
npm run build
```

## 📖 Usage

```bash
# Create feature
npm run create:feature blog
```

Auto-generates `app/features/blog/` with components, composables, stores, types and page route.

### Component Naming

Feature components auto-prefix: `f-{feature}-{component}`

```vue
<f-todo-list />
<!-- app/features/todo/components/List.vue -->
<f-blog-card />
<!-- app/features/blog/components/Card.vue -->
<Button />
<!-- app/components/Button.vue (shared, no prefix) -->
```

### Composables & Stores

Auto-imported from feature folders:

```vue
<script setup>
const { todos } = useTodo();
const store = useTodoStore();
</script>
```

## ⚙️ Configuration

- **`nuxt.config.ts`** - Main configuration
- **`config/hooks/components.ts`** - Component naming customization

## 📄 License

MIT License
