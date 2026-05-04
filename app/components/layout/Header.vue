<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const colorMode = useColorMode()

const toggleLocale = async () => {
  const available = locales.value.map((l) => (typeof l === "string" ? l : l.code))
  const next = available.find((l) => l !== locale.value)
  if (next) await setLocale(next)
}

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
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

        <div class="controls">
          <button
            class="toggle"
            :title="colorMode.value === 'dark' ? 'Light mode' : 'Dark mode'"
            @click="toggleColorMode"
          >
            <IconDarkMode v-if="colorMode.value == 'dark'" />
            <IconLightMode v-else />
          </button>
          <button class="toggle" @click="toggleLocale">
            {{ locale.toUpperCase() }}
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: var(--bg);
  border-bottom: 1px solid var(--border);
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
  color: var(--text);
  text-decoration: none;
  letter-spacing: -0.02em;
  transition: color 0.2s;
}

.logo:hover {
  color: var(--accent);
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s;
  position: relative;
}

.nav-link:hover {
  color: var(--text);
}

.nav-link.router-link-active {
  color: var(--accent);
}

.nav-link.router-link-active::after {
  content: "";
  position: absolute;
  bottom: -1.25rem;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent);
}

.controls {
  display: flex;
  gap: 0.75rem;
}

.toggle {
  display: flex;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s;
}

.toggle:hover {
  border-color: var(--accent);
  color: var(--accent);
}
</style>
