<script setup lang="ts">
// Empty state component
</script>

<template>
  <div class="todo-empty">
    <p>No todos found. Create your first todo!</p>
  </div>
</template>

<style scoped>
.todo-empty {
  padding: 3rem 2rem;
  text-align: center;
  color: var(--text-dim);
  background: var(--bg-surface);
  border: 2px dashed var(--border);
  border-radius: 8px;
  font-size: 0.95rem;
}
</style>
