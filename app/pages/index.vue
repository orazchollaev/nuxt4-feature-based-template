<template>
  <div class="home">
    <h1>Welcome to Nuxt 4 Feature-Based Template</h1>

    <section class="intro">
      <p>This is a production-ready starter with feature-based architecture.</p>
      <p>
        Navigate to <NuxtLink to="/todo">Todos</NuxtLink> to see the feature in
        action.
      </p>
    </section>

    <section class="features">
      <h2>Features</h2>
      <ul>
        <li>✅ Feature-based architecture</li>
        <li>✅ Auto-imported components & composables</li>
        <li>✅ Smart component naming</li>
        <li>✅ Pinia state management</li>
        <li>✅ TypeScript support</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
// Home page
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.intro {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #00dc82;
}

.intro p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
  line-height: 1.6;
}

.intro a {
  color: #00dc82;
  text-decoration: none;
  font-weight: bold;
}

.intro a:hover {
  text-decoration: underline;
}

.features {
  background: white;
  padding: 2rem;
  border-radius: 8px;
}

.features ul {
  list-style: none;
  padding: 0;
}

.features li {
  padding: 0.75rem 0;
  font-size: 1.1rem;
}
</style>
