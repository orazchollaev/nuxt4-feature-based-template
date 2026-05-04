<script setup lang="ts">
import type { TodoFilterItem, TodoFilterType } from "../types/todo.type"

useSeoMeta({
  title: "Nuxt 4 Feature-Based Starter",
  description: "Scalable Nuxt 4 architecture with feature-based structure and auto routing",
})

const store = useTodoStore()

const todos = computed(() => store.todos)
const filter = computed(() => store.filter)
const activeCount = computed(() => store.activeCount)
const completedCount = computed(() => store.completedCount)

const filters: TodoFilterItem[] = [
  { id: "all", text: () => $t("todo.all") },
  { id: "active", text: () => $t("todo.active") },
  { id: "completed", text: () => $t("todo.completed") },
]

const addTodo = (title: string) => store.addTodo(title)
const toggleTodo = (id: string) => store.toggleTodo(id)
const deleteTodo = (id: string) => store.deleteTodo(id)
const setFilter = (newFilter: TodoFilterType) => store.setFilter(newFilter)
</script>

<template>
  <div class="todo-page">
    <div class="header">
      <h1>{{ $t("todo.appName") }}</h1>
      <div class="filters">
        <button
          v-for="f in filters"
          :key="f.id"
          :class="{ active: filter === f.id }"
          class="filter-btn"
          @click="setFilter(f.id)"
        >
          {{ f.text() }}
        </button>
      </div>
    </div>

    <FTodoForm @submit="addTodo" />
    <FTodoList :todos="todos" @toggle="toggleTodo" @delete="deleteTodo" />

    <div v-if="todos.length > 0" class="stats">
      <p>
        {{ activeCount }} {{ $t("todo.active") }} · {{ completedCount }}
        {{ $t("todo.completed") }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.todo-page {
  max-width: 900px;
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
  color: var(--text-sub);
}

.filters {
  display: flex;
  gap: 0.5rem;
}

.filter-btn {
  padding: 0.4rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  text-transform: capitalize;
  color: var(--text-muted);
  font-size: 0.875rem;
  transition: all 0.2s;
}

.filter-btn:hover {
  border-color: var(--accent);
  color: var(--text-sub);
}

.filter-btn.active {
  background: var(--accent);
  color: var(--accent-text);
  border-color: var(--accent);
  font-weight: 600;
}

.stats {
  margin-top: 1.5rem;
  padding: 0.875rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  text-align: center;
  color: var(--text-dim);
  font-size: 0.875rem;
}
</style>
