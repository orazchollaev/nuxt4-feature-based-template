<template>
  <footer class="footer">
    <div class="container">
      <p>
        Built with <span class="heart">♥</span> using Nuxt 4 & Barrel Exports
      </p>
      <p class="copyright">© {{ year }} - Feature-Based Architecture</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  background: #1f2937;
  color: white;
  margin-top: 4rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.footer p {
  margin: 0.5rem 0;
  color: #d1d5db;
}

.heart {
  color: #ef4444;
  animation: heartbeat 1.5s ease-in-out infinite;
}

.copyright {
  font-size: 0.875rem;
  color: #9ca3af;
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>
