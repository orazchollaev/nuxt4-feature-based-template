<!-- app/features/todo/components/Form.vue -->
<template>
  <form @submit.prevent="handleSubmit" class="todo-form">
    <div class="form-group">
      <input
        v-model="title"
        type="text"
        placeholder="What needs to be done?"
        class="todo-input"
        required
      />
      <button type="submit" class="add-button">
        <span class="button-icon">+</span>
        <span class="button-text">Add Todo</span>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
const { addTodo } = useTodo();
const title = ref("");

const handleSubmit = () => {
  if (title.value.trim()) {
    addTodo(title.value);
    title.value = "";
  }
};
</script>

<style scoped>
.todo-form {
  width: 100%;
}

.form-group {
  display: flex;
  gap: 1rem;
  width: 100%;
}

.todo-input {
  flex: 1;
  padding: 1rem 1.5rem;
  border: 2px solid transparent;
  border-radius: 0.75rem;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.95);
  color: #2d3748;
  transition: all 0.3s ease;
  outline: none;
}

.todo-input::placeholder {
  color: #a0aec0;
}

.todo-input:focus {
  background: white;
  border-color: white;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.add-button {
  padding: 1rem 2rem;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.add-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  background: #f7fafc;
}

.add-button:active {
  transform: translateY(-1px);
}

.button-icon {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
}

.button-text {
  display: inline;
}

/* Responsive */
@media (max-width: 640px) {
  .form-group {
    flex-direction: column;
  }

  .add-button {
    width: 100%;
    justify-content: center;
  }

  .button-text {
    display: inline;
  }
}
</style>
