<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const toggleLocale = async () => {
  const available = locales.value.map((l) => (typeof l === "string" ? l : l.code))

  const next = available.find((l) => l !== locale.value)
  if (next) await setLocale(next)
}
</script>

<template>
  <header class="header">
    <div class="container">
      <NuxtLink to="https://github.com/orazchollaev" target="_blank" class="logo">
        Nuxt Feature Starter
      </NuxtLink>

      <nav class="nav">
        <NuxtLink to="/" class="nav-link" title="Shift + H">
          {{ $t("layout.nav.home") }}
        </NuxtLink>

        <NuxtLink to="/todo" class="nav-link" title="Shift + T">
          {{ $t("layout.nav.todo") }}
        </NuxtLink>

        <button class="lang-toggle" @click="toggleLocale">
          {{ locale.toUpperCase() }}
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: #0f0f0f;
  border-bottom: 1px solid #2a2a2a;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: #f1f1f1;
  text-decoration: none;
  letter-spacing: -0.02em;
  transition: color 0.2s;
}

.logo:hover {
  color: #00dc82;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: #6b7280;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s;
  position: relative;
}

.nav-link:hover {
  color: #f1f1f1;
}

.nav-link.router-link-active {
  color: #00dc82;
}

.nav-link.router-link-active::after {
  content: "";
  position: absolute;
  bottom: -1.25rem;
  left: 0;
  right: 0;
  height: 2px;
  background: #00dc82;
}

.lang-toggle {
  background: transparent;
  border: 1px solid #2a2a2a;
  color: #f1f1f1;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s;
}

.lang-toggle:hover {
  border-color: #00dc82;
  color: #00dc82;
}
</style>
