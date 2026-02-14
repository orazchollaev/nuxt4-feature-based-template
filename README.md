# Nuxt 4 Feature-Based Starter

Minimal and scalable Nuxt 4 starter using feature-based architecture and barrel exports.

## Structure

```
app/
├─ features/
│ ├─ index.ts
│ ├─ components/
│ ├─ composables/
│ ├─ stores/
│ └─ types/
├─ components/
├─ composables/
├─ stores/
└─ pages/

config/scripts/create-feature.mjs
```

## Install

```
npm install
npm run dev
```

## Build

```
npm run build
```

## Create Feature

```
npm run create:feature blog
```

## Usage

```
import { useTodo, FTodoList, type Todo } from "~/features/todo"
```

## Rules

- One feature = one entry point
- No deep imports
- Features are isolated

## License

MIT
