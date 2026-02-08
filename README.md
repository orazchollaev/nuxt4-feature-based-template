# Nuxt 4 Feature-Based Template

[![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt.js)](https://nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A clean and organized Nuxt 4 starter template with feature-based architecture.

## 🎯 Why Feature-Based?

- Better scalability
- Easier to maintain
- Team collaboration friendly

## ✨ Features

- 🎯 **Feature-based architecture** - Organize code by features, not by type
- 📦 **Modular structure** - Easy to add, remove, or modify features
- 🔧 **Nuxt 4** - Latest Nuxt version with best practices
- 📝 **TypeScript support** - Type-safe development
- 🎨 **Auto-imports** - Components and composables auto-imported

## 📁 Project Structure

```

app/
├── features/
│   └── bookmark/           # Feature modules
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
public/                 # Static files
server/                 # Server API routes
shared/                 # Shared scritps


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

4. That's it! Nuxt will auto-import everything.

### Example Feature Structure

```
app/features/bookmark/
├── components/
│   └── BookmarkList.vue   # Auto-imported as <f-bookmark-list />
├── composables/
│   ├── useBookmark.ts     # Bookmark composable (Auto import)
├── stores/
│   └── bookmark.ts        # Bookmark store (Pinia) (Auto import)
├── types/
│   └── index.ts           # TypeScript interfaces/types
├── utils/
│   └── helpers.ts         # Utility functions
├── services/
│   └── api.ts             # API calls
├── constants/
│    └── index.ts          # Constants

```

# Pages are located in app/pages/ NOT in features

app/pages/
└── bookmark/
└── index.vue # /bookmark route

### Using Feature Components

```vue
<template>
  <f-bookmark-list />
</template>
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

### Nuxt 4 Standard Directories

- **`pages/`** - File-based routing (creates routes automatically)
- **`components/`** - Auto-imported Vue components
- **`composables/`** - Auto-imported composition functions
- **`layouts/`** - Layout components (default, custom, etc.)
- **`middleware/`** - Route middleware (auth, guards, etc.)
- **`plugins/`** - Nuxt plugins (runs before app initialization)
- **`server/`** - Server-side API routes and middleware
- **`assets/`** - Uncompiled assets (CSS, SCSS, images)
- **`public/`** - Static files served at root (favicon, robots.txt)
- **`stores/`** - Pinia stores (state management)
- **`types/`** - Global TypeScript type definitions
- **`utils/`** - Auto-imported utility functions

For more information, see the [Nuxt 4 Directory Structure Documentation](https://nuxt.com/docs/guide/directory-structure).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🌟 Template Features Checklist

After creating your project from this template:

- [ ] Update package.json (name, description, author)
- [ ] Update README.md with your project info
- [ ] Remove example bookmark feature (if not needed)
- [ ] Add your own features
- [ ] Update LICENSE file

## 📄 License

MIT License - feel free to use this template for your projects!

## 🙏 Acknowledgments

- Built with [Nuxt 4](https://nuxt.com/)
- Inspired by feature-based architecture patterns

---

⭐ If you find this template helpful, please give it a star!
