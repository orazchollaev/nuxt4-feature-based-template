<script setup lang="ts">
// Header component
</script>

<template>
  <header class="header">
    <div class="container">
      <NuxtLink to="/" class="logo">OrazChollaev</NuxtLink>

      <nav class="nav">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/todo" class="nav-link">Todo</NuxtLink>
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
</style>
