<template>
  <footer class="footer">
    <div class="container">
      <p>
        {{ $t("layout.footer.builtWith") }}
        <span class="heart">♥</span>
        OrazChollaev
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg);
  border-top: 1px solid var(--border);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.footer p {
  margin: 0.5rem 0;
  color: var(--text-muted);
}

.heart {
  color: #ef4444;
  animation: heartbeat 1.5s ease-in-out infinite;
  display: inline-block;
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
