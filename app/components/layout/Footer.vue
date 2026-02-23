<template>
  <footer class="footer">
    <div class="container">
      <p>Built with <span class="heart">♥</span> by OrazChollaev</p>
      <p class="copyright">© {{ year }} - Feature-Based Architecture</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: #0f0f0f;
  border-top: 1px solid #2a2a2a;
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
  color: #6b7280;
}

.heart {
  color: #ef4444;
  animation: heartbeat 1.5s ease-in-out infinite;
  display: inline-block;
}

.copyright {
  font-size: 0.875rem;
  color: #4b5563;
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
</style>
