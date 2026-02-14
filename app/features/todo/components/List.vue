<template>
  <div class="todo-list">
    <FTodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle="$emit('toggle', todo.id)"
      @delete="$emit('delete', todo.id)"
    />

    <FTodoEmpty v-if="todos.length === 0" />
  </div>
</template>

<script setup lang="ts">
import type { Todo } from "../types";
import { FTodoItem } from "..";

interface Props {
  todos: Todo[];
}

interface Emits {
  (e: "toggle", id: string): void;
  (e: "delete", id: string): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<style scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
