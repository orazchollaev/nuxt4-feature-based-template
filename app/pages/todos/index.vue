<!-- app/pages/todos/index.vue -->
<template>
  <div class="todos-page">
    <div class="page-header">
      <h1 class="page-title">
        <span class="icon">✅</span>
        My Todos
      </h1>
      <p class="page-subtitle">Stay organized and productive</p>
    </div>

    <div class="todos-container">
      <div class="add-todo-section">
        <f-todo-form />
      </div>

      <div class="todos-content">
        <div class="stats-bar">
          <div class="stat-item">
            <span class="stat-label">Total</span>
            <span class="stat-value">{{ todos.length }}</span>
          </div>
          <div class="stat-item active">
            <span class="stat-label">Active</span>
            <span class="stat-value">{{ activeTodos.length }}</span>
          </div>
          <div class="stat-item completed">
            <span class="stat-label">Completed</span>
            <span class="stat-value">{{ completedTodos.length }}</span>
          </div>
        </div>

        <div class="todo-list-wrapper">
          <f-todo-list v-if="todos.length > 0" />
          <div v-else class="empty-state">
            <div class="empty-icon">📝</div>
            <h3>No todos yet</h3>
            <p>Add your first todo above to get started!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { todos, activeTodos, completedTodos } = useTodo();
</script>

<style scoped>
.todos-page {
  max-width: 900px;
  margin: 0 auto;
}

/* Page Header */
.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  color: #2d3748;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.icon {
  font-size: 3rem;
}

.page-subtitle {
  font-size: 1.25rem;
  color: #718096;
}

/* Todos Container */
.todos-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Add Todo Section */
.add-todo-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
}

/* Stats Bar */
.stats-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-item {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.stat-item.active {
  border-color: #667eea;
  background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
}

.stat-item.completed {
  border-color: #48bb78;
  background: linear-gradient(135deg, #48bb7810 0%, #38a16910 100%);
}

.stat-label {
  display: block;
  font-size: 0.9rem;
  color: #718096;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
}

/* Todo List Wrapper */
.todo-list-wrapper {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  min-height: 300px;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
}

.empty-icon {
  font-size: 5rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-state h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.empty-state p {
  color: #718096;
  font-size: 1.1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .icon {
    font-size: 2rem;
  }

  .stats-bar {
    grid-template-columns: 1fr;
  }

  .add-todo-section,
  .todo-list-wrapper {
    padding: 1.5rem;
  }
}
</style>
