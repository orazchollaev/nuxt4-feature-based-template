<template>
  <div class="todos-page">
    <h1>My Todos</h1>

    <div class="stats">
      <div class="stat">
        <span class="label">Total:</span>
        <span class="value">{{ totalCount }}</span>
      </div>
      <div class="stat">
        <span class="label">Completed:</span>
        <span class="value">{{ completedCount }}</span>
      </div>
      <div class="stat">
        <span class="label">Progress:</span>
        <span class="value">{{ progress }}%</span>
      </div>
    </div>

    <div class="form">
      <input
        v-model="newTodoTitle"
        type="text"
        placeholder="Add a new todo..."
        @keyup.enter="handleAddTodo"
        class="input"
      />
      <button @click="handleAddTodo" class="add-btn">Add</button>
    </div>

    <f-todo-list />
  </div>
</template>

<script setup lang="ts">
const { todos, completedCount, totalCount, progress, addTodo } = useTodo();
const newTodoTitle = ref("");

const handleAddTodo = () => {
  if (newTodoTitle.value.trim()) {
    addTodo({ title: newTodoTitle.value });
    newTodoTitle.value = "";
  }
};
</script>

<style scoped>
.todos-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

h1 {
  font-size: 2rem;
  color: #333;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.stat {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat .label {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}

.stat .value {
  font-size: 1.8rem;
  font-weight: bold;
  color: #00dc82;
}

.form {
  display: flex;
  gap: 1rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #eee;
}

.input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.input:focus {
  outline: none;
  border-color: #00dc82;
  box-shadow: 0 0 0 3px rgba(0, 220, 130, 0.1);
}

.add-btn {
  padding: 0.75rem 2rem;
  background: #00dc82;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

.add-btn:hover {
  background: #00c973;
}
</style>
