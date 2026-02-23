<script setup lang="ts">
useSeoMeta({
  title: "Nuxt 4 Feature-Based Starter",
  description:
    "Scalable Nuxt 4 architecture with feature-based structure and auto routing",
});
</script>

<template>
  <div class="home-page">
    <header class="hero">
      <h1>Nuxt 4 Feature-Based Starter</h1>
      <p class="subtitle">
        Scalable architecture with integrated routing and hot reload
      </p>
    </header>

    <div class="features">
      <div class="feature-card">
        <div class="icon">📦</div>
        <h2>Feature-Based</h2>
        <p>Organize code by business domain, not file type</p>
      </div>

      <div class="feature-card">
        <div class="icon">🧩</div>
        <h2>Component Prefix</h2>
        <p>
          Feature components auto-imported as <code>&lt;f-todo-item /&gt;</code>
        </p>
      </div>

      <div class="feature-card">
        <div class="icon">🔥</div>
        <h2>Hot Reload</h2>
        <p>Add pages and components without restart</p>
      </div>

      <div class="feature-card">
        <div class="icon">🚀</div>
        <h2>Type-Safe</h2>
        <p>Full TypeScript support out of the box</p>
      </div>

      <div class="feature-card">
        <div class="icon">📍</div>
        <h2>Auto Routing</h2>
        <p>Pages inside features become routes automatically</p>
      </div>

      <div class="feature-card">
        <div class="icon">⚡</div>
        <h2>Auto Imports</h2>
        <p>Composables, stores and utils available globally</p>
      </div>
    </div>

    <div class="quick-start">
      <h2>Quick Start</h2>
      <div class="code-block">
        <code>npm run create:feature blog</code>
      </div>
      <p class="hint">
        Creates feature with components, stores, pages and routes
      </p>
    </div>

    <div class="structure">
      <h2>Structure</h2>
      <pre><code>app/features/blog/
  ├── components/         → &lt;f-blog-card /&gt;
  ├── composables/        → useBlog()
  ├── stores/             → useBlogStore()
  ├── utils/              → formatPost()
  ├── types/              → import type { Post }
  └── pages/
      ├── index.vue       → /blog
      ├── create.vue      → /blog/create
      └── [slug].vue      → /blog/:slug</code></pre>
    </div>

    <div class="usage">
      <h2>Usage</h2>

      <div class="usage-group">
        <p class="usage-label">
          Components — auto-imported with feature prefix
        </p>
        <div class="code-block">
          <code>&lt;f-todo-item :todo="todo" /&gt;</code>
        </div>
      </div>

      <div class="usage-group">
        <p class="usage-label">
          Composables & stores — available globally, no import needed
        </p>
        <div class="code-block">
          <code
            >const store = useTodoStore()<br />const { todos } = useTodo()</code
          >
        </div>
      </div>

      <div class="usage-group">
        <p class="usage-label">Types — explicit import for clarity</p>
        <div class="code-block">
          <code
            >import type { Todo } from '~/features/todo/types/todo.types'</code
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* ── Hero ─────────────────────────────────────────────────────────────── */

.hero {
  text-align: center;
  padding: 4rem 0 3rem;
}

h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00dc82 0%, #36e4da 50%, #0047e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #6b7280;
  margin-bottom: 0;
}

/* ── Feature cards ────────────────────────────────────────────────────── */

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
}

.feature-card {
  padding: 2rem;
  background: #151515;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 220, 130, 0.06);
  border-color: #00dc82;
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h2 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #e2e8f0;
}

.feature-card p {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.feature-card code {
  font-family: "Courier New", monospace;
  font-size: 0.82rem;
  background: #1e1e1e;
  border: 1px solid #333;
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  color: #00dc82;
}

/* ── Sections ─────────────────────────────────────────────────────────── */

.quick-start,
.structure {
  margin: 4rem 0;
  text-align: center;
}

.quick-start h2,
.structure h2 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #e2e8f0;
}

/* ── Code block ───────────────────────────────────────────────────────── */

.code-block {
  background: #111;
  color: #00dc82;
  padding: 1.25rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #1e1e1e;
  margin: 0.75rem auto;
  max-width: 600px;
  font-family: "Courier New", monospace;
  font-size: 0.95rem;
  overflow-x: auto;
  text-align: left;
  line-height: 1.7;
}

.hint {
  font-size: 0.875rem;
  color: #4b5563;
  margin-top: 0.5rem;
}

/* ── Structure ────────────────────────────────────────────────────────── */

.structure pre {
  background: #111;
  border: 1px solid #1e1e1e;
  border-radius: 8px;
  padding: 2rem;
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
  overflow-x: auto;
}

.structure code {
  font-family: "Courier New", monospace;
  font-size: 0.875rem;
  color: #6b9fd4;
  line-height: 1.9;
}

/* ── Usage ────────────────────────────────────────────────────────────── */

.usage {
  margin: 4rem auto;
  max-width: 600px;
}

.usage h2 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #e2e8f0;
}

.usage-group {
  margin-bottom: 2rem;
}

.usage-label {
  font-size: 0.75rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* ── Responsive ───────────────────────────────────────────────────────── */

@media (max-width: 768px) {
  .home-page {
    padding: 1rem;
  }

  .hero {
    padding: 2rem 0;
  }

  .features {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .feature-card {
    padding: 1.5rem;
  }

  .code-block {
    font-size: 0.82rem;
    padding: 1rem;
  }

  .structure pre {
    padding: 1rem;
    font-size: 0.8rem;
  }
}
</style>
