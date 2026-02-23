<script setup lang="ts">
import type { TodoFilter } from "../types/todo.type";

useSeoMeta({
  title: "Nuxt 4 Feature-Based Starter",
  description:
    "Scalable Nuxt 4 architecture with feature-based structure and auto routing",
});

const store = useTodoStore();

const todos = computed(() => store.todos);
const filter = computed(() => store.filter);
const activeCount = computed(() => store.activeCount);
const completedCount = computed(() => store.completedCount);

const filters: TodoFilter[] = ["all", "active", "completed"];

const addTodo = (title: string) => store.addTodo(title);
const toggleTodo = (id: string) => store.toggleTodo(id);
const deleteTodo = (id: string) => store.deleteTodo(id);
const setFilter = (newFilter: TodoFilter) => store.setFilter(newFilter);
</script>

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
      <p>{{ activeCount }} active · {{ completedCount }} completed</p>
    </div>
  </div>
</template>

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
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: #e2e8f0;
}

.filters {
  display: flex;
  gap: 0.5rem;
}

.filter-btn {
  padding: 0.4rem 1rem;
  background: #151515;
  border: 1px solid #2a2a2a;
  border-radius: 6px;
  cursor: pointer;
  text-transform: capitalize;
  color: #6b7280;
  font-size: 0.875rem;
  transition: all 0.2s;
}

.filter-btn:hover {
  border-color: #00dc82;
  color: #e2e8f0;
}

.filter-btn.active {
  background: #00dc82;
  color: #0f0f0f;
  border-color: #00dc82;
  font-weight: 600;
}

.stats {
  margin-top: 1.5rem;
  padding: 0.875rem 1rem;
  background: #151515;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  text-align: center;
  color: #4b5563;
  font-size: 0.875rem;
}
</style>
