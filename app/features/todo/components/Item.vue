<script setup lang="ts">
import type { Todo } from "../types/todo.type"

interface Props {
  todo: Todo
}

interface Emits {
  (e: "toggle" | "delete"): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
  <div class="todo-item" :class="{ completed: todo.completed }">
    <input type="checkbox" :checked="todo.completed" class="checkbox" @change="$emit('toggle')" />
    <span class="title">{{ todo.title }}</span>
    <button class="delete-btn" @click="$emit('delete')">
      {{ $t("todo.delete") }}
    </button>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: all 0.2s;
}

.todo-item:hover {
  border-color: var(--border-hover);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.todo-item.completed .title {
  text-decoration: line-through;
  color: var(--text-dim);
}

.checkbox {
  width: 1.1rem;
  height: 1.1rem;
  cursor: pointer;
  accent-color: var(--accent);
}

.title {
  flex: 1;
  font-size: 0.95rem;
  color: var(--text-sub);
}

.delete-btn {
  padding: 0.35rem 0.875rem;
  background: transparent;
  color: var(--text-muted);
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s;
}

.delete-btn:hover {
  background: #ef4444;
  color: white;
  border-color: #ef4444;
}
</style>
