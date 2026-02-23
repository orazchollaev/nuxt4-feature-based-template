<script setup lang="ts">
import type { Todo } from "../types/todo.type";

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
  padding: 1rem 1.25rem;
  background: #151515;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  transition: all 0.2s;
}

.todo-item:hover {
  border-color: #3a3a3a;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.todo-item.completed .title {
  text-decoration: line-through;
  color: #4b5563;
}

.checkbox {
  width: 1.1rem;
  height: 1.1rem;
  cursor: pointer;
  accent-color: #00dc82;
}

.title {
  flex: 1;
  font-size: 0.95rem;
  color: #e2e8f0;
}

.delete-btn {
  padding: 0.35rem 0.875rem;
  background: transparent;
  color: #6b7280;
  border: 1px solid #2a2a2a;
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
