# Nuxt 4 Feature-Based Template

[![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt.js)](https://nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A clean and organized Nuxt 4 starter template with feature-based architecture and smart component naming.

## 🎯 Why Feature-Based?

- Better scalability
- Easier to maintain
- Team collaboration friendly
- Clear feature boundaries
- Modular and reusable code

## ✨ Features

- 🎯 **Feature-based architecture** - Organize code by features, not by type
- 📦 **Modular structure** - Easy to add, remove, or modify features
- 🔧 **Nuxt 4** - Latest Nuxt version with best practices
- 📝 **TypeScript support** - Type-safe development
- 🎨 **Auto-imports** - Components and composables auto-imported
- 🏷️ **Smart naming** - Feature components auto-prefixed (e.g., `<f-todo-list />`)
- 🧩 **Clean config** - Modular configuration with separated hooks

## 📁 Project Structure

```
app/
├── features/
│   └── todo/           # Feature modules
│       ├── components/     # Feature-specific components
│       ├── composables/    # Feature-specific composables
│       ├── stores/         # Feature-specific stores (Pinia)
│       ├── types/          # Feature-specific TypeScript types
│       ├── utils/          # Feature-specific utilities
│       ├── services/       # Feature-specific API services
│       └── constants/      # Feature-specific constants
├── components/             # Shared components
├── composables/            # Shared composables
├── layouts/                # Layout components
├── pages/                  # Application pages (routes)
├── stores/                 # Global stores
├── types/                  # Global TypeScript types
├── utils/                  # Global utilities
├── middleware/             # Route middleware
├── plugins/                # Nuxt plugins
├── assets/                 # Styles, fonts, images
config/                     # Configuration files
├── hooks/                  # Nuxt hooks
│   └── components.ts       # Component naming hook
public/                     # Static files
server/                     # Server API routes
shared/                     # Shared scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. Click the "Use this template" button at the top of this page
2. Create your new repository
3. Clone your new repository:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

4. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

5. Start development server:

```bash
npm run dev
```

Open [http://localhost:1010](http://localhost:1010) in your browser.

## 📖 Usage

### Creating a New Feature

1. Create a new folder under `app/features/`:

```
app/features/your-feature/
├── components/
├── composables/
├── stores/
├── types/
├── utils/
├── services/
└── constants/
```

2. Create pages in `app/pages/` (NOT in features):

```
app/pages/your-feature/
└── index.vue
```

3. Add your components, composables, stores, and other feature-specific code inside the feature folder.

4. That's it! Nuxt will auto-import everything with smart naming.

### Example Feature Structure

```
app/features/todo/
├── components/
│   ├── List.vue           # Auto-imported as <f-todo-list />
│   ├── Item.vue           # Auto-imported as <f-todo-item />
│   └── Form.vue           # Auto-imported as <f-todo-form />
├── composables/
│   └── useTodo.ts     # Auto-imported composable
├── stores/
│   └── todo.ts        # Pinia store (Auto-imported)
├── types/
│   └── index.ts           # TypeScript interfaces/types
├── utils/
│   └── helpers.ts         # Utility functions
├── services/
│   └── api.ts             # API calls
└── constants/
    └── index.ts           # Constants
```

**Pages are located in `app/pages/` NOT in features:**

```
app/pages/
└── todo/
    └── index.vue          # /todo route
```

### Component Naming Convention

Feature components are automatically prefixed with `f-{featureName}-`:

```vue
<!-- app/features/todo/components/List.vue -->
<template>
  <div>Todo List</div>
</template>
```

**Usage in any component:**

```vue
<template>
  <div>
    <!-- Automatically imports as f-todo-list -->
    <f-todo-list />

    <!-- Other feature components -->
    <f-todo-item />
    <f-todo-form />
  </div>
</template>
```

**Shared components** (in `app/components/`) don't have the `f-` prefix:

```vue
<!-- app/components/Button.vue -->
<template>
  <button>Click me</button>
</template>

<!-- Usage -->
<template>
  <Button />
  <!-- No prefix for shared components -->
</template>
```

### Using Feature Composables

```vue
<script setup lang="ts">
// Auto-imported from app/features/todo/composables/useTodo.ts
const { todos, addTodo } = useTodo();
</script>
```

### Using Feature Stores

```vue
<script setup lang="ts">
// Auto-imported from app/features/todo/stores/todo.ts
const todoStore = useTodoStore();
</script>
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## 📂 Directory Guide

### Feature-Based Directories

- **`features/`** - Feature modules with their own components, composables, stores, types, utils, services, and constants
- **`config/`** - Configuration files and hooks

### Nuxt 4 Standard Directories

- **`pages/`** - File-based routing (creates routes automatically)
- **`components/`** - Shared auto-imported Vue components
- **`composables/`** - Shared auto-imported composition functions
- **`layouts/`** - Layout components (default, custom, etc.)
- **`middleware/`** - Route middleware (auth, guards, etc.)
- **`plugins/`** - Nuxt plugins (runs before app initialization)
- **`server/`** - Server-side API routes and middleware
- **`assets/`** - Uncompiled assets (CSS, SCSS, images)
- **`public/`** - Static files served at root (favicon, robots.txt)
- **`stores/`** - Global Pinia stores (state management)
- **`types/`** - Global TypeScript type definitions
- **`utils/`** - Global auto-imported utility functions

For more information, see the [Nuxt 4 Directory Structure Documentation](https://nuxt.com/docs/guide/directory-structure).

## ⚙️ Configuration

The project uses a modular configuration approach:

### Main Config (`nuxt.config.ts`)

Clean and readable main configuration file.

### Component Naming Hook (`config/hooks/components.ts`)

Handles automatic feature-based component naming:

- Extracts feature name from file path
- Generates kebab-case component names
- Prefixes with `f-{featureName}-`

You can modify this hook to customize the naming convention.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🌟 Template Features Checklist

After creating your project from this template:

- [ ] Update `package.json` (name, description, author)
- [ ] Update `README.md` with your project info
- [ ] Remove example todo feature (if not needed)
- [ ] Add your own features
- [ ] Update `LICENSE` file
- [ ] Customize component naming in `config/hooks/components.ts` (optional)
- [ ] Update dev server port in `nuxt.config.ts` (optional)

## 💡 Tips & Best Practices

### When to Use Features vs Shared

**Use Features when:**

- Code is specific to a business domain (e.g., todos, auth, blog)
- Components/logic are unlikely to be reused across different features
- You want to keep related code together

**Use Shared when:**

- Components are truly generic (Button, Modal, Card)
- Utilities are used across multiple features
- Composables provide cross-cutting concerns (useApi, useFetch)

### Feature Organization

Each feature should be self-contained and follow this structure:

- Keep feature-specific code inside the feature folder
- Pages always go in `app/pages/` (Nuxt routing requirement)
- Shared code goes in root `components/`, `composables/`, etc.

### Component Naming

Feature components automatically get prefixed:

```
app/features/auth/components/LoginForm.vue → <f-auth-login-form />
app/features/blog/components/PostCard.vue → <f-blog-post-card />
```

This prevents naming conflicts and makes it clear which feature a component belongs to.

## 📄 License

MIT License - feel free to use this template for your projects!

## 🙏 Acknowledgments

- Built with [Nuxt 4](https://nuxt.com/)
- Inspired by feature-based architecture patterns
- Component naming system for better DX

---

⭐ If you find this template helpful, please give it a star!

## 📞 Support

If you have any questions or need help, feel free to:

- Open an issue
- Start a discussion
- Check out the [Nuxt documentation](https://nuxt.com/docs)
