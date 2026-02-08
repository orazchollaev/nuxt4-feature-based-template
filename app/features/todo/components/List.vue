<!-- app/features/todo/components/List.vue -->
<template>
  <div class="todo-list">
    <f-todo-item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle="toggleTodo"
    />
  </div>
</template>

<script setup lang="ts">
const { todos, toggleTodo } = useTodo();
</script>

<style scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
