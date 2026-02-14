<template>
  <div class="home-page">
    <h1>Welcome to Nuxt 4</h1>
    <p>Feature-based architecture with barrel exports</p>

    <div class="features">
      <div class="feature-card">
        <h2>🎯 Barrel Exports</h2>
        <p>Clean imports from feature modules</p>
      </div>

      <div class="feature-card">
        <h2>📦 Feature-Based</h2>
        <p>Organized by business domain</p>
      </div>

      <div class="feature-card">
        <h2>🚀 Type-Safe</h2>
        <p>Full TypeScript support</p>
      </div>
    </div>

    <NuxtLink to="/todo" class="cta-btn"> Go to Todo App </NuxtLink>
  </div>
</template>

<script setup lang="ts">
// Home page
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

p {
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 3rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.feature-card {
  padding: 2rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.feature-card h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.feature-card p {
  font-size: 1rem;
  margin-bottom: 0;
}

.cta-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  transition: background 0.2s;
}

.cta-btn:hover {
  background: #2563eb;
}
</style>
