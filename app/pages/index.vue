<template>
  <div class="home-page">
    <header class="hero">
      <h1>Nuxt 4 Feature-Based Template</h1>
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
        <div class="icon">🎯</div>
        <h2>Barrel Exports</h2>
        <p>Clean imports with single entry points</p>
      </div>

      <div class="feature-card">
        <div class="icon">🔥</div>
        <h2>Hot Reload</h2>
        <p>Add pages without restart, instant updates</p>
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
        <h2>Zero Config</h2>
        <p>Dynamic params and catch-all routes just work</p>
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
  ├── components/
  ├── composables/
  ├── stores/
  ├── types/
  ├── pages/
  │   ├── index.vue      → /blog
  │   ├── create.vue     → /blog/create
  │   └── [slug].vue     → /blog/:slug
  └── index.ts           # Barrel export</code></pre>
    </div>

    <div class="usage">
      <h2>Usage</h2>
      <div class="code-block">
        <code>import { useBlog, FBlogList } from '~/features/blog'</code>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Nuxt 4 Feature-Based Starter",
  description:
    "Scalable Nuxt 4 architecture with feature-based structure and auto routing",
});
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

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
  color: #64748b;
  margin-bottom: 0;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
}

.feature-card {
  padding: 2rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  border-color: #00dc82;
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h2 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1e293b;
}

.feature-card p {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.quick-start,
.structure,
.usage {
  margin: 4rem 0;
  text-align: center;
}

.quick-start h2,
.structure h2,
.usage h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1e293b;
}

.code-block {
  background: #1e293b;
  color: #00dc82;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem auto;
  max-width: 600px;
  font-family: "Courier New", monospace;
  font-size: 1rem;
  overflow-x: auto;
}

.hint {
  font-size: 0.9rem;
  color: #64748b;
  margin-top: 0.5rem;
}

.structure pre {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 2rem;
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
  overflow-x: auto;
}

.structure code {
  font-family: "Courier New", monospace;
  font-size: 0.9rem;
  color: #334155;
  line-height: 1.8;
}

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
    font-size: 0.85rem;
    padding: 1rem;
  }

  .structure pre {
    padding: 1rem;
    font-size: 0.8rem;
  }
}
</style>
