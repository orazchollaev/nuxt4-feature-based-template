<template>
  <div class="todo-page">
    <div class="header">
      <h1>Todo App</h1>
      <div class="filters">
        <button
          v-for="f in filters"
          :key="f"
          @click="setFilter(f)"
          :class="{ active: filter === f }"
          class="filter-btn"
        >
          {{ f }}
        </button>
      </div>
    </div>

    <FTodoForm @submit="addTodo" />

    <FTodoList :todos="todos" @toggle="toggleTodo" @delete="deleteTodo" />

    <div v-if="todos.length > 0" class="stats">
      <p>{{ activeCount }} active, {{ completedCount }} completed</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  useTodoStore,
  type TodoFilter,
  FTodoForm,
  FTodoList,
} from "~/features/todo";

const store = useTodoStore();

const todos = computed(() => store.todos);
const filter = computed(() => store.filter);
const activeCount = computed(() => store.activeCount);
const completedCount = computed(() => store.completedCount);

const filters: TodoFilter[] = ["all", "active", "completed"];

const addTodo = (title: string) => {
  store.addTodo(title);
};

const toggleTodo = (id: string) => {
  store.toggleTodo(id);
};

const deleteTodo = (id: string) => {
  store.deleteTodo(id);
};

const setFilter = (newFilter: TodoFilter) => {
  store.setFilter(newFilter);
};
</script>

<style scoped>
.todo-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin: 0;
}

.filters {
  display: flex;
  gap: 0.5rem;
}

.filter-btn {
  padding: 0.5rem 1rem;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  cursor: pointer;
  text-transform: capitalize;
  transition: all 0.2s;
}

.filter-btn:hover {
  border-color: #3b82f6;
}

.filter-btn.active {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.stats {
  margin-top: 2rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 0.5rem;
  text-align: center;
  color: #6b7280;
}
</style>
