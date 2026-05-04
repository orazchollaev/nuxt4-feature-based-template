<script setup lang="ts">
const { t } = useI18n()

interface Feature {
  icon: string
  titleKey: string
  descKey: string
}

const features: Feature[] = [
  {
    icon: "📦",
    titleKey: "home.features.featureBased.title",
    descKey: "home.features.featureBased.desc",
  },
  {
    icon: "🧩",
    titleKey: "home.features.componentPrefix.title",
    descKey: "home.features.componentPrefix.desc",
  },
  {
    icon: "🔥",
    titleKey: "home.features.hotReload.title",
    descKey: "home.features.hotReload.desc",
  },
  { icon: "🚀", titleKey: "home.features.typeSafe.title", descKey: "home.features.typeSafe.desc" },
  {
    icon: "📍",
    titleKey: "home.features.autoRouting.title",
    descKey: "home.features.autoRouting.desc",
  },
  {
    icon: "⚡",
    titleKey: "home.features.autoImports.title",
    descKey: "home.features.autoImports.desc",
  },
  { icon: "🌍", titleKey: "home.features.i18n.title", descKey: "home.features.i18n.desc" },
]

watchEffect(() => {
  useSeoMeta({
    title: t("home.hero.title"),
    description: t("home.hero.description"),
  })
})
</script>

<template>
  <div class="doc-page">
    <header class="hero">
      <span class="badge">template</span>
      <h1>{{ $t("home.hero.title") }}</h1>
      <p class="subtitle">{{ $t("home.hero.subtitle") }}</p>
    </header>

    <hr class="divider" />

    <section class="section">
      <p class="section-label">{{ $t("home.structure.title") }}</p>
      <p class="section-body">{{ $t("home.structure.desc") }}</p>
      <pre><code><span class="hl">app/features/blog/</span>
  ├── <span class="hl">components/</span>   <span class="dim">→ &lt;FBlogCard /&gt;</span>
  ├── <span class="hl">composables/</span>  <span class="dim">→ useBlog()</span>
  ├── <span class="hl">stores/</span>       <span class="dim">→ useBlogStore()</span>
  ├── <span class="hl">types/</span>        <span class="dim">→ import type { Post }</span>
  ├── <span class="hl">pages/</span>        <span class="dim">→ /blog, /blog/create, /blog/:slug</span>
  └── <span class="hl">locales/</span>      <span class="dim">→ t('blog.title')</span></code></pre>
    </section>

    <hr class="divider" />

    <section class="section">
      <p class="section-label">{{ $t("home.features.title") }}</p>
      <div class="feature-grid">
        <div v-for="feature in features" :key="feature.titleKey" class="feature-card">
          <span class="f-icon">{{ feature.icon }}</span>
          <div>
            <p class="f-title">{{ $t(feature.titleKey) }}</p>
            <p class="f-desc">{{ $t(feature.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>

    <hr class="divider" />

    <section class="section">
      <p class="section-label">{{ $t("home.usage.title") }}</p>

      <p class="usage-label">{{ $t("home.usage.components") }}</p>
      <pre><code><span class="hl">&lt;FTodoItem</span> :todo="todo" <span class="hl">/&gt;</span></code></pre>

      <p class="usage-label">{{ $t("home.usage.composables") }}</p>
      <pre><code><span class="hl">const</span> store = <span class="hl">useTodoStore()</span>
<span class="hl">const</span> { todos } = <span class="hl">useTodo()</span></code></pre>

      <p class="usage-label">{{ $t("home.usage.i18n") }}</p>
      <pre><code><span class="hl">t(</span><span class="dim">'todo.add'</span><span class="hl">)</span></code></pre>

      <p class="usage-label">{{ $t("home.usage.types") }}</p>
      <pre><code><span class="hl">import type</span> { Todo } <span class="hl">from</span> <span class="dim">'~/features/todo/types/todo.types'</span></code></pre>
    </section>

    <hr class="divider" />

    <section class="section">
      <p class="section-label">{{ $t("home.quickStart.title") }}</p>
      <div class="cmd-block">
        <code>npm run create:feature blog</code>
      </div>
      <p class="hint">{{ $t("home.quickStart.hint") }}</p>
    </section>
  </div>
</template>

<style scoped>
.doc-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* Hero */
.hero {
  padding-bottom: 2.5rem;
}

.badge {
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 4px;
  background: rgba(0, 220, 130, 0.1);
  color: var(--accent);
  border: 1px solid rgba(0, 220, 130, 0.2);
  margin-bottom: 1.25rem;
}

h1 {
  font-size: clamp(1.75rem, 5vw, 2.75rem);
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 1rem;
  color: var(--text);
}

.subtitle {
  font-size: clamp(15px, 2vw, 17px);
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 560px;
}

/* Divider */
.divider {
  border: none;
  border-top: 1px solid #1e1e1e;
  margin: 2.25rem 0;
}

/* Sections */
.section {
  margin-bottom: 0.5rem;
}

.section-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 0.85rem;
}

.section-body {
  font-size: 16px;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 1rem;
}

/* Code blocks */
pre {
  background: var(--bg-surface);
  border: 1px solid #1e1e1e;
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  font-size: 14px;
  line-height: 1.9;
  overflow-x: auto;
  margin: 0.5rem 0 1.5rem;
  -webkit-overflow-scrolling: touch;
}

pre code {
  font-family: "SF Mono", "Fira Code", "Fira Mono", monospace;
  background: none;
  border: none;
  padding: 0;
  color: var(--text-muted);
}

.hl {
  color: var(--accent);
}
.dim {
  color: #374151;
}

/* Feature grid */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 10px;
  margin: 0.75rem 0;
}

.feature-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 18px;
  background: var(--bg-card);
  border: 1px solid #1e1e1e;
  border-radius: 10px;
  transition: border-color 0.2s ease;
}

.feature-card:hover {
  border-color: rgba(0, 220, 130, 0.3);
}

.f-icon {
  font-size: 22px;
  flex-shrink: 0;
  margin-top: 2px;
}

.f-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-sub);
  margin-bottom: 4px;
}

.f-desc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.55;
}

/* Usage */
.usage-label {
  font-size: 14px;
  color: var(--text-dim);
  margin: 1.25rem 0 0.35rem;
}

/* Quick start */
.cmd-block {
  display: inline-flex;
  align-items: center;
  background: var(--bg-surface);
  border: 1px solid #1e1e1e;
  border-radius: 10px;
  padding: 0.8rem 1.25rem;
  margin: 0.6rem 0;
}

.cmd-block code {
  font-family: "SF Mono", "Fira Code", monospace;
  font-size: 15px;
  color: var(--accent);
}

.hint {
  font-size: 15px;
  color: var(--text-dim);
  margin-top: 0.75rem;
  line-height: 1.65;
}

/* Mobile */
@media (max-width: 640px) {
  .doc-page {
    padding: 2rem 1.25rem;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  pre {
    font-size: 13px;
    padding: 1rem 1rem;
    border-radius: 8px;
  }

  .cmd-block {
    width: 100%;
    justify-content: center;
  }

  .subtitle {
    max-width: 100%;
  }
}
</style>
