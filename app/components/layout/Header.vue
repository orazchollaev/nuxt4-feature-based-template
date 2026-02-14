<template>
  <header class="header">
    <div class="container">
      <NuxtLink to="/" class="logo"> Nuxt 4 Template </NuxtLink>

      <nav class="nav">
        <NuxtLink to="/" class="nav-link"> Home </NuxtLink>
        <NuxtLink to="/todo" class="nav-link"> Todo </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
// Header component
</script>

<style scoped>
.header {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 100;
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
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  text-decoration: none;
  transition: color 0.2s;
}

.logo:hover {
  color: #3b82f6;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #6b7280;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;
}

.nav-link:hover {
  color: #1f2937;
}

.nav-link.router-link-active {
  color: #3b82f6;
}

.nav-link.router-link-active::after {
  content: "";
  position: absolute;
  bottom: -1.25rem;
  left: 0;
  right: 0;
  height: 2px;
  background: #3b82f6;
}
</style>
