<!-- app/layouts/default.vue -->
<template>
  <div class="app-layout">
    <LayoutHeader />

    <main class="main-content">
      <slot />
    </main>

    <LayoutFooter />
  </div>
</template>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    sans-serif;
  background: #f7fafc;
  color: #2d3748;
  line-height: 1.6;
}

.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
}

/* Smooth transitions */
* {
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

/* Link styles */
a {
  color: #667eea;
  transition: all 0.3s ease;
}

a:hover {
  color: #764ba2;
}
</style>
