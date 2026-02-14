<script setup lang="ts">
interface Emits {
  (e: "submit", title: string): void;
}

const emit = defineEmits<Emits>();

const title = ref("");

const handleSubmit = () => {
  if (title.value.trim()) {
    emit("submit", title.value);
    title.value = "";
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="todo-form">
    <input
      v-model="title"
      type="text"
      placeholder="What needs to be done?"
      class="input"
      required
    />

    <button type="submit" class="submit-btn">Add Todo</button>
  </form>
</template>

<style scoped>
.todo-form {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.input:focus {
  outline: none;
  border-color: #3b82f6;
}

.submit-btn {
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.submit-btn:hover {
  background: #2563eb;
}
</style>
