<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">MyApp</h1>
      <nav class="nav">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/todo">Todos</NuxtLink>
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
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #00dc82;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.2s;
}

.nav a:hover {
  color: #00dc82;
}

.nav a.router-link-active {
  color: #00dc82;
  border-bottom: 2px solid #00dc82;
  padding-bottom: 0.25rem;
}
</style>
