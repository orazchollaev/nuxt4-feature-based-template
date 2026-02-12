<template>
  <div class="todo-list">
    <div v-if="todos.length === 0" class="empty">
      <p>No todos yet. Create one!</p>
    </div>

    <div v-else>
      <div v-for="todo in todos" :key="todo.id" class="todo-item">
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="toggleTodo(todo.id)"
          class="checkbox"
        />
        <span :class="{ completed: todo.completed }">
          {{ todo.title }}
        </span>
        <button @click="removeTodo(todo.id)" class="delete-btn">×</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { todos, toggleTodo, removeTodo } = useTodo();
</script>

<style scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.empty {
  text-align: center;
  padding: 2rem;
  color: #999;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 4px;
  border: 1px solid #eee;
  transition: all 0.2s;
}

.todo-item:hover {
  border-color: #00dc82;
  box-shadow: 0 2px 8px rgba(0, 220, 130, 0.1);
}

.checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.todo-item span {
  flex: 1;
  font-size: 1rem;
}

.todo-item span.completed {
  text-decoration: line-through;
  color: #999;
}

.delete-btn {
  background: #ff4757;
  color: white;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background 0.2s;
}

.delete-btn:hover {
  background: #ff3838;
}
</style>
