<script setup lang="ts">
const { t } = useI18n();

watchEffect(() => {
  useSeoMeta({
    title: t("home.hero.title"),
    description: t("home.hero.description"),
  });
});
</script>

<template>
  <div class="home-page">
    <header class="hero">
      <h1>{{ $t("home.hero.title") }}</h1>
      <p class="subtitle">
        {{ $t("home.hero.subtitle") }}
      </p>
    </header>

    <div class="features">
      <div class="feature-card">
        <div class="icon">📦</div>
        <h2>{{ $t("home.features.featureBased.title") }}</h2>
        <p>{{ $t("home.features.featureBased.desc") }}</p>
      </div>

      <div class="feature-card">
        <div class="icon">🧩</div>
        <h2>{{ $t("home.features.componentPrefix.title") }}</h2>
        <p>{{ $t("home.features.componentPrefix.desc") }}</p>
      </div>

      <div class="feature-card">
        <div class="icon">🔥</div>
        <h2>{{ $t("home.features.hotReload.title") }}</h2>
        <p>{{ $t("home.features.hotReload.desc") }}</p>
      </div>

      <div class="feature-card">
        <div class="icon">🚀</div>
        <h2>{{ $t("home.features.typeSafe.title") }}</h2>
        <p>{{ $t("home.features.typeSafe.desc") }}</p>
      </div>

      <div class="feature-card">
        <div class="icon">📍</div>
        <h2>{{ $t("home.features.autoRouting.title") }}</h2>
        <p>{{ $t("home.features.autoRouting.desc") }}</p>
      </div>

      <div class="feature-card">
        <div class="icon">⚡</div>
        <h2>{{ $t("home.features.autoImports.title") }}</h2>
        <p>{{ $t("home.features.autoImports.desc") }}</p>
      </div>

      <div class="feature-card">
        <div class="icon">🌍</div>
        <h2>{{ $t("home.features.i18n.title") }}</h2>
        <p>{{ $t("home.features.i18n.desc") }}</p>
      </div>
    </div>

    <div class="quick-start">
      <h2>{{ $t("home.quickStart.title") }}</h2>

      <div class="code-block">
        <code>npm run create:feature blog</code>
      </div>

      <p class="hint">
        {{ $t("home.quickStart.hint") }}
      </p>
    </div>

    <div class="structure">
      <h2>{{ $t("home.structure.title") }}</h2>

      <pre><code>app/features/blog/
  ├── components/         → &lt;f-blog-card /&gt;
  ├── composables/        → useBlog()
  ├── stores/             → useBlogStore()
  ├── utils/              → formatPost()
  ├── types/              → import type { Post }
  ├── locales/            → t('blog.title')
  └── pages/
      ├── index.vue       → /blog
      ├── create.vue      → /blog/create
      └── [slug].vue      → /blog/:slug</code></pre>
    </div>

    <div class="usage">
      <h2>{{ $t("home.usage.title") }}</h2>

      <div class="usage-group">
        <p class="usage-label">
          {{ $t("home.usage.components") }}
        </p>
        <div class="code-block">
          <code>&lt;f-todo-item :todo="todo" /&gt;</code>
        </div>
      </div>

      <div class="usage-group">
        <p class="usage-label">
          {{ $t("home.usage.composables") }}
        </p>
        <div class="code-block">
          <code>
            const store = useTodoStore()<br />
            const { todos } = useTodo()
          </code>
        </div>
      </div>

      <div class="usage-group">
        <p class="usage-label">
          {{ $t("home.usage.i18n") }}
        </p>
        <div class="code-block">
          <code>
            const { t } = useI18n()<br />
            t('blog.title')
          </code>
        </div>
      </div>

      <div class="usage-group">
        <p class="usage-label">
          {{ $t("home.usage.types") }}
        </p>
        <div class="code-block">
          <code>
            import type { Todo } from '~/features/todo/types/todo.types'
          </code>
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
}

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

.code-block {
  background: #111;
  color: #00dc82;
  padding: 1.25rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #1e1e1e;
  margin: 0.75rem auto;
  max-width: 600px;
  font-family: monospace;
  font-size: 0.95rem;
  overflow-x: auto;
  text-align: left;
  line-height: 1.7;
}

.quick-start,
.structure {
  margin: 4rem 0;
  text-align: center;
}

.usage {
  margin: 4rem auto;
  max-width: 600px;
}

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
</style>
