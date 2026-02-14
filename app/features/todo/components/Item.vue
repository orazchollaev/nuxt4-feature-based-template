<script setup lang="ts">
import type { Todo } from "../types";

interface Props {
  todo: Todo;
}

interface Emits {
  (e: "toggle"): void;
  (e: "delete"): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <div class="todo-item" :class="{ completed: todo.completed }">
    <input
      type="checkbox"
      :checked="todo.completed"
      @change="$emit('toggle')"
      class="checkbox"
    />

    <span class="title">{{ todo.title }}</span>

    <button @click="$emit('delete')" class="delete-btn">Delete</button>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.todo-item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.todo-item.completed .title {
  text-decoration: line-through;
  color: #9ca3af;
}

.checkbox {
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
}

.title {
  flex: 1;
  font-size: 1rem;
}

.delete-btn {
  padding: 0.5rem 1rem;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background 0.2s;
}

.delete-btn:hover {
  background: #dc2626;
}
</style>
